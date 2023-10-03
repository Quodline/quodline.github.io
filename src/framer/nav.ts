import {Variants} from 'framer-motion'

export const titles: Variants = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

export const item: Variants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: (i: number) => ({
            delay: i * 0.3,
        }),
    },
    hidden: { opacity: 0, x: -100 },
}

export const link: Variants = {
    visible: {
        opacity: 1,
        height: 'auto',
        x: 0,
        transition: (i: number) => ({
            delay: i * 0.3,
        }),
    },
    hidden: { opacity: 0, x: -100, height: 0 },
}