import { Product } from '@/shared/interfaces'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export interface ProductProps {
	product: Product
}

// Mapeamento de categorias e colunas
const categoryColumns: Record<number, string[]> = {
	1: [
		'Tex',
		'Resistência à Ruptura',
		'Alongamento',
		'Resistência à Temperatura',
		'Metros/Quilo',
	],
	2: [
		'Espessura',
		'Gramatura',
		'Resistência à ruptura',
		'Largura',
		'Construção',
	],
	3: [
		'Espessura',
		'Largura',
		'Ruptura',
		'Temperatura de Trabalho',
	],
}

const subCategoryColumns: Record<
	number,
	Record<number, string[]>
> = {
	0: {},
	1: {
		1: [
			'Tex',
			'Resitência à Ruptura',
			'Filamento',
			'Resistência à Temperatura',
		],
	},
	2: {
		1: [
			'Tex',
			'Resistência à Ruptura',
			'Filamento',
			'Resistência à Temperatura',
		],
	},
}

export default function ProductTable(props: ProductProps) {
	const { product } = props

	if (!product) {
		throw new Error('Nenhum produto encontrado')
	}

	//Determine the columns to be used
	const subColumns =
		(product.subCategoryId &&
			product.categoryId &&
			subCategoryColumns[product.categoryId]?.[
				product.subCategoryId
			]) ||
		[]

	const allColumns =
		subColumns.length > 0
			? subColumns
			: categoryColumns[product.categoryId] || []

	const specifications =
		product.description.specifications || []

	return (
		<table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
			<TableHeader columns={allColumns} />
			<tbody>
				{specifications.length > 0 ? (
					specifications.map((spec, index) => (
						<TableRow
							key={index}
							spec={spec}
							columns={allColumns}
						/>
					))
				) : (
					<tr>
						<td
							colSpan={allColumns.length}
							className="text-center py-4"
						>
							Nenhuma especificação disponível.
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}
