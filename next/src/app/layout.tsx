import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProductsProvider } from '@/contexts/ProductsContext'
import { CategoriesProvider } from '@/contexts/CategoriesContext'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AND Textil',
  description: `Indústria especializada em tecidos, fitas, fios de aramida e fibra de vidro.
    Soluções de alta qualidade para aplicações industriais e técnicas.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex min-h-screen flex-col">
          <ProductsProvider>
            <CategoriesProvider>
              <Header />
              <main className="mx-10 flex-1">{children}</main>
              <Footer />
            </CategoriesProvider>
          </ProductsProvider>
        </div>
      </body>
    </html>
  )
}
