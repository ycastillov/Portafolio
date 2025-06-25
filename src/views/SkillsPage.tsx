'use client';

import { Badge } from '@/components/ui/badge';

type Skill = {
  name: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillCategory[] = [
  {
    title: 'Lenguajes',
    skills: [
      { name: 'JavaScript', level: 'Avanzado' },
      { name: 'TypeScript', level: 'Intermedio' },
      { name: 'C#', level: 'Intermedio' },
    ],
  },
  {
    title: 'Frameworks / Librerías',
    skills: [
      { name: 'React', level: 'Intermedio' },
      { name: 'Next.js', level: 'Intermedio' },
      { name: 'ASP.NET Core', level: 'Intermedio' },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', level: 'Intermedio' },
      { name: 'ESLint / Prettier', level: 'Intermedio' },
      { name: 'Tailwind CSS', level: 'Avanzado' },
      { name: 'Shadcn/ui', level: 'Básico' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Habilidades
      </h2>

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <Badge variant="secondary">
                    {skill.name}{' '}
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({skill.level})
                    </span>
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
