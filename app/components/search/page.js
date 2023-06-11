'use client'
import { useState } from "react" 



const Search = () => {

    const [search, setSearch] = useState('')

    const handleChange = (e) =>{
        console.log(e.target.value)
        setSearch(e.target.value)

    }



  return (
    <input
    type="search"
    value={search}
    onChange={handleChange}
    className="relative m-0 block w-full min-w-0 flex-auto rounded   bg-transparent bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-white placeholder:text-white focus:outline-none hover:text-white  dark:text-white dark:placeholder:text-white "
    id="exampleSearch"
    placeholder="Search..." />
  )
}

export default Search