import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
	className?: string
	children: ReactNode
}

const MaxWidthWrapper = ({
	className,
	children,
}: MaxWidthWrapperProps) => {
	return (
		<div
			className={cn(
				`max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl
        mx-auto h-full overflow-y-auto ${className}`
			)}
		>
			{children}
		</div>
	)
}

export default MaxWidthWrapper
