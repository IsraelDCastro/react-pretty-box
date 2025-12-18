import React, { useCallback, useMemo, useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation, useDialogAccessibility } from "@/components/shared";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";
import ErrorMessage from "./shared/errorMessage";

interface ProductGalleryProps extends DefaultBoxProps {
	imagesUrl?: { url: string; alt: string; figcaption: string }[];
	space?: string;
	isVertical?: boolean;
	figcaption?: boolean;
}

export default function ProductGallery({
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
	space = "10px",
	isRounded,
	isCircled,
	animation = "fadeIn",
	hasShadow,
	bgBackdropClose,
	figcaption,
	isVertical
}: ProductGalleryProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openGalleryAt = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
	}, []);

	const closeGallery = useCallback(() => setIsOpen(false), []);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => Math.min(prev + 1, Math.max(imagesUrl.length - 1, 0)));
	}, [imagesUrl.length]);

	const { dialogProps } = useDialogAccessibility({ isOpen, onClose: closeGallery, onPrevious: goToPrevious, onNext: goToNext });

	const handleThumbnailKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>, index: number) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openGalleryAt(index);
			}
		},
		[openGalleryAt]
	);

	const mainImage = useMemo(() => imagesUrl[0], [imagesUrl]);
	const activeImage = useMemo(() => imagesUrl[currentIndex], [currentIndex, imagesUrl]);
	const canGoPrevious = currentIndex > 0;
	const canGoNext = currentIndex < imagesUrl.length - 1;
	const figcaptionId = figcaption && activeImage ? `product-gallery-caption-${currentIndex}` : undefined;

	return (
		<>
			{Array.isArray(imagesUrl) && imagesUrl.length ? (
				<>
					<div className={`product-gallery-wrap ${isVertical ? "is-vertical" : ""}`}>
						{mainImage && (
							<figure
								className="main-product-gallery"
								role="button"
								tabIndex={0}
								aria-haspopup="dialog"
								aria-expanded={isOpen && currentIndex === 0}
								aria-label={mainImage.alt ? `Abrir visor para ${mainImage.alt}` : "Abrir visor de producto"}
								onClick={() => openGalleryAt(0)}
								onKeyDown={(event) => handleThumbnailKeyDown(event, 0)}
							>
								<img
									src={mainImage.url}
									alt={mainImage.alt}
									className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
									loading="lazy"
								/>
							</figure>
						)}
						<div className="carousel-product-image">
							{imagesUrl.map((image, index) => (
								<figure
									key={index}
									className="product-gallery"
									role="button"
									tabIndex={0}
									aria-haspopup="dialog"
									aria-expanded={isOpen && currentIndex === index}
									aria-label={image.alt ? `Abrir visor para ${image.alt}` : `Abrir imagen ${index + 1}`}
									onClick={() => openGalleryAt(index)}
									onKeyDown={(event) => handleThumbnailKeyDown(event, index)}
								>
									<img
										src={image.url}
										alt={image.alt}
										className={`image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
										loading="lazy"
									/>
								</figure>
							))}
						</div>
					</div>
					<AnimatePresence>
						{isOpen && activeImage && (
							<motion.div
								{...dialogProps}
								variants={getAnimation(animation)}
								initial="initial"
								animate="animate"
								exit="exit"
								className="product-gallery-pretty-box"
								aria-label="Visor de galería de producto"
								aria-describedby={figcaptionId}
							>
								<button
									type="button"
									className="bg-backdrop"
									aria-hidden="true"
									tabIndex={-1}
									onClick={bgBackdropClose ? closeGallery : undefined}
								/>
								<button
									className="close-button"
									type="button"
									onClick={closeGallery}
									aria-label="Cerrar visor de producto"
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
									{activeImage && (
										<motion.figure
											key={`${activeImage.url}-${currentIndex}`}
											variants={getAnimation(animation)}
											initial="initial"
											animate="animate"
											exit="exit"
											className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
										>
											<img
												src={activeImage.url}
												alt={activeImage.alt}
												loading="lazy"
												className={`image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}
											/>
											{figcaption && (
												<figcaption id={figcaptionId} aria-live="polite" role="status">
													{activeImage.figcaption}
												</figcaption>
											)}
										</motion.figure>
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
			) : (
				<ErrorMessage
					message="There are no images to display. This could be because the image list is empty or there was an error loading the images."
					suggestions={[
						"Check if you've provided a valid list of images to the component.",
						"Ensure that all image URLs are correct and accessible.",
						"If the problem persists, try refreshing the page or contact support."
					]}
				/>
			)}
		</>
	);
}
