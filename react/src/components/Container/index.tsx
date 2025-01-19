import { ReactNode } from 'react'
import { ContainerContainer } from './styles'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerContainer>{children}</ContainerContainer>
}

export { Container }
