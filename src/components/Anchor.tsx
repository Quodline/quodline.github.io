import {PropsWithChildren} from "react";

type Props = {
    href: string,
    isExternal?: boolean,
};

function Anchor(props: PropsWithChildren<Props>) {
    return <a
        href={props.href}
        target={props.isExternal ? '_blank' : '_self'}
        className="text-brand-blue">
            {props.children}↗
    </a>
}

export default Anchor;