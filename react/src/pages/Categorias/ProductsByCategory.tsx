'use client'

import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { capitalizeString } from '@/lib/utils'
import useProducts from '@/data/hooks/useProducts'

// type ProductsByCategoryProps = {
// 	products: {
// 		id: number
// 		name: string
// 		description: string
// 		categoryId: number
// 		images: string[]
// 	}[]
// }

const ProductsByCategory = () => {
	const navigate = useNavigate()

	const { products } = useProducts()

	console.log(products)

	return (
		<>
			{products.map((product) => {
				return (
					<div key={product.id}>
						<div className="">
							<Card className="w-full max-w-xs rounded-xl border">
								<div className="flex flex-col items-center gap-4 p-4">
									<div className="aspect-square h-[15rem] lg:h-[20rem] overflow-hidden rounded-xl flex items-center justify-center">
										<img
											src={product.images[0]}
											alt={product.name || 'Product image'}
											className="h-full object-cover"
										/>
									</div>
									<div className="grid gap-1.5">
										<h3 className="font-semibold text-sm md:text-base text-blue-text">
											{capitalizeString(product.name)}
										</h3>
									</div>
									<Button
										onClick={() =>
											navigate(`/produtos/${product.slug}`)
										}
										size="sm"
										variant="default"
										className="bg-main-yellow hover:bg-yellow-500 cursor-pointer text-blue-text"
									>
										Ver mais
									</Button>
								</div>
							</Card>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default ProductsByCategory
