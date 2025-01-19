import MaxWidthWrapper from '../MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className="bg-yellow-nav w-full flex justify-center items-center">
      <MaxWidthWrapper>
        <div className="border-t border-yellow-200">
          <p className="text-md flex items-center justify-center  foreground text-medium text-blue-text">
            And Têxtil. Todos os direitos reservados &copy;
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
