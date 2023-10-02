import whatsapp from "../assets/whatsapp-icon.svg"
import linkedIn from "../assets/linkedin-icon.svg"
import twitter from "../assets/twitter.svg"
import github from "../assets/github-icon.svg"
import gmail from "../assets/google-gmail.svg"

const links: SocialHandle[] = [
    {
        name: 'WhatsApp',
        subtext: 'Send a DM',
        icon: whatsapp,
        href: "https://wa.me/2347084690390",
    },
    {
        name: 'LinkedIn',
        subtext: 'Connect',
        icon: linkedIn,
        href: "https://www.linkedin.com/in/ore-adeleye-j/",
    },
    {
        name: 'X (Twitter)',
        subtext: 'devstallion',
        icon: twitter,
        href: "https://twitter.com/devstallion",
    },
    {
        name: 'GitHub',
        subtext: 'Quodline',
        icon: github,
        href: "https://github.com/Quodline",
    },
    {
        name: 'Email',
        subtext: 'Send a mail',
        icon: gmail,
        href: "mailto:oreadeleye67@gmail.com",
    },
]

export default links