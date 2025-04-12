export interface TableHeaderProps {
  columns: string[] // column names
}

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              key={index}
              className={`md:text-md border border-gray-300 px-3 text-xs lg:px-6 lg:py-4 ${
                index === 0 ? 'rounded-tl-lg' : ''
              } ${index === columns.length - 1 ? 'rounded-tr-lg' : ''} `}
            >
              {column}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
