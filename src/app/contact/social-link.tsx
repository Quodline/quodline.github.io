import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cardProps } from '@/framer/cards';

interface Props {
  icon: string;
  name: string;
  subtext: string;
  href: string;
}

export default function SocialLink(props: Props) {
  return (
    <motion.div className='handle' {...cardProps}>
      <Link href={props.href} target='_blank' className='p-4'>
        <div className='flex items-center justify-center'>
          <Image className='logo-icon' src={props.icon} alt='icon' />
        </div>
        <div className='text-center font-bold'>{props.name}</div>
        <div className='break-all text-center text-gray-500 dark:text-gray-400'>
          {props.subtext}
        </div>
      </Link>
    </motion.div>
  );
}
