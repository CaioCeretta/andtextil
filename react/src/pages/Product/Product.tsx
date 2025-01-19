import type { Product } from '@/shared/interfaces'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import OrcamentoDialog from '@/components/Product/OrcamentoDialog'
import ProductDescription from '@/components/Product/ProductDescription'
import ProductTable from '@/components/Product/Tabela/ProductTable'
import productsJSON from '../../data/db/products.json'

interface Category {
	id: number
	name: string
}

const Produto: React.FC = () => {
	const { productSlug } = useParams<{
		productSlug: string
	}>()
	const [product, setProduct] = useState<Product | null>(
		null
	)
	const [categoryName, setCategoryName] =
		useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true)
			const products = productsJSON.products
			const categories = productsJSON.categories

			const productData = products.find(
				(prod: Product) => prod.slug === productSlug
			)

			if (productData) {
				setProduct(productData)
				const category = categories.find(
					(cat: Category) =>
						cat.id === productData.categoryId
				)
				setCategoryName(
					category
						? category.name
						: 'Categoria não encontrada'
				)
			}
			setProduct(productData || null)

			if (productData) {
				const category = categories.find(
					(cat: Category) =>
						cat.id === productData.categoryId
				)
				setCategoryName(
					category ? category.name : 'Unknown Category'
				)
			}
			setIsLoading(false)
		}

		fetchProduct()
	}, [productSlug])

	if (isLoading) {
		return <div>Carregando...</div>
	}

	if (!product) {
		return <div>Loading...</div>
	}

	return (
		<div className="lg:max-w-full w-full mx-auto pb-5">
			<h1 className="text-2xl font-bold text-center my-4 hidden">
				{categoryName}
			</h1>
			<div
				className="my-3 mx-3 grid lg:grid-cols-2 grid-cols-1
				lg:items-center mt-2 text-[14px]"
			>
				<div
					className="order-2 lg:order-1 flex flex-col flex-1 w-full
				max-w-[20rem] lg:max-w-[30rem] xl:max-w-[40rem] mx-auto"
				>
					<div>
						<ProductDescription product={product} />

						{/* Especificações */}
						<div className="flex flex-col items-center md:block">
							<h2 className="font-bold text-xl mt-6 mb-4">
								Especificações:
							</h2>
							<div className="w-[full flex items-center justify-center]">
								<ProductTable product={product} />
							</div>
						</div>
					</div>
					<div className="mt-5">
						<OrcamentoDialog product={product} />
					</div>
				</div>
				<div
					className="order-1 lg:order-2 lg:w-[90%] max-h-[40rem] lg:max-h-[50rem]
    overflow-hidden rounded-2xl mb-5 shadow-md aspect-square mx-auto"
				>
					<img
						className="object-contain w-full h-full bg-center bg-cover duration-500"
						src={product.images[0]}
						alt={product.name}
					/>
				</div>
			</div>
		</div>
	)
}

export default Produto
