import type { Specification, SpecificationField } from '@prisma/client'

export interface TableRowProps {
  specifications: Record<string, string[]>
  columns: string[]
}

export default function TableRow({ columns, specifications }: TableRowProps) {
  const maxRows = Math.max(
    ...columns.map((col) => specifications[col]?.length || 1),
  )

  // Encontrar a especificação correspondente ao campo atual
  return (
    <>
      {Array.from({ length: maxRows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td
              key={colIndex}
              className="border-gay-300 md:text-md text-md border px-1 py-2 md:py-3 lg:px-6 lg:py-4"
            >
              {specifications[col]?.[rowIndex] || '-'}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
