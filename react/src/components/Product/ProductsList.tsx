import useCategories from '@/data/hooks/useCategories'
import useProducts from '@/data/hooks/useProducts'
import ProductCard from './ProductCard'

export default function ProductsList() {
	const { products } = useProducts()
	const { categories } = useCategories()

	//Função usada para filtrar os produtos por categoria
	const getProductsByCategory = (categoryId: number) => {
		return products.filter(
			(product) => product.categoryId === categoryId
		)
	}

	return (
		<div className="">
			{categories.map((category) => {
				const categoryProducts = getProductsByCategory(
					category.id
				)

				return (
					<div key={category.id} className="mb-6">
						<a href={`/categorias/${category.name}`}>
							<h2 className="text-3xl font-black mb-4 uppercase">
								{category.name}
							</h2>
						</a>
						{categoryProducts.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
								{categoryProducts.map((product) => (
									<ProductCard
										key={product.id}
										product={product}
									/>
								))}
							</div>
						) : (
							<p className="text-gray-500">
								Nenhum produto disponível.
							</p>
						)}
					</div>
				)
			})}
		</div>
	)
}
