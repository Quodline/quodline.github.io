'use client'

import Link from "next/link"
import {usePathname} from 'next/navigation'
import cn from 'classnames'
import { motion } from "framer-motion"
import {link} from '@/framer/nav'

interface Props {
    children: string,
    href: string
}

export default function NavLink({ children, href }: Props) {
    const pathname = usePathname()

    return (
        <Link href={href}>
            <motion.h3 variants={link} className={cn("font-rubik-maze lg:text-xl mr-3 mt-2", {
                '!font-rubik-dirt': pathname === href,
            })}>{children}</motion.h3>
        </Link>
    )
}