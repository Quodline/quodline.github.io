import { Metadata } from 'next';
import './handles.css';
import HandlesList from './handles-list';

export const metadata: Metadata = {
  title: 'Ore Adeleye social profiles',
  description: 'Oreoluwa Adeleye: GitHub, LinkedIn, Twitter, Facebook and more',
};

export default function SocialHandles() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Reach out...</h1>
      <HandlesList />
    </div>
  );
}
