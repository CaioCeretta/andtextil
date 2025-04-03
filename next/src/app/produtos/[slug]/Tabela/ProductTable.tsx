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

  const allColumns = Object.keys(product.specifications || {})

  return (
    <table className="table-auto border-collapse overflow-hidden rounded-lg bg-white text-left shadow-md">
      <TableHeader columns={allColumns} />
      <tbody>
        <TableRow
          specifications={product.specifications}
          columns={allColumns}
        />
      </tbody>
    </table>
  )
}
