'use client'

import { Github, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t mt-10 bg-muted/20 text-muted-foreground">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} - Yamir Castillo</p>
                <div className="flex gap-4">
                    <Link
                        href="mailto:yamir.castillo@alumnos.ucn.cl"
                        className="hover:text-primary transition-colors"
                        aria-label="Correo"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                    <h3
                        className="font-semibold">
                        yamir.castillo@alumnos.ucn.cl 
                    </h3>
                    <Link
                        href="https://github.com/ycastillov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <h3 className="font-semibold">
                        ycastillov
                    </h3>
                </div>
            </div>
        </footer>
    )
}