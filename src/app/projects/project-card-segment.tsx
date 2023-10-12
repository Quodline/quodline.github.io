import { PropsWithChildren } from 'react';

interface Props {
  title: string;
}

export default function ProjectCardSegment(props: PropsWithChildren<Props>) {
  return (
    <div>
      <h3 className='text-md font-medium'>{props.title}</h3>
      <div className='flex flex-wrap'>{props.children}</div>
    </div>
  );
}
