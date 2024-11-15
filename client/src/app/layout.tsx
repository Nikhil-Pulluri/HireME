import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
// import Navbar from './components/navbar/Navbar'
import Providers from './components/Providers'
import { UserProvider } from '@/context/userContext'
import { Toaster } from 'react-hot-toast'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Kisiko Batana Mat',
  description: 'Generated by me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en" className="light">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <UserProvider>
            <Toaster />
            {/* <Navbar /> */}
            {children}
          </UserProvider>
        </body>
      </html>
    </Providers>
  )
}
