import linkedIn from "../assets/linkedin-icon.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github-icon.svg";
import gmail from "../assets/google-gmail.svg";
import SocialLink from "../components/SocialLink";

const links: [
    name: string,
    subtext: string,
    icon: string,
    href: string,
][] = [
    ['LinkedIn', 'ore-adeleye-j', linkedIn, "https://www.linkedin.com/in/ore-adeleye-j/"],
    ['Twitter', 'devstallion', twitter, "https://twitter.com/devstallion"],
    ['GitHub', 'Quodline', github, "https://github.com/Quodline"],
    ['Email', 'oreadeleye67@gmail.com', gmail, "mailto:oreadeleye67@gmail.com"],
];

export default function () {
    return <div className="bg-gray-200">
        <h4 className="font-bold text-3xl">Learn more about me or reach out to me...</h4>
        <div className="flex flex-wrap">
            {links.map(([name, subtext, icon, href]) => <SocialLink name={name} subtext={subtext} icon={icon} href={href}/>)}
        </div>
    </div>;
}
