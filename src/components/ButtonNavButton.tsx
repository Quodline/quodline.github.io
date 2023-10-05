import Link from 'next/link'
import {motion} from 'framer-motion'
import {PropsWithChildren} from 'react'
import {buttonVariants} from '@/framer/bottom-nav'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6'

interface Props {
    href: string,
    direction?: 'left' | 'right'
}

export default function ButtonNavButton({children, href, direction = 'left'}: PropsWithChildren<Props>) {
    return (
        <Link href={href} className={`bottom-link-${direction}`}>
            <motion.div
                className="link-solid"
                initial="hidden"
                animate="visible"
                variants={buttonVariants[direction]}>
                <span>{children}</span>
                {direction === 'left' ? <FaArrowLeft/> : <FaArrowRight/>}
            </motion.div>
        </Link>
    )
}