import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Poppins({subsets: ['latin'],
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],

	
})

export const metadata: Metadata = {
	title: 'Netflix App',
	description: 'Nextflix clone next app',
}

/**
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer/>
			</body>
		</html>
	)
}
