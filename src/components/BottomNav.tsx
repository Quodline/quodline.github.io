'use client'

import {usePathname} from "next/navigation"
import {useCallback} from "react"
import pages from "@/data/pages"
import ButtonNavButton from '@/components/ButtonNavButton'

export default function BottomNav() {
    const pathname = usePathname()

    const currentPage = useCallback(() => {
        return pages.find(page => page.path === pathname)
    }, [pathname])

    return (
        <div className="flex-1 flex justify-between items-center p-4 overflow-hidden">
            <div>
                {currentPage()?.previous && (
                    <ButtonNavButton href={currentPage()?.previous?.path || '/'}>
                        {currentPage()?.previous?.title}
                    </ButtonNavButton>
                )}
            </div>
            {currentPage()?.next && (
                <ButtonNavButton href={currentPage()?.next?.path || '/'} direction="right">
                    {currentPage()?.next?.title}
                </ButtonNavButton>
            )}
        </div>
    )
}