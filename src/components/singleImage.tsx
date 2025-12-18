import React, { useCallback, useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation, useDialogAccessibility } from "@/components/shared";
import { CloseIcon } from "@/components/shared/icons";
import ErrorMessage from "./shared/errorMessage";

interface SingleImageProps extends DefaultBoxProps {
	imageUrl: string;
	figcaption?: string;
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
	const [isOpen, setIsOpen] = useState(false);
	const openViewer = useCallback(() => setIsOpen(true), []);
	const closeViewer = useCallback(() => setIsOpen(false), []);
	const { dialogProps } = useDialogAccessibility({ isOpen, onClose: closeViewer });

	const handleTriggerKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openViewer();
			}
		},
		[openViewer]
	);

	const backdropClickHandler = bgBackdropClose ? closeViewer : undefined;
	const dialogLabel = alt ? `Vista ampliada de ${alt}` : "Vista ampliada de la imagen";
	const triggerLabel = alt ? `Abrir visor para ${alt}` : "Abrir visor de imagen";

	return (
		<>
			{typeof imageUrl === "string" && imageUrl ? (
				<>
					<figure
						role="button"
						tabIndex={0}
						aria-haspopup="dialog"
						aria-expanded={isOpen}
						aria-label={triggerLabel}
						onClick={openViewer}
						onKeyDown={handleTriggerKeyDown}
						className={`single-image ${isRounded ? "is-rounded" : ""} ${isCircled ? "is-circled" : ""} ${hasShadow ? "has-shadow" : ""}`}
					>
						<img src={imageUrl} alt={alt} loading="lazy" className="image" />
					</figure>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								{...dialogProps}
								variants={getAnimation(animation)}
								initial="initial"
								animate="animate"
								exit="exit"
								className="single-image-pretty-box"
								aria-label={dialogLabel}
							>
								<button
									type="button"
									className="bg-backdrop"
									aria-hidden="true"
									tabIndex={-1}
									onClick={backdropClickHandler}
								/>
								<button
									onClick={closeViewer}
									className="close-button"
									type="button"
									aria-label="Cerrar visor de imagen"
								>
									<CloseIcon />
								</button>
								<figure className={`single-image ${isRounded ? "is-rounded" : ""} ${hasShadow ? "has-shadow" : ""}`}>
									<img src={imageUrl} alt={alt} loading="lazy" className="image" />
									{figcaption && (
										<figcaption aria-live="polite" role="status">
											{figcaption}
										</figcaption>
									)}
								</figure>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			) : (
				<ErrorMessage
					message="There is not imaget to display. This could be because the image url is empty or there was an error loading the images."
					suggestions={[
						"Check if you've provided a valid image url to the component.",
						"Ensure that image url are correct and accessible.",
						"If the problem persists, try refreshing the page or contact support."
					]}
				/>
			)}
		</>
	);
}
