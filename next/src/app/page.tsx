import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <div className="">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 sm:pb-32 lg:pb-52
      lg:pt-24 xl:gap-x-8 xl:pt-10"
        >
          <h1>Produtos</h1>
          <h1>Quem somos</h1>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
