import type { Specification, SpecificationField } from '@prisma/client'

export interface TableRowProps {
  specifications: Record<string, string[]>
  columns: string[]
}

export default function TableRow({ columns, specifications }: TableRowProps) {
  const maxRows = Math.max(
    ...columns.map((col) => specifications[col]?.length || 1),
  )

  console.log(columns)
  console.log(specifications)

  // Encontrar a especificação correspondente ao campo atual
  return (
    <>
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex} className="border px-4 py-2">
              {specifications[col]?.[rowIndex] || '-'}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
