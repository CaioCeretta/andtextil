import Categories from '@/components/Home/Categories'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <div className="">
      <section>
        <MaxWidthWrapper className="flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="mb-5 text-4xl font-bold text-blue-text">Produtos</h1>
            <div className="flex-1">
              <Categories />
            </div>
            {/* <div className="w-full h-[10rem] flex justify-between items-center bg-blue-text text-yellow-50 px-20">
							<h1 className="text-2xl">Se interessou? </h1>
						</div> */}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
