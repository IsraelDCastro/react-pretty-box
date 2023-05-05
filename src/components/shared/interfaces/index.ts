type AnimationOpts = "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "bounce" | "slideFade" | "slider-item";

export interface DefaultBoxProps {
  animation?: AnimationOpts;
  alt?: string;
  figcaption?: string;
  isRounded?: boolean;
  isCircled?: boolean;
  hasShadow?: boolean;
  bgBackdropClose?: boolean;
}
