import Link from 'next/link';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { buttonVariants } from '@/framer/bottom-nav';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface Props {
  href: string;
  position?: 'left' | 'right';
}

export default function BottomNavButton({
  children,
  href,
  position = 'left',
}: PropsWithChildren<Props>) {
  return (
    <Link href={href} className={`bottom-link-${position}`}>
      <motion.div
        className='link-solid'
        initial='hidden'
        animate='visible'
        variants={buttonVariants[position]}
      >
        <span>{children}</span>
        {position === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
      </motion.div>
    </Link>
  );
}
