import React, { useCallback, useMemo, useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation, useDialogAccessibility } from "@/components/shared";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";
import ErrorMessage from "./shared/errorMessage";

interface MosaicGalleryProps extends DefaultBoxProps {
	imagesUrl?: { url: string; alt: string; figcaption: string }[];
	squared?: boolean;
	space?: string;
	figcaption?: boolean;
	quantity?: number;
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
	quantity = 4,
	hasShadow,
	bgBackdropClose,
	figcaption,
	classNames = {
		wrapper: "",
		image: "",
		imageWrapper: "",
		preNextBtn: "",
		closeBtn: "",
		moreBtn: ""
	}
}: MosaicGalleryProps) {
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

	const limitedImages = useMemo(() => imagesUrl.slice(0, quantity), [imagesUrl, quantity]);
	const remainingCount = useMemo(() => Math.max(imagesUrl.length - quantity, 0), [imagesUrl.length, quantity]);
	const activeImage = useMemo(() => imagesUrl[currentIndex], [currentIndex, imagesUrl]);
	const canGoPrevious = currentIndex > 0;
	const canGoNext = currentIndex < imagesUrl.length - 1;
	const figcaptionId = figcaption && activeImage ? `mosaic-gallery-caption-${currentIndex}` : undefined;

	if (!Array.isArray(imagesUrl) || imagesUrl.length === 0) {
		return (
			<ErrorMessage
				message="There are no images to display. This could be because the image list is empty or there was an error loading the images."
				suggestions={[
					"Check if you've provided a valid list of images to the component.",
					"Ensure that all image URLs are correct and accessible.",
					"If the problem persists, try refreshing the page or contact support."
				]}
			/>
		);
	}

	return (
		<>
			<div className={`mosaic-gallery-wrap ${classNames?.wrapper} ${squared ? "squared" : ""}`}>
				{limitedImages.map((image, index) => (
					<figure
						key={index}
						className={`${classNames?.imageWrapper} mosaic-gallery`}
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
							className={`image ${classNames?.image} ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
							loading="lazy"
						/>
					</figure>
				))}
				{remainingCount > 0 && (
					<button
						type="button"
						className={`more-images ${classNames?.moreBtn}`}
						onClick={() => openGalleryAt(Math.min(quantity, imagesUrl.length - 1))}
						aria-label={`Ver ${remainingCount} imágenes adicionales`}
					>
						Más imágenes +{remainingCount}
					</button>
				)}
			</div>
			<AnimatePresence>
				{isOpen && activeImage && (
					<motion.div
						{...dialogProps}
						variants={getAnimation(animation)}
						initial="initial"
						animate="animate"
						exit="exit"
						className="mosaic-gallery-pretty-box"
						aria-label="Visor de galería en mosaico"
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
							className={`close-button ${classNames?.closeBtn}`}
							type="button"
							onClick={closeGallery}
							aria-label="Cerrar visor de galería"
						>
							<CloseIcon />
						</button>
						<button
							className={`${classNames?.preNextBtn} left-button`}
							type="button"
							disabled={!canGoPrevious}
							onClick={goToPrevious}
							aria-label="Mostrar imagen anterior"
						>
							<PrevIcon />
						</button>
						<button
							className={`${classNames?.preNextBtn} right-button`}
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
	);
}
