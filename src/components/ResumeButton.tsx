'use client'

import {saveAs} from 'file-saver'
import {buttonVariants} from '@/framer/bottom-nav'
import { motion } from 'framer-motion'

export default function ResumeButton() {
    const downloadFile = () => {
        saveAs(
            "https://drive.google.com/file/d/17KeL58Ta7APMj0Ywxt0KGB513Ii_3_yT/view?usp=sharing",
            "ore-adeleye-resume-2023.pdf"
        )
    }

    return (
        <motion.button className="my-2 link-solid self-end"
                       onClick={downloadFile}
                       initial="hidden"
                       animate="visible"
                       variants={buttonVariants['right']}>
            Download Resume
        </motion.button>
    )
}