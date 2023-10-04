'use client'

import {buttonVariants} from '@/framer/bottom-nav'
import { motion } from 'framer-motion'

export default function ResumeButton() {
    return (
        <motion.a id="resume-download-btn"
                  className="my-2 link-solid self-end"
                  href="/resume.pdf"
                  download="ore-adeleye-resume-2023"
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants['right']}>
            Download Resume
        </motion.a>
    )
}