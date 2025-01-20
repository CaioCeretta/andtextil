export interface Category {
	id: number
	name: string
}

export interface SpecificationTecido {
	espessura: string
	gramatura: string
	resistenciaRuptura: string
	largura: string
	construcao: string
}

export interface SpecificationTecidoAramida {
	largura: string
	espessura: string
	gramatura: string
	comprimento: string
	temperaturaTrabalho: string
}

export interface SpecificationFio {
	tex: number
	resistenciaRuptura: string
	alongamento: string
	resistenciaTemperatura: string
	metrosQuilo: string
}

export interface SpecificationFioAramida {
	tex: number
	resistenciaRuptura: string
	filamento: string
	resistenciaTemperatura: string
}

export interface SpecificationFita {
	espessura: string
	largura: string
	ruptura: string
	temperaturaTrabalho: string
}

export type Specification =
	| SpecificationFita
	| SpecificationTecido
	| SpecificationTecidoAramida
	| SpecificationFio
	| SpecificationFioAramida

export interface Product {
	id: number
	name: string
	slug: string
	resumoAplicacoes?: string
	description: {
		applications: string[]
		characteristics: string[]
		specifications: Specification[]
	}
	subCategoryId?: number
	categoryId: number
	images: string[]
}

export interface CategoriesContextProps {
	categories: Category[]
	selectedCategory: number | null
	selectCategory: (id: number) => void
}

export interface ProductsContextProps {
	products: Product[]
}
