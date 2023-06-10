import React from 'react'
import { MdEdit } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Todo = ({todo}) => {
    const status = [
        {
            key:'running',
            value:' bg-purple-100 text-purple-800'
        }
        ,
        {
        key:'completed',
        value:' bg-purple-100 text-pink-800'
    },

]
  return (

    <tr className="border-b dark:border-neutral-500">
        

        <td className="whitespace-nowrap px-6 py-4">{todo.title}</td>
        <td className="whitespace-nowrap px-6 py-4">{todo.description}</td>
        <td className="whitespace-nowrap px-6 py-4"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status.filter((s)=>s.key === todo.status).map((s)=>s.value)}`} >{todo.status}</span></td>
        <td>
        <NavLink
            to={`/todo/${todo.id}`}
            className='text-slate-400 hover:text-slate-100 focus:outline-none focus:underline text-lg'
        >
            <MdEdit />
        </NavLink>
        </td>
    </tr>




    //    <div className='flex flex-col bg-slate-100 flex-1 min-h-[20rem] min-w-[20rem]  text-slate-800 p-2 rounded-lg shadow-2xl'>
    //     <div className='flex justify-between'>
    //     <h1 className=' text-ellipsis text-xl font-bold'>{todo.title}</h1> <span className='px-2 inline-flex text-center align-middle text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800' > {todo.status}</span>
    //     </div>
    //     <p >{todo.description}</p>

    //     <div>
    //     <NavLink
    //         to={`/todo/${todo.id}`}
    //         className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
    //     >
    //         <MdEdit />
    //     </NavLink>
    //     </div>
    //    </div>
   
  )
}

export default Todo