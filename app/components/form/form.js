
import Link from 'next/link'

const Form = ({ type, todo, setTodo, submitting, handleSubmit }) => {
    return (
        <div className='w-full max-w-full flex flex-col'>
        <h1 className=' font-mono text-xl'>{type} Todo</h1>
        <form className='mt-10 w-full max-w-2xl flex flex-col gap-7 p-2 rounded-lg bg-slate-800 text-slate-100 dark:bg-slate-100 dark:text-slate-800' onSubmit={handleSubmit}>
            <div>
                <label
                    className='font-satoshi font-semibold text-base text-slate-800 dark:text-slate-100'
                    htmlFor='todo-title'
                > Title </label>
                <input type="text" name="text" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} id='todo-title' placeholder="Add Title Here..." />
            </div>
            <div>
                <label className='font-satoshi font-semibold text-base text-slate-800 dark:text-slate-100' htmlFor="todo-description">Description</label>
                <textarea name="description" value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} id="todo-description" cols="30" rows="10" placeholder='Add Description Here...'></textarea>
            </div>
            <div>
                <label
                    className='font-satoshi font-semibold text-base text-slate-800 dark:text-slate-100'
                    htmlFor='todo-status'
                > Status </label>
                <div>
                    <div>
                        <span>Running</span>
                        <input type="radio" value={todo.status} onChange={(e) => setTodo({ ...todo, status: e.target.value })} name="status" id="todo-running" />
                    </div>
                    <div>
                        <span>Completed</span>
                        <input type="radio" value={todo.status} onChange={(e) => setTodo({ ...todo, status: e.target.value })} name="status" id="todo-completed" />
                    </div>
                    <div>
                        <span>Error</span>
                        <input type="radio" value={todo.status} onChange={(e) => setTodo({ ...todo, status: e.target.value })} name="status" id="todo-error" />
                    </div>
                </div>
            </div>

            <div>
            <label
                    className='font-satoshi font-semibold text-base text-slate-800 dark:text-slate-100'
                    htmlFor='todo-completion-date'
                > Date at complete </label>

                <input type="datetime-local" name="date" id="todo-completion-date" />
            </div>

           <div>
            <Link className='bg-slate-800 p-3' href='/' prefetch={false} replace>
                Cancel
            </Link>
           <button type='submit'>
                {submitting? `${type}...` : type}
            </button>
           </div>
        </form>

    </div>
    )
}

export default Form