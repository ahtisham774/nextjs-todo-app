import React from 'react'
import Todo from '../../app/components/todos/todo'

const Todos = () => {

    const todos = [
        {
            id: 1,
            title: 'Todo 1',
            description: 'This is todo 1',
            status: 'running'
        },
        {
            id: 2,
            title: 'Todo 2',
            description: 'This is todo 2',
            status: 'running'
        },
        {
            id: 3,
            title: 'Todo 3',
            description: 'This is todo 3',
            status: 'completed'
        },{
            id: 4,
            title: 'Todo 4',
            description: 'This is todo 4',
            status: 'running'
        },{
            id: 5,
            title: 'Todo 5',
            description: 'This is todo 5',
            status: 'completed'
        }
    ]


  return (
    //show array of 5 todos
    <div className='flex  items-center justify-start gap-4 w-full p-3'>
   
        <table className="min-w-full text-left text-sm font-light text-slate-100 bg-slate-800 rounded-lg shadow-xl">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                <th scope="col" className="px-6 py-4">Title</th>
                <th scope="col" className="px-6 py-4">Description</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4"></th>
            </tr>
        </thead>
        <tbody >
            {
                //create array of n elements
               todos.map((todo,index) => {
                    console.log(index)
                    return (
                        <Todo key={index} todo={todo} />
                    )
                })
            }
            
            </tbody>
            </table>
            </div>
  )
}

export default Todos