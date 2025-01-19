import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductsList from '@/components/Product/ProductsList'

export default function Categories() {
	return (
		<div className="">
			<section>
				<MaxWidthWrapper
					className="pb-24 pt-10 sm:pb-32 lg:pb-52
lg:pt-24 xl:gap-x-8 xl:pt-10"
				>
					<ProductsList />
				</MaxWidthWrapper>
			</section>
		</div>
	)
}
