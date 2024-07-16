import React, { useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
import { slideItem } from "@/components/shared/animations";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";

interface ImageGalleryProps extends DefaultBoxProps {
  imagesUrl?: { img: string; alt: string; figcaption: string }[];
  squared?: boolean;
  columns?: number;
  mdColumns?: number;
  xsColumns?: number;
  space?: string;
}

export default function ImageGallery({
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
  columns = 4,
  mdColumns = 3,
  xsColumns = 2,
  space = "20px",
  isRounded,
  isCircled,
  animation = "fadeIn",
  hasShadow,
  bgBackdropClose,
  figcaption
}: ImageGalleryProps) {
  const [imageGalleryBox, setImageGalleryBox] = useState(false);
  const imageGalleryToggle = () => setImageGalleryBox(!imageGalleryBox);
  const [currentImage, setCurrentImage] = useState(0);
  const prev = () => setCurrentImage(currentImage - 1);
  const next = () => setCurrentImage(currentImage + 1);
  const openCloseImageGalleryBox = (indexPosition?: number) => {
    setImageGalleryBox(!imageGalleryBox);
    setCurrentImage(indexPosition || 0);
  };

  return (
    <>
      <div className={`image-gallery-wrap ${squared ? "squared" : ""}`}>
        {imagesUrl.map((image, index) => (
          <figure key={index} className="image-gallery" onClick={() => openCloseImageGalleryBox(index)}>
            <img
              src={image.img}
              alt={image.alt}
              className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
      <AnimatePresence>
        {imageGalleryBox && (
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
              onClick={bgBackdropClose ? imageGalleryToggle : () => ({})}
            />
            <button onClick={imageGalleryToggle} className="close-button" type="button">
              <CloseIcon />
            </button>
            <button type="button" disabled={currentImage === 0} onClick={prev} className="left-button">
              <PrevIcon />
            </button>
            <button type="button" disabled={currentImage === imagesUrl.length - 1} onClick={next} className="right-button">
              <NextIcon />
            </button>
            <AnimatePresence mode="wait">
              {imagesUrl.map(
                (image, index) =>
                  currentImage === index && (
                    <motion.figure
                      key={index}
                      variants={getAnimation(animation)}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
                    >
                      <img
                        src={image.img}
                        alt={image.alt}
                        loading="lazy"
                        className={`image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
                      />
                      {figcaption && <figcaption>{image.figcaption}</figcaption>}
                    </motion.figure>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .image-gallery-wrap {
          gap: ${space};
          grid-template-columns: repeat(${columns}, 1fr);
        }

        @media only screen and (max-width: 989px) {
          .image-gallery-wrap {
            grid-template-columns: repeat(${mdColumns}, 1fr);
          }
        }

        @media only screen and (max-width: 575px) {
          .image-gallery-wrap {
            grid-template-columns: repeat(${xsColumns}, 1fr);
          }
        }
      `}</style>
    </>
  );
}
