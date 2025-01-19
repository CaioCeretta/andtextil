export interface TableRowProps {
	spec: Record<string, any>
	columns: string[]
}

export default function TableRow({
	spec,
	columns,
}: TableRowProps) {
	return (
		<tr className="odd:bg-white even:bg-gray-100">
			{columns.map((_, colIndex) => {
				const keys = Object.keys(spec)
				const value = spec[keys[colIndex]] || '-'

				return (
					<td
						key={colIndex}
						className="border border-gay-300 px-1 md:px-3 lg:px-6 py-2 md:py-3 lg:py-4"
					>
						{value}
					</td>
				)
			})}
		</tr>
	)
}
