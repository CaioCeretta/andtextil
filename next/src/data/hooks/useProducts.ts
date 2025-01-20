import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'

const useProducts = () => {
	const context = useContext(ProductsContext)

	if (!context) {
		throw new Error(
			'Products Context must be used within a Products Context Provider'
		)
	}

	return context
}

export default useProducts
