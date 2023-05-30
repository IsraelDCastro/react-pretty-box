import React, { useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
import { slideItem } from "@/components/shared/animations";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";

interface ProductGalleryProps extends DefaultBoxProps {
  imagesUrl?: { img: string; alt: string; figcaption: string }[];
  space?: string;
  isVertical?: boolean;
}

export default function ProductGallery({
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
  space = "10px",
  isRounded,
  isCircled,
  animation = "fadeIn",
  hasShadow,
  bgBackdropClose,
  figcaption,
  isVertical
}: ProductGalleryProps) {
  const [productGalleryBox, setProductGalleryBox] = useState(false);
  const productGalleryToggle = () => setProductGalleryBox(!productGalleryBox);
  const [currentImage, setCurrentImage] = useState(0);
  const prev = () => setCurrentImage(currentImage - 1);
  const next = () => setCurrentImage(currentImage + 1);
  const openCloseProductGalleryBox = (indexPosition?: number) => {
    setProductGalleryBox(!productGalleryBox);
    setCurrentImage(indexPosition || 0);
  };

  return (
    <>
      <div className={`product-gallery-wrap ${isVertical ? "is-vertical" : ""}`}>
        <figure className="main-product-gallery" onClick={() => openCloseProductGalleryBox(0)}>
          <img
            src={imagesUrl[0].img}
            alt={imagesUrl[0].alt}
            className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
            loading="lazy"
          />
        </figure>
        <div className="carousel-product-image">
          {imagesUrl.map((image, index) => (
            <figure key={index} className="product-gallery" onClick={() => openCloseProductGalleryBox(index)}>
              <img
                src={image.img}
                alt={image.alt}
                className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {productGalleryBox && (
          <motion.div
            variants={getAnimation(animation)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="product-gallery-pretty-box"
          >
            <div
              aria-label="Open image"
              tabIndex={-1}
              role="button"
              className="bg-backdrop"
              onClick={bgBackdropClose ? productGalleryToggle : () => ({})}
            />
            <button onClick={productGalleryToggle} className="close-button" type="button">
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
                      variants={slideItem}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
                    >
                      <img
                        src={image.img}
                        alt={image.alt}
                        loading="lazy"
                        className={`${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
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
        .product-gallery-wrap {
          gap: ${space};
        }
      `}</style>
    </>
  );
}
