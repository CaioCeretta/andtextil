interface HeadingProps {
  title: string
  center?: boolean
}

export const Heading = ({ title, center }: HeadingProps) => {
  return (
    <div className={`mb-5 ${center ? 'text-center' : 'text-start'}`}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}
