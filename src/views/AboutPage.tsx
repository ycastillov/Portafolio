'use client';

import { Badge } from '../components/ui/badge';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Sobre mí
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Foto o ilustración */}
        <div className="relative w-52 h-52 rounded-lg overflow-hidden border-4 border-primary shadow-md shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Foto"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Biografía + tecnologías */}
        <div className="text-muted-foreground text-sm sm:text-base">
          <p className="mb-4">
            ¡Hola! Soy{' '}
            <span className="text-primary font-semibold">
              Yamir Castillo Villegas
            </span>
            , estudiante de Ingeniería Civil en Computación e Informática con
            una gran motivación por el desarrollo web moderno y la construcción
            de experiencias digitales funcionales y atractivas.
          </p>
          <p className="mb-4">
            Me interesa especialmente el desarrollo Full Stack. Me gusta
            aprender constantemente y aplicar mis conocimientos en proyectos
            personales o académicos.
          </p>
          <p className="mb-4">
            Mi stack principal de trabajo es MERN. Actualmente, estoy
            profundizando en tecnologías como Next.js, Tailwind CSS y
            TypeScript.
          </p>

          {/* Badges de tecnologías */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="p-2">Next.js</Badge>
            <Badge className="p-2">React</Badge>
            <Badge className="p-2">C#</Badge>
            <Badge className="p-2">TypeScript</Badge>
            <Badge className="p-2">Git</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
