import Image from 'next/image';
import { motion } from 'framer-motion';
import { cardProps } from '@/framer/cards';

interface Props {
  icon: string;
  name: string;
}

export default function SkillCard(props: Props) {
  return (
    <motion.figure className="skill" {...cardProps}>
      <div className="flex items-center justify-center">
        <Image className="logo-icon" src={props.icon} alt="icon" />
      </div>
      <figcaption className="flex-1 text-center">{props.name}</figcaption>
    </motion.figure>
  );
}
