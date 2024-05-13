import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster/toaster'
import { ReduxProvider } from '@/store/provider'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt">
			<body className={poppins.className}>
				<ReduxProvider>
					{children}
					<Toaster />
				</ReduxProvider>
			</body>
		</html>
	)
}
