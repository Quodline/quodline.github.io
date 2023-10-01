import Image from 'next/image'
import avatar from '@/assets/avatar.jpeg'
import Anchor from '@/components/Anchor'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'About Ore Adeleye',
    description: 'Oreoluwa Adeleye: Bio, About me and success story. Who is Ore Adeleye?',
}

export default function About() {
    return (
        <article className="flex flex-col">
            <Image src={avatar}
                   alt=""
                   className="w-48 h-48 rounded-full self-center"
                   placeholder="blur"/>
            <div className="my-4">
                <p>I am a passionate and results-driven Full-Stack Developer with expertise in a versatile tech stack,
                    including <Anchor href="https://laravel.com/" isExternal>Laravel</Anchor>,
                    <Anchor href="https://react.dev/" isExternal> React</Anchor>,
                    <Anchor href="https://tailwindcss.com/" isExternal> Tailwind</Anchor>, and more. With a keen eye for
                    detail and a knack for problem-solving, I thrive on crafting efficient, scalable, and user-friendly
                    web and mobile applications.</p>
                <p>I am committed to learning new technologies that improve the quality of code I write and the
                    efficiency of applications I develop.</p>
            </div>
        </article>
    )
}