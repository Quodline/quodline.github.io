'use client'

import NavLink from "./NavLink"
import pages from "../data/pages"
import {FaBars, FaXmark} from 'react-icons/fa6'
import {useState} from 'react'
import cn from 'classnames'

export default function NavList() {
    const [showLinks, setShowLinks] = useState(false)

    return (
        <nav role="navigation" className="navbar">
            <div className="flex-1 flex justify-between">
                <div className="flex flex-col justify-center">
                    <h1 className="font-rubik-dirt text-4xl lg:text-8xl">Ore Adeleye</h1>
                    <h2 className="font-rubik-maze text-1xl lg:text-4xl">Full Stack Developer</h2>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}
                        className="lg:hidden text-3xl p-2 self-end">
                    {showLinks ? <FaXmark/> : <FaBars/>}
                </button>
            </div>
            <div className={cn('navbar-links', {'is-hidden': !showLinks})}>
                {pages.map((page) => (
                    <NavLink key={page.path} href={page.path}>{page.title}</NavLink>
                ))}
            </div>
        </nav>
    )
}