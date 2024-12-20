import React, { useState, useRef, useEffect } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";
import ErrorMessage from "./shared/errorMessage";

interface MosaicGalleryProps extends DefaultBoxProps {
	imagesUrl?: { url: string; alt: string; figcaption: string }[];
	squared?: boolean;
	columns?: number;
	mdColumns?: number;
	xsColumns?: number;
	space?: string;
	figcaption?: boolean;
}

export default function MosaicGallery({
	imagesUrl = [
		{ url: "https://picsum.photos/1280/720?random=1", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=2", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=3", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=4", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=5", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=6", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=7", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" },
		{ url: "https://picsum.photos/1280/720?random=8", alt: "Lorem ipsum", figcaption: "Lorem ipsum dolor sit amet" }
	],
	squared = false,
	space = "20px",
	isRounded,
	isCircled,
	animation = "fadeIn",
	hasShadow,
	bgBackdropClose,
	figcaption
}: MosaicGalleryProps) {
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
			{Array.isArray(imagesUrl) && imagesUrl[0] ? (
				<>
					<div className={`mosaic-gallery-wrap ${squared ? "squared" : ""}`}>
						{imagesUrl.slice(0, 4).map((image, index) => (
							<figure key={index} className="mosaic-gallery" onClick={() => openCloseImageGalleryBox(index)}>
								<img
									src={image.url}
									alt={image.alt}
									className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
									loading="lazy"
								/>
							</figure>
						))}
						{imagesUrl.slice(4).length >= 1 && <span role="button" onClick={() => openCloseImageGalleryBox(4)} className="more-images">More images +{imagesUrl.slice(4).length}</span>}
					</div>
					<AnimatePresence>
						{imageGalleryBox && (
							<motion.div
								variants={getAnimation(animation)}
								initial="initial"
								animate="animate"
								exit="exit"
								className="mosaic-gallery-pretty-box"
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
														src={image.url}
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
		        .mosaic-gallery-wrap {
		          gap: ${space};
		        }
		      `}</style>
				</>
			) : <ErrorMessage
				message="There are no images to display. This could be because the image list is empty or there was an error loading the images."
				suggestions={[
					"Check if you've provided a valid list of images to the component.",
					"Ensure that all image URLs are correct and accessible.",
					"If the problem persists, try refreshing the page or contact support."
				]}
			/>}
		</>
	);
}
