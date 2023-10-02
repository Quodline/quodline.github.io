import './globals.css'
import type {Metadata} from 'next'
import {PropsWithChildren} from "react"
import Nav from "@/components/Nav"
import {Rubik, Rubik_Dirt, Rubik_Maze} from "next/font/google"
import BottomNav from "@/components/BottomNav"

export const metadata: Metadata = {
    title: 'About Ore Adeleye',
    description: 'Oreoluwa Adeleye: Bio, About me and success story. Who is Ore Adeleye?',
}

const rubik = Rubik({
    weight: ['300', '500'],
    subsets: ['latin-ext'],
    variable: '--font-rubik',
})

const rubikDirt = Rubik_Dirt({
    weight: '400',
    subsets: ['latin-ext'],
    variable: '--font-rubik-dirt',
})

const rubikMaze = Rubik_Maze({
    weight: '400',
    subsets: ['latin-ext'],
    variable: '--font-rubik-maze',
})

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en" className={`${rubik.variable} ${rubikDirt.variable} ${rubikMaze.variable} font-sans`}>
        <body className="flex flex-col lg:flex-row min-h-screen font-rubik bg-primary">
        <Nav/>
        <div className="flex-1 flex flex-col bg-gray-200 text-gray-700">
            <div className="flex flex-col p-4 lg:justify-center lg:basis-3/4">
                {children}
            </div>
            <BottomNav/>
        </div>
        </body>
        </html>
    )
}