import React, { useState, useRef, useEffect } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
import { slideItem } from "@/components/shared/animations";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";

interface ImageCarouselGalleryProps extends DefaultBoxProps {
  imagesUrl?: { img: string; alt: string; figcaption: string }[];
  squared?: boolean;
  columns?: number;
  mdColumns?: number;
  xsColumns?: number;
  space?: string;
}

export default function ImageCarouselGallery({
  imagesUrl = [
    { img: "https://picsum.photos/1280/720?random=1", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=2", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=3", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=4", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=5", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=6", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=7", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
    { img: "https://picsum.photos/1280/720?random=8", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" }
  ],
  squared = false,
  columns = 8,
  mdColumns = 5,
  xsColumns = 3,
  space = "20px",
  isRounded,
  isCircled,
  hasShadow,
  animation = "fadeIn",
  bgBackdropClose,
  figcaption
}: ImageCarouselGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageCarouselGalleryBox, setImageCarouselGalleryBox] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / imagesUrl.length;
      carouselRef.current.scrollTo({ left: itemWidth * index, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / imagesUrl.length;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentImage(newIndex);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setImageCarouselGalleryBox(true);
  };

  const closeModal = () => setImageCarouselGalleryBox(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % imagesUrl.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + imagesUrl.length) % imagesUrl.length);

  return (
    <>
      <motion.div variants={getAnimation(animation)} initial="initial" animate="animate" className="carousel-gallery-container">
        <div className={`carousel-gallery-wrap ${squared ? "squared" : ""}`} ref={carouselRef}>
          {imagesUrl.map((image, index) => (
            <figure key={index} className="carousel-item" onClick={() => openModal(index)}>
              <img
                src={image.img}
                alt={image.alt}
                className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <button type="button" onClick={() => scrollToImage(currentImage - 1)} className="left-button">
          <PrevIcon />
        </button>
        <button type="button" onClick={() => scrollToImage(currentImage + 1)} className="right-button">
          <NextIcon />
        </button>
      </motion.div>

      <AnimatePresence>
        {imageCarouselGalleryBox && (
          <motion.div
            variants={getAnimation(animation)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="image-gallery-pretty-box"
          >
            <div
              aria-label="Open image"
              tabIndex={-1}
              role="button"
              className="bg-backdrop"
              onClick={bgBackdropClose ? closeModal : () => ({})}
            />
            <button onClick={closeModal} className="close-button" type="button">
              <CloseIcon />
            </button>
            <button type="button" onClick={prevImage} className="left-button">
              <PrevIcon />
            </button>
            <button type="button" onClick={nextImage} className="right-button">
              <NextIcon />
            </button>
            <AnimatePresence mode="wait">
              <motion.figure
                key={currentImage}
                variants={getAnimation(animation)}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
              >
                <img
                  src={imagesUrl[currentImage].img}
                  alt={imagesUrl[currentImage].alt}
                  loading="lazy"
                  className={`image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
                />
                {figcaption && <figcaption>{imagesUrl[currentImage].figcaption}</figcaption>}
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .carousel-gallery-wrap {
          gap: ${space};
        }
        .carousel-item {
          flex: 0 0 calc(100% / ${columns});
          scroll-snap-align: start;
        }
        @media only screen and (max-width: 989px) {
          .carousel-item {
            flex: 0 0 calc(100% / ${mdColumns});
          }
        }

        @media only screen and (max-width: 575px) {
          .carousel-item {
            flex: 0 0 calc(100% / ${xsColumns});
          }
        }
      `}</style>
    </>
  );
}
