import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './pages/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CategoriesProvider } from './data/contexts/CategoriesContext'
import { ProductsProvider } from './data/contexts/ProductsContext'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CategoriesProvider>
				<ProductsProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</ProductsProvider>
			</CategoriesProvider>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
