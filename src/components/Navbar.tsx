'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"

const links = [
    { href: '/', label: 'Inicio' },
    { href: 'about', label: 'Sobre mí' },
    { href: 'projects', label: 'Proyectos' },
    { href: 'skills', label: 'Habilidades' },
    { href: 'contact', label: 'Contacto' },
    { href: 'extra', label: 'Sección extra' },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="font-bold text-lg tracking-tight">Yamir</div>
                <ul className="flex gap-4 text-sm font-medium">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    'transition-colors hover:text-primary',
                                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </nav>
        </header>
    )
}