import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappButton() {
	return (
		<div className="fixed bottom-12 right-5 z-50">
			<a
				href="https://wa.me/5515981653557"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center bg-green-500 text-white px-4 py-4 rounded-full
      shadow-lg hover:bg-green-600"
			>
				<FaWhatsapp className="w-6 h-6" />
			</a>
		</div>
	)
}
