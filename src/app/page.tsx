import Form from '../components/Form'
import Card from '../components/Card'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      <Card />
    </main>
  )
}
