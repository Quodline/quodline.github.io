import './handles.css'
import {Metadata} from 'next'
import HandlesList from '@/components/HandlesList'

export const metadata: Metadata = {
    title: 'Ore Adeleye social profiles',
    description: 'Oreoluwa Adeleye: GitHub, LinkedIn, Twitter, Facebook and more',
}

export default function SocialHandles() {
    return (
        <div className="bg-gray-200">
            <h4 className="font-bold text-3xl">Reach out...</h4>
            <HandlesList/>
        </div>
    )
}