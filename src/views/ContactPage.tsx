'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toast.success('Mensaje enviado', {
        description: 'Gracias por contactarte. Te responderé pronto !',
      })
      setForm({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Contáctame</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Nombre</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Correo</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Mensaje</label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="¿En qué puedo ayudarte?"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar mensaje'
          )}
        </Button>
      </form>
    </section>
  )
}
