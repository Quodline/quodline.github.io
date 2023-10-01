'use client'

import Link from "next/link"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6"
import {usePathname} from "next/navigation"
import {useCallback} from "react"
import pages from "@/data/pages"

export default function BottomNav() {
    const pathname = usePathname()

    const currentPage = useCallback(() => {
        return pages.find(page => page.path === pathname)
    }, [pathname])

    return (
        <div className="flex-1 flex justify-between items-center p-4">
            <div>
                {currentPage()?.previous && (
                    <Link href={currentPage()?.previous?.path || '/'} className="link-solid">
                        <FaArrowLeft/>
                        <span>{currentPage()?.previous?.title}</span>
                    </Link>
                )}
            </div>
            {currentPage()?.next && (
                <Link href={currentPage()?.next?.path || '/'} className="link-solid">
                    <span>{currentPage()?.next?.title}</span>
                    <FaArrowRight/>
                </Link>
            )}
        </div>
    )
}