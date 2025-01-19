import Navbar from '@/components/Header/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import {
	ContentWrapper,
	LayoutContainer,
	Main,
} from './styles'
import Footer from '@/components/Rodape'
import WhatsappButton from '@/components/WhatsappButon'

export function DefaultLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<LayoutContainer>
				<Main>
					<ContentWrapper>
						<Outlet />
					</ContentWrapper>
				</Main>
			</LayoutContainer>
			<Footer />
			<WhatsappButton />
		</div>
	)
}
