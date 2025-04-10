import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import HomeCategories from './components/categories'

export default function Home() {
  return (
    <div className="">
      <section>
        <MaxWidthWrapper className="flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="mb-5 text-4xl font-bold text-blue-text">Produtos</h1>
            <div className="flex-1">
              <HomeCategories />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
