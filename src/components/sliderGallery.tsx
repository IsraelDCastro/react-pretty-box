import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DefaultBoxProps } from "./shared/interfaces";
import { CloseIcon, NextIcon, PrevIcon } from "./shared/icons";
import { getAnimation } from "./shared";

type AnimationOpts = "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "bounce" | "slideFade" | "slider-item";

interface SliderGalleryProps {
	imagesUrl?: { url: string; alt: string; figcaption: string }[];
	figcaption?: boolean;
	bgBackdropClose?: boolean;
	isRounded?: boolean;
	hasShadow?: boolean;
	animation?: AnimationOpts;
}

export default function ImageSlider({
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
	figcaption,
	isRounded,
	hasShadow,
	animation = "fadeIn",
	bgBackdropClose
}: SliderGalleryProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [sliderGalleryBox, setSliderGalleryBox] = useState(false);
	const sliderGalleryToggle = () => setSliderGalleryBox(!sliderGalleryBox);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === imagesUrl.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? imagesUrl.length - 1 : prev - 1));
	};

	return (
		<div className="slider-gallery-wrap">
			<div onClick={sliderGalleryToggle}>
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={imagesUrl[currentIndex].url}
						alt={imagesUrl[currentIndex].alt}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.3 }}
					/>
					{figcaption && (

						<motion.figcaption
							className="title-overlay"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: .3 }}
						>
							{imagesUrl[currentIndex].figcaption}
						</motion.figcaption>
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{sliderGalleryBox && (
					<motion.div
						key={currentIndex}
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
							onClick={bgBackdropClose ? sliderGalleryToggle : () => ({})}
						/>
						<button onClick={sliderGalleryToggle} className="close-button" type="button">
							<CloseIcon />
						</button>
						<button type="button" disabled={currentIndex === 0} onClick={prevSlide} className="left-button">
							<PrevIcon />
						</button>
						<button type="button" disabled={currentIndex === imagesUrl.length - 1} onClick={nextSlide} className="right-button">
							<NextIcon />
						</button>
						<AnimatePresence mode="wait">
							<motion.figure
								key={currentIndex}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className={`lightbox-figure ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
							>
								<img
									src={imagesUrl[currentIndex].url}
									alt={imagesUrl[currentIndex].alt}
									className={`lightbox-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
								/>
								{figcaption && (
									<figcaption className="lightbox-caption">
										{imagesUrl[currentIndex].figcaption}
									</figcaption>
								)}
							</motion.figure>
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={prevSlide}
				className="prev-btn"
			>
				<PrevIcon />
			</button>
			<button
				onClick={nextSlide}
				className="next-btn"
			>
				<NextIcon />
			</button>
			<div className="slider-dots">
				{imagesUrl.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`dot ${currentIndex === index && "is-active"}`}
					/>
				))}
			</div>
		</div>
	);
};
