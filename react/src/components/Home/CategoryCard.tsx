import type { Category, Product } from '@/shared/interfaces'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

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
			<div className="aspect-square min-w-full xl:w-[15rem] lg:w-[12rem] w-[10rem] h-[15rem] lg:h-[18rem] xl:h-[25rem] overflow-hidden rounded-xl">
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
				className="flex justify-center items-center
	bg-main-yellow text-zinc-800 rounded-full shadow-md transition-transform
	hover:scale-110 mt-10"
				to={`categorias/${category.name}`}
			>
				<Button className="bg-main-yellow hover:bg-yellow-400 flex items-center gap-3">
					<PlusIcon className="w-5 h-5 text-blue-text" />
					<span className="uppercase text-xl text-blue-text">
						{category.name}
					</span>
				</Button>
			</Link>
		</div>
	)
}
