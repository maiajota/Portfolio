import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'João Victor Maia | Fullstack',
  description: 'Farei de tudo para o seu proximo app ficar incrível!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white-300 text-gray-500`}>{children}</body>
    </html>
  )
}
