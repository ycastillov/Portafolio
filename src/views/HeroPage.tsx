'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../components/ui/button';

export default function HeroPage() {
  return (
    <section className="w-full py-20 flex flex-col items-center text-center sm:py-32">
      {/* Imagen/avatar */}
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-primary shadow-md">
        <Image
          src="/avatar.jpg" 
          alt="Avatar"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Nombre */}
      <h1 className="text-3xl sm:text-5xl m-2 font-bold tracking-tight text-primary">
        Yamir Castillo Villegas
      </h1>

      {/* Rol */}
      <p className="text-lg sm:text-xl mt-2 text-muted-foreground">
        Estudiante de Ingeniería Civil en Computación e Informática
      </p>

      {/* Tagline o frase */}
      <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground italic">
        Estudiante con enfoque en desarrollo web moderno y pasión por aprender.
      </p>

      {/* Botones CTA */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <Button asChild className="p-5">
          <Link href="/about" className="text-xl">
            Conóceme
          </Link>
        </Button>
      </div>
    </section>
  );
}
