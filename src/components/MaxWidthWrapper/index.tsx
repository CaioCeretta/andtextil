import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn(`mx-auto h-full w-full max-w-screen-2xl ${className}`)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
