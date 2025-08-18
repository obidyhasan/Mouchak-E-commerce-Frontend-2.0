/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetImagesQuery } from "@/redux/features/gallery/gallery.api";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/loadingSlice";
import { useEffect } from "react";

const animation = { duration: 12000, easing: (t: number) => t };

const GallerySlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 4,
      spacing: 8,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 8 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  const { data, isLoading } = useGetImagesQuery(undefined) || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  return (
    <div ref={sliderRef} className="mt-10 keen-slider ">
      {data?.map((gallery: any) => (
        <div key={gallery?._id} className="keen-slider__slide">
          <img
            src={gallery?.image}
            alt="gallery image"
            className="h-96 object-cover w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default GallerySlider;
