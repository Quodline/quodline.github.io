'use client';

import { motion } from 'framer-motion';
import SocialLink from './social-link';
import socialHandles from '@/static/socialHandles';
import { cardListProps } from '@/framer/cards';

export default function HandlesList() {
  return (
    <motion.div className='handles-list' {...cardListProps}>
      {socialHandles.map((item) => (
        <SocialLink
          key={item.name}
          name={item.name}
          subtext={item.subtext}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </motion.div>
  );
}
