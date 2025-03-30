import { type ReactNode } from 'react'
import { Button } from './ui/button'

export default function ButtonShadcn({ children }: { children: ReactNode }) {
  return (
    <Button className="mx-auto w-1/2 rounded-md bg-main-yellow font-bold text-zinc-700 hover:bg-yellow-500">
      {children}
    </Button>
  )
}
