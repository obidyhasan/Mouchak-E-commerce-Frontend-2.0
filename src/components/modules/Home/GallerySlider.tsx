import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import galleryImg from "@/assets/images/honey-2.webp";

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

  return (
    <div ref={sliderRef} className="mt-10 keen-slider ">
      <div className="keen-slider__slide">
        <img
          src={galleryImg}
          alt="gallery image"
          className="h-96 object-cover w-full"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src={galleryImg}
          alt="gallery image"
          className="h-96 object-cover w-full"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src={galleryImg}
          alt="gallery image"
          className="h-96 object-cover w-full"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src={galleryImg}
          alt="gallery image"
          className="h-96 object-cover w-full"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src={galleryImg}
          alt="gallery image"
          className="h-96 object-cover w-full"
        />
      </div>
    </div>
  );
};

export default GallerySlider;
