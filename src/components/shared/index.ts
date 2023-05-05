import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, bounce, slideFade } from "./animations";

const getAnimation = (animation: string) => {
  let animationVariant;

  if (animation === "fadeIn") {
    animationVariant = fadeIn;
  } else if (animation === "fadeInDown") {
    animationVariant = fadeInDown;
  } else if (animation === "fadeInRight") {
    animationVariant = fadeInRight;
  } else if (animation === "fadeInLeft") {
    animationVariant = fadeInLeft;
  } else if (animation === "fadeInUp") {
    animationVariant = fadeInUp;
  } else if (animation === "bounce") {
    animationVariant = bounce;
  } else if (animation === "slideFade") {
    animationVariant = slideFade;
  } else {
    animationVariant = fadeIn;
  }

  return animationVariant;
};

export { getAnimation };
