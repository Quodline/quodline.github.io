import './globals.css'
import type {Metadata} from 'next'
import {PropsWithChildren} from "react"
import {Rubik, Rubik_Dirt, Rubik_Maze} from "next/font/google"
import BottomNav from "@/components/BottomNav"
import Nav from "@/components/Nav"

export const metadata: Metadata = {
    title: 'Ore Adeleye',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.APP_URL || 'https://quodline.github.io'),
    themeColor: '#093d91',
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