import { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  isExternal?: boolean;
  className?: string;
}

export default function Anchor(props: PropsWithChildren<Props>) {
  return (
    <Link
      href={props.href}
      target={props.isExternal ? '_blank' : '_self'}
      className={`text-primary dark:text-primary-dark ${props.className}`}
    >
      {props.children}↗
    </Link>
  );
}
