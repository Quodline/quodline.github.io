'use client'

import NavLink from "./NavLink"
import pages from "../data/pages"
import {FaBars, FaXmark} from 'react-icons/fa6'
import {useState} from 'react'
import {motion} from "framer-motion"
import {item, titles} from '@/framer/nav'

export default function NavList() {
    const [showLinks, setShowLinks] = useState(true)

    return (
        <nav role="navigation" className="navbar">
            <div className="flex-1 flex justify-between">
                <motion.div className="flex flex-col justify-center"
                            initial="hidden"
                            animate="visible"
                            variants={titles}>
                    <motion.h1 className="font-rubik-dirt text-4xl lg:text-8xl" variants={item}>
                        Ore Adeleye
                    </motion.h1>
                    <motion.h2 className="font-rubik-maze text-1xl lg:text-4xl" variants={item}>
                        Full Stack Developer
                    </motion.h2>
                </motion.div>
                <button onClick={() => setShowLinks(!showLinks)}
                        className="lg:hidden text-3xl p-2 self-end">
                    {showLinks ? <FaXmark/> : <FaBars/>}
                </button>
            </div>
            <motion.div className="navbar-links"
                        initial="hidden"
                        animate={showLinks ? "visible" : "hidden"}
                        variants={titles}>
                {pages.map((page) => (
                    <NavLink key={page.path} href={page.path}>{page.title}</NavLink>
                ))}
            </motion.div>
        </nav>
    )
}