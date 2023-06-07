import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative flex gap-2 w-full items-center justify-between  p-1  shadow-lg rounded-lg '  data-te-navbar-ref>
       
       <Image src="/todo-logo.png" className=''  alt='todo-logo' width={60} height={60} />
       
       <div class="w-full px-2">
  <input
    type="search"
    class="relative m-0 block w-full min-w-0 flex-auto rounded   bg-transparent bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-white placeholder:text-white focus:outline-none hover:text-white  dark:text-white dark:placeholder:text-white "
    id="exampleSearch"
    placeholder="Type query" />
</div>
    </nav>
  )
}

export default Navbar