import { formatProductName } from '@/lib/utils'
import type { ProductType } from '@/shared/types'

interface ProductDescriptionProps {
  product: ProductType
}

export default function ProductDescription(props: ProductDescriptionProps) {
  const { product } = props

  const formattedProductName = formatProductName(product.name)

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold text-blue-text underline decoration-main-yellow underline-offset-8">
        {formattedProductName}
      </h1>
      <div className="text-md mb-10 mt-1 leading-5 text-yellow-950 lg:px-10">
        {/* Características */}
        <h2 className="mb-4 text-xl font-bold">Características:</h2>
        <ul className="list-inside list-disc space-y-2">
          {product.characteristics.map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>

        {/* Aplicações */}
        <h2 className="mb-4 mt-6 text-xl font-bold">Aplicações:</h2>
        <ul className="list-inside list-disc space-y-2">
          {product.applications.map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
