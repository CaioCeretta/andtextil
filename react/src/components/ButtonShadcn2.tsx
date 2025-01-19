import { type ReactNode } from 'react'
import { Button } from './ui/button'

export default function ButtonShadcn2({
	children,
}: {
	children: ReactNode
}) {
	return (
		<Button
			className="mx-auto rounded-md bg-main-yellow font-bold text-zinc-700 hover:bg-yellow-500
    w-1/2"
		>
			{children}
		</Button>
	)
}
