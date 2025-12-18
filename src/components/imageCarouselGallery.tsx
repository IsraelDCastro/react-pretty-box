import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation, useDialogAccessibility } from "@/components/shared";
import { CloseIcon, NextIcon, PrevIcon } from "@/components/shared/icons";
import ErrorMessage from "./shared/errorMessage";

interface ImageCarouselGalleryProps extends DefaultBoxProps {
	imagesUrl?: { url: string; alt: string; figcaption: string }[];
	squared?: boolean;
	columns?: number;
	mdColumns?: number;
	xsColumns?: number;
	space?: string;
	figcaption?: boolean;
}

export default function ImageCarouselGallery({
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
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);

	const totalImages = imagesUrl.length;
	const hasImages = Array.isArray(imagesUrl) && totalImages > 0;
	const activeImage = useMemo(() => imagesUrl[currentIndex], [currentIndex, imagesUrl]);
	const canGoPrevious = currentIndex > 0;
	const canGoNext = currentIndex < totalImages - 1;
	const figcaptionId = figcaption && activeImage ? `image-carousel-caption-${currentIndex}` : undefined;

	const scrollToImage = useCallback(
		(index: number) => {
			if (!carouselRef.current || totalImages === 0) return;
			const targetIndex = Math.min(Math.max(index, 0), totalImages - 1);
			const scrollWidth = carouselRef.current.scrollWidth;
			const itemWidth = scrollWidth / totalImages;
			carouselRef.current.scrollTo({ left: itemWidth * targetIndex, behavior: "smooth" });
		},
		[totalImages]
	);

	const handleScroll = useCallback(() => {
		if (!carouselRef.current || totalImages === 0) return;
		const scrollPosition = carouselRef.current.scrollLeft;
		const itemWidth = carouselRef.current.scrollWidth / totalImages;
		const newIndex = Math.round(scrollPosition / itemWidth);
		setCurrentIndex(Math.min(Math.max(newIndex, 0), totalImages - 1));
	}, [totalImages]);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return undefined;

		carousel.addEventListener("scroll", handleScroll);
		return () => carousel.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const openModalAt = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => setIsOpen(false), []);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => Math.min(prev + 1, Math.max(totalImages - 1, 0)));
	}, [totalImages]);

	const { dialogProps } = useDialogAccessibility({ isOpen, onClose: closeModal, onPrevious: goToPrevious, onNext: goToNext });

	const handleThumbnailKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>, index: number) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openModalAt(index);
			}
		},
		[openModalAt]
	);

	if (!hasImages) {
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
			<motion.div variants={getAnimation(animation)} initial="initial" animate="animate" className="carousel-gallery-container">
				<div className={`carousel-gallery-wrap ${squared ? "squared" : ""}`} ref={carouselRef}>
					{imagesUrl.map((image, index) => (
						<figure
							key={index}
							className="carousel-item"
							role="button"
							tabIndex={0}
							aria-haspopup="dialog"
							aria-expanded={isOpen && currentIndex === index}
							aria-label={image.alt ? `Abrir visor para ${image.alt}` : `Abrir imagen ${index + 1}`}
							onClick={() => openModalAt(index)}
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
				<button
					type="button"
					className="left-button"
					onClick={() => scrollToImage(currentIndex - 1)}
					aria-label="Desplazar carrusel hacia la izquierda"
				>
					<PrevIcon />
				</button>
				<button
					type="button"
					className="right-button"
					onClick={() => scrollToImage(currentIndex + 1)}
					aria-label="Desplazar carrusel hacia la derecha"
				>
					<NextIcon />
				</button>
			</motion.div>

			<AnimatePresence>
				{isOpen && activeImage && (
					<motion.div
						{...dialogProps}
						variants={getAnimation(animation)}
						initial="initial"
						animate="animate"
						exit="exit"
						className="image-gallery-pretty-box"
						aria-label="Visor de carrusel de imágenes"
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
							aria-label="Cerrar visor del carrusel"
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
