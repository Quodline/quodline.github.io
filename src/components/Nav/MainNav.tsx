import NavLink from './NavLink';
import pages from '@/static/pages';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { item, titles } from '@/framer/nav';
import { ThemeSwitcher } from '@/components';
import { usePathname } from 'next/navigation';

export default function MainNav() {
  const [showLinks, setShowLinks] = useState(true);
  const pathname = usePathname();

  return (
    <nav role="navigation" className="navbar">
      <div className="mt-4 flex flex-1 justify-between lg:mt-0">
        <ThemeSwitcher />
        <motion.div
          key={pathname}
          className="flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={titles}
        >
          <motion.h3
            className="font-rubik-dirt text-4xl lg:text-8xl"
            variants={item}
          >
            Ore Adeleye
          </motion.h3>
          <motion.h3
            className="text-1xl font-rubik-maze lg:text-4xl"
            variants={item}
          >
            Full Stack Developer
          </motion.h3>
        </motion.div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="m-2 self-end text-3xl lg:hidden"
        >
          {showLinks ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <motion.div
        className="navbar-links"
        initial="hidden"
        animate={showLinks ? 'visible' : 'hidden'}
        variants={titles}
      >
        {pages.map((page) => (
          <NavLink key={page.path} href={page.path}>
            {page.title}
          </NavLink>
        ))}
      </motion.div>
    </nav>
  );
}
