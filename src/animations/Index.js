export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '-100vh',
  },
};

export const animationThree = {
  in: {
    opacity: 1,
    x: -300,
  },
  out: {
    opacity: 0,
    x: 300,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

/* animation logo svg */
export const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.4 },
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      when: 'afterChildren',
      ease: 'easeInOut',
    },
  },
};

export const transition = {
  duration: 0.2,
};
