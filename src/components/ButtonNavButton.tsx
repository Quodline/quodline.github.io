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
        <motion.div className={`bottom-link-${direction}`}
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants[direction]}>
            <Link href={href} className="link-solid">
                <span>{children}</span>
                {direction === 'left' ? <FaArrowLeft/> : <FaArrowRight/>}
            </Link>
        </motion.div>
    )
}