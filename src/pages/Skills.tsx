import mysqlIcon from '../assets/mysql-icon.svg';
import laravelIcon from '../assets/laravel.svg';
import reactIcon from '../assets/react.svg';
import tailwindIcon from '../assets/tailwindcss-icon.svg';
import reactNativeIcon from '../assets/create-react-app.svg';
import typescripticon from '../assets/typescript-icon.svg';
import dockerIcon from '../assets/docker-icon.svg';
import gitIcon from '../assets/git-icon.svg';
import slimIcon from '../assets/slim.svg';
import Skill from "../components/Skill";

const tools: [name: string, icon: string][] = [
    ['Laravel', laravelIcon],
    ['React', reactIcon],
    ['React Native', reactNativeIcon],
    ['TypeScript', typescripticon],
    ['Tailwind', tailwindIcon],
    ['MySQL', mysqlIcon],
    ['Docker', dockerIcon],
    ['Git', gitIcon],
    ['Slim', slimIcon]
];

export default function () {
    return <div className="bg-gray-200">
        <h4 className="font-bold text-3xl">I am proficient with these technologies</h4>
        <div className="flex flex-wrap">
            {tools.map(([name, icon]) => <Skill icon={icon} name={name}/>)}
        </div>
    </div>;
}