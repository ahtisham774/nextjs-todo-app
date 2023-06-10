
import Navbar from './components/header/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo-App',
  description: 'A todo-app using NEXT-JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " relative flex flex-col"}>

  
        <Navbar/>
        {children}
        {/* <div className=' relative flex flex-row w-full h-screen z-1 bg-slate-400 align-middle items-center justify-stretch gap-x-4 '>
            <Sidebar />
            {children}
        </div> */}
  
      </body>
    </html>
  )
}
