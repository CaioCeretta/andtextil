'use client'

import type { ReactNode } from 'react'
import { Button } from './ui/button'

const ButtonShadcn = ({
	children,
}: {
	children: ReactNode
}) => {
	return (
		<Button
			className="bg-main-yellow w-[30%]  text-center
           my-10 border border-zinc-500 shadow-sm
          text-zinc-500 font-black flex justify-center mx-auto
          hover:bg-yellow-500 hover:text-zinc-600 text-lg py-7 rounded-full
					"
		>
			{children}
		</Button>
	)
}

export default ButtonShadcn
