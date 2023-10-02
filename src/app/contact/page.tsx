import './handles.css'
import SocialLink from '@/components/SocialLink'
import socialHandles from '@/data/socialHandles'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Ore Adeleye social profiles',
    description: 'Oreoluwa Adeleye: GitHub, LinkedIn, Twitter, Facebook and more',
}

export default function SocialHandles() {
    return (
        <div className="bg-gray-200">
            <h4 className="font-bold text-3xl">Reach out...</h4>
            <div className="handles-list">
                {socialHandles.map((item) =>
                    <SocialLink
                        key={item.name}
                        name={item.name}
                        subtext={item.subtext}
                        icon={item.icon}
                        href={item.href}
                    />
                )}
            </div>
        </div>
    )
}