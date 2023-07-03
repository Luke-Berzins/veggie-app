import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cowculator',
  description: 'A tool made by Luke Berzins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
        <link rel='icon' href='/cow.svg'/>
      </head>
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  )
}
