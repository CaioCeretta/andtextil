export interface TableHeaderProps {
	columns: string[]
}

export default function TableHeader({
	columns,
}: TableHeaderProps) {
	return (
		<thead className="bg-gray-50">
			{columns.map((column, index) => {
				return (
					<th
						key={index}
						className={`border border-gray-300 px-6 py-4 ${
							index === 0 ? 'rounded-tl-lg' : ''
						} ${
							index === columns.length - 1
								? 'rounded-tr-lg'
								: ''
						}
      `}
					>
						{column}
					</th>
				)
			})}
		</thead>
	)
}
