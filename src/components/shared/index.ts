import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, bounce, slideFade } from "./animations";

const animationMap: Record<string, any> = {
  fadeIn,
  fadeInDown,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
  bounce,
  slideFade
};

const getAnimation = (animation: string) => {
  return animationMap[animation] || fadeIn;
};

export { getAnimation };
