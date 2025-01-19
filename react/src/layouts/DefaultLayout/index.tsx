import Navbar from '@/components/Header/Navbar/Navbar'
import Footer from '@/components/Rodape'
import WhatsappButton from '@/components/WhatsappButon'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1 flex flex-col w-screen">
				<Navbar />
				<main className="flex-1 flex flex-col mx-10">
					<Outlet />
				</main>
				<Footer />
				<WhatsappButton />
			</div>
		</div>
	)
}
