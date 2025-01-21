import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

import { capitalizeString } from '@/lib/utils'
import useCategories from '@/data/hooks/useCategories'

// interface ProductsNavDropdownProps {
//   categories: Category[]
//   className?: string
// }

export default function ProductsNavDropdown() {
	const {
		categories,
		selectCategory,
		emptyCategorySelected,
	} = useCategories()

	// const navigate = useNavigate()

	// const handleCategoryClick = (category: Category) => {
	// 	selectCategory(category.id)
	// 	navigate(`/categorias/${category.name}`)
	// }

	return (
		<div className="">
			<DropdownMenu>
				<DropdownMenuTrigger className="font-bold text-sm md:text-md lg:text-lg">
					Produtos
				</DropdownMenuTrigger>
				<DropdownMenuContent className="my-2 p-0 border-0 rounded-none text-sm md:text-md lg:text-lg">
					<DropdownMenuItem className="text-justify text-sm md:text-md bg-main-yellow rounded-none">
						<Link
							onClick={emptyCategorySelected}
							to={'/categorias'}
							className="text-blue-text font-semibold text-sm md:text-md lg:text-lg p-0 m-0"
						>
							Todos Produtos
						</Link>
					</DropdownMenuItem>
					{categories.map((category) => (
						<DropdownMenuItem
							onClick={() => selectCategory(category.id)}
							className="text-justify text-blue-text md:text-md lg:text-lg font-semibold text-sm md:text-md z-20 bg-main-yellow rounded-none"
							key={category.id}
						>
							<Link to={`/categorias/${category.name}`}>
								{capitalizeString(category.name)}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
