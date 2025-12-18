import React, { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DefaultBoxProps } from "./shared/interfaces";
import { CloseIcon, NextIcon, PrevIcon } from "./shared/icons";
import { getAnimation, useDialogAccessibility } from "./shared";

type AnimationOpts = "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "bounce" | "slideFade" | "slider-item";

interface SliderGalleryProps extends DefaultBoxProps {
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
	const [isOpen, setIsOpen] = useState(false);

	const totalImages = imagesUrl.length;
	const activeImage = useMemo(() => imagesUrl[currentIndex], [currentIndex, imagesUrl]);
	const canGoPrevious = currentIndex > 0;
	const canGoNext = currentIndex < totalImages - 1;
	const figcaptionId = figcaption && activeImage ? `slider-gallery-caption-${currentIndex}` : undefined;

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
	}, [totalImages]);

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
	}, [totalImages]);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => Math.min(prev + 1, Math.max(totalImages - 1, 0)));
	}, [totalImages]);

	const { dialogProps } = useDialogAccessibility({ isOpen, onClose: closeModal, onPrevious: goToPrevious, onNext: goToNext });

	const handleTriggerKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openModal();
		}
	}, [openModal]);

	if (!Array.isArray(imagesUrl) || imagesUrl.length === 0) {
		return null;
	}

	return (
		<div className="slider-gallery-wrap">
			<div
				role="button"
				tabIndex={0}
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				aria-label={activeImage.alt ? `Abrir visor para ${activeImage.alt}` : "Abrir visor de imagen"}
				onClick={openModal}
				onKeyDown={handleTriggerKeyDown}
			>
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={activeImage.url}
						alt={activeImage.alt}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.3 }}
						className={`${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
					/>
					{figcaption && (
						<motion.figcaption
							className="title-overlay"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: 0.3 }}
						>
							{activeImage.figcaption}
						</motion.figcaption>
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{isOpen && activeImage && (
					<motion.div
						{...dialogProps}
						variants={getAnimation(animation)}
						initial="initial"
						animate="animate"
						exit="exit"
						className="image-gallery-pretty-box"
						aria-label="Visor de carrusel"
						aria-describedby={figcaptionId}
					>
						<button
							type="button"
							className="bg-backdrop"
							aria-hidden="true"
							tabIndex={-1}
							onClick={bgBackdropClose ? closeModal : undefined}
						/>
						<button
							className="close-button"
							type="button"
							onClick={closeModal}
							aria-label="Cerrar visor"
						>
							<CloseIcon />
						</button>
						<button
							className="left-button"
							type="button"
							disabled={!canGoPrevious}
							onClick={goToPrevious}
							aria-label="Mostrar imagen anterior"
						>
							<PrevIcon />
						</button>
						<button
							className="right-button"
							type="button"
							disabled={!canGoNext}
							onClick={goToNext}
							aria-label="Mostrar imagen siguiente"
						>
							<NextIcon />
						</button>
						<AnimatePresence mode="wait">
							<motion.figure
								key={`${activeImage.url}-${currentIndex}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className={`lightbox-figure ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
							>
								<img
									src={activeImage.url}
									alt={activeImage.alt}
									className={`lightbox-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
								/>
								{figcaption && (
									<figcaption id={figcaptionId} aria-live="polite" role="status" className="lightbox-caption">
										{activeImage.figcaption}
									</figcaption>
								)}
							</motion.figure>
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
			<button type="button" onClick={prevSlide} className="prev-btn" aria-label="Mostrar imagen anterior en el carrusel">
				<PrevIcon />
			</button>
			<button type="button" onClick={nextSlide} className="next-btn" aria-label="Mostrar imagen siguiente en el carrusel">
				<NextIcon />
			</button>
			<div className="slider-dots" role="tablist" aria-label="Selector de imágenes del carrusel">
				{imagesUrl.map((image, index) => (
					<button
						key={index}
						type="button"
						onClick={() => setCurrentIndex(index)}
						className={`dot ${currentIndex === index ? "is-active" : ""}`}
						aria-label={image.alt ? `Mostrar ${image.alt}` : `Mostrar imagen ${index + 1}`}
						aria-pressed={currentIndex === index}
						role="tab"
					/>
				))}
			</div>
		</div>
	);
}
