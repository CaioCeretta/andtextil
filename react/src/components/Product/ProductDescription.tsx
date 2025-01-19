import { formatProductName } from '@/lib/utils'
import type { Product } from '@/shared/interfaces'

interface ProductDescriptionProps {
	product: Product
}

export default function ProductDescription(
	props: ProductDescriptionProps
) {
	const { product } = props

	const formattedProductName = formatProductName(
		product.name
	)

	return (
		<>
			<h1
				className="text-3xl font-bold text-blue-text mb-5
					underline decoration-main-yellow underline-offset-8"
			>
				{formattedProductName}
			</h1>
			<div
				className="mt-1 lg:px-10 text-md leading-5 mb-10
					text-yellow-950"
			>
				{/* Características */}
				<h2 className="font-bold text-xl mb-4">
					Características:
				</h2>
				<ul className="list-disc list-inside space-y-2">
					{product.description.characteristics.map(
						(item, index) => (
							<li key={index}>{item}</li>
						)
					)}
				</ul>

				{/* Aplicações */}
				<h2 className="font-bold text-xl mt-6 mb-4">
					Aplicações:
				</h2>
				<ul className="list-disc list-inside space-y-2">
					{product.description.applications.map(
						(item, index) => (
							<li key={index}>{item}</li>
						)
					)}
				</ul>
			</div>
		</>
	)
}
