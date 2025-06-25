import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Gestor de Tareas',
      description:
        'Una app web para gestionar tareas personales, con soporte para etiquetas, prioridades y persistencia local.',
      imageSrc: '/proyectos/project1.png', // ⚠️ Usa tus propias imágenes
      tech: ['React', 'TypeScript', 'Tailwind', 'Shadcn/ui'],
      demoUrl: 'https://drive.google.com/your-demo-link', // 🧪 Link a demo
      codeUrl: 'https://github.com/tuusuario/todo-app', // 🧪 Repositorio
    },
    {
      title: 'Portafolio Personal',
      description:
        'Sitio web para mostrar mis proyectos, habilidades y contacto. Implementado con Next.js y diseño responsive.',
      imageSrc: '/proyectos/project2.png',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      demoUrl: 'https://miportafolio.vercel.app',
      codeUrl: 'https://github.com/tuusuario/portafolio',
    },
    {
      title: 'API de Productos',
      description:
        'Una API REST para gestión de productos con filtrado y ordenamiento. Implementada con ASP.NET Core.',
      imageSrc: '/proyectos/project3.png',
      tech: ['C#', 'ASP.NET', 'Entity Framework'],
      codeUrl: 'https://github.com/tuusuario/api-productos',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Proyectos
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
