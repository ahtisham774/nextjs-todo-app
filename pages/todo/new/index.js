'use client'


import Form from '@/app/components/form/form'
import React, {useState} from 'react'

const CreateTodo = () => {

    const [submitting,setSubmitting] = useState(false)

    const [todo,setTodo] = useState({
        title:'',
        description:'',
        status:'',
        completion_date:''
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setSubmitting(true)
        console.log(todo)
        clearTimeout(
            setInterval(
                ()=>{
                    console.log('submitting...')
                },1000
            )
        )
        setSubmitting(false)
    }

  return (
   <Form type={'Create'} todo={todo} setTodo={setTodo} submitting={submitting} handleSubmit={handleSubmit}  />
  )
}

export default CreateTodo