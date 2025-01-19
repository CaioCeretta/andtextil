import type { Product } from '@/shared/interfaces'
import ButtonShadcn2 from '../ButtonShadcn2'

interface ProductProps {
	product: Product
}

export default function ProductCard(props: ProductProps) {
	const { product } = props

	return (
		<div
			className="p-4 gap-3 w-[90%] flex flex-col items-center border rounded-md
      shadow-sm hover:shadow-md transition"
		>
			<div className="w-full h-full max-h-72 flex flex-1 justify-center rounded">
				<img
					src={product.images[0]}
					alt={product.name}
					className="rounded-md mb-3 h-full"
				/>
			</div>
			<div className="flex flex-col">
				<h3 className="text-lg font-medium mb-2">
					{product.name}
				</h3>
				<ButtonShadcn2>
					<a href={`produtos/${product.slug}`}>Ver mais</a>
				</ButtonShadcn2>
			</div>
		</div>
	)
}
