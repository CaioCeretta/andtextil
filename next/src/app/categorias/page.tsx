import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductsList from '@/components/Product/ProductList'

export default function Categories() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="xl: pb-24 pt-10 sm:pb-32 lg:pb-52 lg:pt-24">
          <ProductsList />
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
