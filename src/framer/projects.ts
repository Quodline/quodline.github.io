import { Variants } from 'framer-motion';

export const list: Variants = {
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
};

export const item: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: (i: number) => ({
      delay: i * 0.3,
    }),
  },
  hidden: { opacity: 0, y: -100 },
};
