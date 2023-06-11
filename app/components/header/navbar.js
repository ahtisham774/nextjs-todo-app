import Image from 'next/image'
import React from 'react'
import Search from '../search/page'

const Navbar = () => {
  return (
    <header className="flex  flex-col items-center justify-between p-2">
    <nav className='relative flex gap-2 w-11/12 items-center justify-between bg-slate-800 dark:bg-slate-100  p-1 transition-[width]  duration-[1.5s] shadow-lg rounded-2xl lg:w-2/3 '  data-te-navbar-ref>
       
       <Image src="/todo-logo.png"  alt='todo-logo' width={60} height={60}  priority/>
       
       <div class="w-full px-2">
        <Search/>
</div>
    </nav>
    </header>
  )
}

export default Navbar