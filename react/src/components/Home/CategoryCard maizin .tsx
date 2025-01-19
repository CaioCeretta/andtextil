import type { Category, Product } from '@/shared/interfaces'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CategoryCardProps {
	product: Product
	category: Category
}

export default function CategoryCard(
	props: CategoryCardProps
) {
	const { product, category } = props

	return (
		<div
			className="flex flex-col items-center shadow-sm hover:shadow-md transition h-full relative  rounded-md p-4
		md:w-full"
		>
			{/* Container da Imagem */}
			<div className="aspect-square min-w-full w-[15rem] h-[25rem] overflow-hidden rounded-xl">
				<Link to={`categorias/${category.name}`}>
					<img
						src={product.images[0]}
						alt={product.name}
						className="object-cover w-full h-full md:w-[12rem] xl:w-full rounded-md mx-auto"
					/>
				</Link>
			</div>

			{/* Link da Categoria */}
			<Link
				className="absolute top-0 left-0 lg:top-2 sm:left-12 lg:left-12 xl:left-2 flex justify-center items-center p-2 
	bg-main-yellow text-zinc-800 rounded-full shadow-md transition-transform
	hover:scale-110"
				to={`categorias/${category.name}`}
			>
				<PlusIcon className="w-5 h-5" />
			</Link>
		</div>
	)
}
