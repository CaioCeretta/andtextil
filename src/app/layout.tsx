import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ProductsProvider } from '@/contexts/ProductsContext'
import { CategoriesProvider } from '@/contexts/CategoriesContext'
import WhatsappButton from '@/components/WhatsappButon'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AND Textil',
  description: `Indústria especializada em tecidos, fitas, fios de aramida e fibra de vidro.
    Soluções de alta qualidade para aplicações industriais e técnicas.`,
  keywords: [
    'tecidos industriais',
    'fitas de aramida',
    'fios de aramida',
    'fibra de vidro',
    'materiais têxteis técnicos',
    'tecidos resistentes',
    'aramida',
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'CUnJHSrtNHV-f1ZpFo4eelcPmHIJo10rfRClL6WxCfk',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex min-h-screen flex-col">
          <ProductsProvider>
            <CategoriesProvider>
              <Header />
              <main className="mx-10 flex-1">{children}</main>
              <Footer />
              <WhatsappButton />
            </CategoriesProvider>
          </ProductsProvider>
        </div>
      </body>
    </html>
  )
}
