import { ProductType } from '@/shared/interfaces'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

interface ProductProps {
  product: ProductType
}

export default function ProductTable({ product }: ProductProps) {
  if (!product) {
    return <div>Nenhum produto encontrado</div>
  }

  const formattedSpecifications = product.specifications.reduce(
    (acc, spec) => {
      const fieldName = spec.specificationField.name
      if (!acc[fieldName]) {
        acc[fieldName] = []
      }

      acc[fieldName].push(spec.value)

      return acc
    },
    {} as Record<string, string[]>,
  )

  const allColumns = Object.keys(formattedSpecifications || {})

  return (
    <table className="table-auto border-collapse overflow-hidden rounded-lg bg-white text-left shadow-md">
      <TableHeader columns={allColumns} />
      <tbody>
        <TableRow
          specifications={formattedSpecifications}
          columns={allColumns}
        />
      </tbody>
    </table>
  )
}
