import { ProductType } from '@/shared/types'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import COLUMN_LABELS from '@/utils/columnLabels'

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
    <>
      <table className="hidden table-auto border-collapse overflow-hidden rounded-lg bg-white text-left shadow-md md:table">
        <TableHeader columns={allColumns} />
        <tbody>
          <TableRow
            specifications={formattedSpecifications}
            columns={allColumns}
          />
        </tbody>
      </table>

      {/* LISTA VERTICAL - Visível em <md */}
      <div className="block space-y-4 md:hidden">
        {allColumns.map((col) => (
          <div key={col} className="rounded-md border bg-white p-4 shadow">
            <div className="mb-2 text-sm font-semibold text-gray-700">
              {COLUMN_LABELS[col]}
            </div>
            <ul className="list-disc pl-4 text-xs text-gray-600">
              {formattedSpecifications[col].map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
