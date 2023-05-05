const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0
  }
};

const fadeInDown = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 60 }
};

const fadeInRight = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -60 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 60 }
};

const bounce = {
  initial: {
    scale: [1, 1.2, 0.9, 1.1, 1]
  },
  animate: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const slideFade = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

const slideItem = {
  initial: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
};

export { fadeInDown, fadeIn, fadeInLeft, fadeInRight, fadeInUp, bounce, slideFade, slideItem };
