import { Metadata } from 'next';
import './projects.css';
import ProjectList from './project-list';
import projects from '@/static/projects';

export const metadata: Metadata = {
  title: "Ore Adeleye's projects",
  description:
    "Ore Adeleye: portfolio. Oreoluwa Adeleye's best, recent works and selected projects",
};

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold'>Featured projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}
