import { Inter, Paytone_One } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { AmplifyProvider } from '@/components/amplify-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const paytoneOne = Paytone_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-paytone-one',
})

export const metadata: Metadata = {
  title: 'Craft Build',
  description: 'Build your plan. Craft your build.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${inter.variable} ${paytoneOne.variable}`}>
      <body>
      <AmplifyProvider>
        {children}
      </AmplifyProvider>
      </body>
      </html>
  )
}