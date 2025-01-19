import { Route, Routes } from 'react-router-dom'

import Categories from './Categorias/Categories'
import CategoryPage from './Categorias/CategoryPage'
import Product from './Product/Product'
import Obrigado from './Obrigado'
import Empresa from './(Principal)/Empresa'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import Contato from './(Principal)/Contato'
import Home from './(Principal)/Home'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/quem-somos" element={<Empresa />} />

				<Route path="categorias" element={<Categories />} />
				<Route
					path="categorias/:categoryName"
					element={<CategoryPage />}
				/>

				<Route
					path="produtos/:productSlug"
					element={<Product />}
				/>

				<Route path="/obrigado" element={<Obrigado />} />
			</Route>
		</Routes>
	)
}
