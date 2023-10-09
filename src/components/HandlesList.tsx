'use client'

import socialHandles from '@/data/socialHandles'
import SocialLink from '@/components/SocialLink'
import { motion } from 'framer-motion'
import { cardListProps } from '@/framer/cards'

export default function HandlesList() {
    return (
        <motion.div className="handles-list" {...cardListProps}>
            {socialHandles.map((item) =>
                <SocialLink
                    key={item.name}
                    name={item.name}
                    subtext={item.subtext}
                    icon={item.icon}
                    href={item.href}
                />
            )}
        </motion.div>
    )
}