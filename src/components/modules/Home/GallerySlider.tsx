/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetImagesQuery } from "@/redux/features/gallery/gallery.api";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/loadingSlice";
import { useEffect, useMemo } from "react";

type GalleryItem = {
  _id: string;
  image: string;
};

const GallerySlider = () => {
  const { data = [], isLoading } = useGetImagesQuery(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  // If you have only a few images, repeat them so the loop feels continuous
  const base = useMemo<GalleryItem[]>(() => {
    if (!data.length) return [];
    if (data.length >= 6) return data;
    // repeat to make the strip long enough
    const repeat = Math.ceil(6 / data.length);
    return Array.from({ length: repeat })
      .flatMap(() => data)
      .slice(0, Math.max(6, data.length * repeat));
  }, [data]);

  // Duplicate once to create a seamless loop (total width = 2x)
  const marqueeItems = useMemo(() => [...base, ...base], [base]);

  // Speed: longer strip -> longer duration (tweak multiplier as you like)
  const durationSeconds = Math.max(20, base.length * 5); // e.g., 20s–60s+

  return (
    <div className="mt-10 overflow-hidden cursor-pointer">
      {/* Inline styles for the marquee animation */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* shift by one copy width */
        }
        .marquee-track {
          display: flex;
          gap: 8px;
          width: max-content;               /* fit content so -50% is one full copy */
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 40s);
          will-change: transform;           /* smoother on most browsers */
        }
        .marquee-track:hover {
          animation-play-state: paused;     /* pause on hover */
        }
      `}</style>

      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as any]: `${durationSeconds}s` }}
      >
        {marqueeItems.map((gallery: GalleryItem, idx: number) => (
          <div
            key={`${gallery._id}-${idx}`}
            className="shrink-0"
            // choose widths that look good for your design; keep them consistent
            // to avoid jitter. You can also use a single fixed width if preferred.
            style={{
              width: "320px", // <- adjust to taste (e.g., 280/320/360)
              height: "384px", // h-96
            }}
          >
            <img
              src={gallery.image}
              alt="gallery"
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
