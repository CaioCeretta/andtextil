import { Product } from '@/shared/interfaces'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

interface ProductProps {
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
		'Composição',
	],
	2: [
		'Espessura',
		'Gramatura',
		'Resistência à ruptura',
		'Largura',
		'Temperatura de Trabalho',
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
			'Resistência à Ruptura',
			'Filamento',
			'Resistência à Temperatura',
		],
	},
	2: {
		1: [
			'Largura',
			'Espessura',
			'Gramatura',
			'Comprimento',
			'Temperatura de Trabalho',
		],
	},
}

export default function ProductTable({
	product,
}: ProductProps) {
	if (!product) {
		return <div>Nenhum produto encontrado</div>
	}

	// Determina as colunas a serem usadas com base na categoria e subcategoria
	const subColumns =
		product.categoryId &&
		product.subCategoryId &&
		subCategoryColumns[product.categoryId]?.[
			product.subCategoryId
		]
			? subCategoryColumns[product.categoryId][
					product.subCategoryId
				]
			: []

	const allColumns =
		subColumns.length > 0
			? subColumns
			: categoryColumns[product.categoryId] || []

	const specifications =
		product.description.specifications || []

	return (
		<table className="table-auto border-collapse text-left bg-white shadow-md rounded-lg overflow-hidden">
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
