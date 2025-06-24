
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Button } from './ui/button'

type ProjectCardProps = {
    title: string
    description: string
    imageSrc: string
    tech: string[]
    demoUrl?: string
    codeUrl?: string
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  tech,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
    return(
        <div className="border rounded-xl shadow-sm overflow-hidden flex flex-col">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-56 bg-muted">
        <Image
          src={imageSrc}
          alt={`Miniatura de ${title}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {/* Enlaces */}
        <div className="mt-4 flex gap-3">
          {demoUrl && (
            <Button asChild size="sm">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </Link>
            </Button>
          )}
          {codeUrl && (
            <Button asChild size="sm" variant="outline">
              <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
                Código
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
    )
}