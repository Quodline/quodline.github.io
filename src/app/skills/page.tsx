import { Metadata } from 'next';
import './skills.css';
import skills from '@/static/skills';
import SkillsSection from './skills-section';

export const metadata: Metadata = {
  title: "Ore Adeleye's skills",
  description: 'Ore Adeleye: skill set, programming languages, tools.',
};

export default function Skills() {
  return (
    <main className='flex flex-col space-y-8'>
      <SkillsSection title='Languages' skills={skills.languages} />
      <SkillsSection title='Frontend' skills={skills.frontend} />
      <SkillsSection title='Backend' skills={skills.backend} />
      <SkillsSection title='Database' skills={skills.database} />
    </main>
  );
}
