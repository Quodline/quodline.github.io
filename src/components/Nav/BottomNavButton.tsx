import Link from 'next/link';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { buttonVariants } from '@/framer/bottom-nav';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  position?: 'left' | 'right';
}

export default function BottomNavButton({
  children,
  href,
  position = 'left',
}: PropsWithChildren<Props>) {
  const location = usePathname();

  return (
    <Link href={href} className={`bottom-link-${position}`}>
      <motion.div
        key={location} // So that it animates again after changing path
        className="link-solid"
        initial="hidden"
        animate="visible"
        variants={buttonVariants[position]}
      >
        <span>{children}</span>
        {position === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
      </motion.div>
    </Link>
  );
}
