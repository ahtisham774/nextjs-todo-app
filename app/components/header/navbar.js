import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="flex  flex-col items-center justify-between p-2">
    <nav className='relative flex gap-2 w-11/12 items-center justify-between bg-slate-800 dark:bg-slate-100  p-1 transition-[width]  duration-[1.5s] shadow-lg rounded-2xl lg:w-2/3 '  data-te-navbar-ref>
       
       <Image src="/todo-logo.png"  alt='todo-logo' width={60} height={60}  priority/>
       
       <div class="w-full px-2">
  <input
    type="search"
    className="relative m-0 block w-full min-w-0 flex-auto rounded   bg-transparent bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-white placeholder:text-white focus:outline-none hover:text-white  dark:text-white dark:placeholder:text-white "
    id="exampleSearch"
    placeholder="Search..." />
</div>
    </nav>
    </header>
  )
}

export default Navbar