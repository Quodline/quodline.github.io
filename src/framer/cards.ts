import { MotionProps } from 'framer-motion';

export const cardListProps: MotionProps = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  },
};

export const cardProps: MotionProps = {
  variants: {
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      rotateY: 180,
      scale: 1.5,
    },
  },
  transition: {
    duration: 1,
  },
};
