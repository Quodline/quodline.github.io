import avatar from "../assets/avatar.jpeg";
import Anchor from "../components/Anchor";

export default function () {
    return <>
        <img src={avatar} width="200px" height="200px" alt="" className="rounded-full self-center"/>
        <div className="my-4">
            <p>Welcome to my page. I am a full stack developer. It is a fancy phrase for saying I design, develop and maintain web applications built on <Anchor href="https://laravel.com/" isExternal>Laravel</Anchor> and <Anchor href="https://react.dev/" isExternal>React</Anchor>.</p>
            <p>I also design, develop and maintain mobile applications for iOS and AndroidOS using a single codebase by utilizing the power of <Anchor href="https://react.dev/" isExternal>React</Anchor> and <Anchor href="https://reactnative.dev/" isExternal>React Native</Anchor>.</p>
            <p>I am committed to learning new technologies that improve the quality of code I write and the efficiency of applications I develop.</p>
        </div>
    </>;
}