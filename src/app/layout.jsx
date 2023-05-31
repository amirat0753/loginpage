import './globals.css'
import { Inter } from 'next/font/google'
import Form from './component/form'
import Nav from './component/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-orange-500 via-blue-600 to-slate-950 ]'>
        <section className='h-[auto] w-[350px] bg-black mx-auto my-8 text-sky-600 pb-5 rounded-lg p-3 shadow-2xl'>
            <Nav/>
            {children}
        </section>
       
      </body>
    </html>
  )
}
