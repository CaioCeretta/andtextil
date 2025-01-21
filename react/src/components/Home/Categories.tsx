import useCategories from '@/data/hooks/useCategories'
import useProducts from '@/data/hooks/useProducts'
import { useCallback, useEffect } from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
	const { categories, emptyCategorySelected } =
		useCategories()
	const { products } = useProducts()

	useEffect(() => emptyCategorySelected(), [])

	const getFirstProductByCategory = useCallback(
		(categoryId: number) => {
			return products.find(
				(product) => categoryId === product.categoryId
			)
		},
		[products]
	)

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6
        items-center justify-between mb-10"
		>
			{categories.map((category) => {
				const product = getFirstProductByCategory(
					category.id
				)

				return (
					<div
						key={category.id}
						className="p-6 sm:p-8 md:p-10 border max-w-full border-yellow-950 rounded-lg h-full flex flex-col items-center justify-center"
					>
						{product ? (
							<div className="h-[15rem] w-full sm:w-[80%]  flex-1">
								<CategoryCard
									category={category}
									product={product}
								/>
							</div>
						) : (
							<p className="text-gray-500 text-center">
								Não há produtos para esta categoria
							</p>
						)}
					</div>
				)
			})}
		</div>
	)
}
