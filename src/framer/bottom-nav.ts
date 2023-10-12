import { Variants } from 'framer-motion';

interface ButtonVariants {
  left: Variants;
  right: Variants;
}

export const buttonVariants: ButtonVariants = {
  left: {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  },
  right: {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  },
};
