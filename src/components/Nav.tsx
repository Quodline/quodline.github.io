import NavLink from "./NavLink"
import pages from "../data/pages"

export default function NavList() {
    return (
        <nav role="navigation" className="navbar">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="font-rubik-dirt text-5xl lg:text-8xl">Ore Adeleye</h1>
                <h2 className="font-rubik-maze text-2xl lg:text-4xl">Full Stack Developer</h2>
            </div>
            <div className="flex justify-end flex-wrap">
                {pages.map((page) => (
                    <NavLink key={page.path} href={page.path}>{page.title}</NavLink>
                ))}
            </div>
        </nav>
    )
}