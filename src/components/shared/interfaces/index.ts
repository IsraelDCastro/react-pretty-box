type AnimationOpts = "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "bounce" | "slideFade" | "slider-item";

interface ClassNameMosaic {
	wrapper?: string;
	image?: string;
	imageWrapper?: string;
	preNextBtn?: string;
	closeBtn?: string;
	moreBtn?: string;
}

export interface DefaultBoxProps {
  animation?: AnimationOpts;
  alt?: string;
  figcaption?: string | boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  hasShadow?: boolean;
  bgBackdropClose?: boolean;
  classNames?: ClassNameMosaic;
}
