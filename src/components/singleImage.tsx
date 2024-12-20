import React, { useState } from "react";
import { DefaultBoxProps } from "@/components/shared/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimation } from "@/components/shared";
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
	const [singleImageBox, setSingleImageBox] = useState(false);

	const singleImageToggle = () => setSingleImageBox(!singleImageBox);
	return (
		<>
			{typeof imageUrl === "string" && imageUrl ? (
				<>
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
				</>
			) :

				<ErrorMessage
					message="There is not imaget to display. This could be because the image url is empty or there was an error loading the images."
					suggestions={
						[
							"Check if you've provided a valid image url to the component.",
							"Ensure that image url are correct and accessible.",
							"If the problem persists, try refreshing the page or contact support."
						]
					}
				/>
			}

		</>
	);
}
