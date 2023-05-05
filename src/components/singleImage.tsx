import React, { useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
import { CloseIcon } from "@/components/shared/icons";

interface SingleImageProps extends DefaultBoxProps {
  imageUrl: string;
}
export default function SingleImage({
  imageUrl = "https://picsum.photos/1280/720?random",
  animation = "fadeIn",
  alt,
  isRounded,
  hasShadow,
  isCircled,
  figcaption,
  bgBackdropClose
}: SingleImageProps) {
  const [singleImageBox, setSingleImageBox] = useState(false);

  const singleImageToggle = () => setSingleImageBox(!singleImageBox);
  return (
    <div>
      <figure
        onClick={singleImageToggle}
        className={`single-image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
      >
        <img src={imageUrl} alt={alt} loading="lazy" className="image" />
      </figure>
      <AnimatePresence>
        {singleImageBox && (
          <motion.div
            variants={getAnimation(animation)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="single-image-pretty-box"
          >
            <div
              aria-label="Open image"
              tabIndex={-1}
              role="button"
              className="bg-backdrop"
              onClick={bgBackdropClose ? singleImageToggle : () => ({})}
            />
            <button onClick={singleImageToggle} className="close-button" type="button">
              <CloseIcon />
            </button>
            <figure className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}>
              <img src={imageUrl} alt={alt} loading="lazy" className="image" />
              {figcaption && <figcaption>{figcaption}</figcaption>}
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
