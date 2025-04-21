// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Página não encontrada</h2>
      <p className="mt-2">Não conseguimos encontrar o recurso solicitado.</p>
      <p className="mt-4">
        Voltar para{' '}
        <Link href="/" className="text-blue-500 underline">
          a página inicial
        </Link>
      </p>
    </div>
  )
}
