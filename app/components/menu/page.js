
import Image from 'next/image'
import { Link } from 'react-router-dom'
// import Link from 'next/link'
import {MdAddBox,MdHome} from 'react-icons/md'
import {SiMinutemailer} from 'react-icons/si'
const Sidebar = () => {
    const imageWidth = 30 , imageHeight = 30 
    const style = ' p-1 text-center hover:-translate-y-1 transition-transform ease-in-out duration-[500ms]'
   
  return (
    // <div>Hello</div>
    <div className=' fixed inset-x-0 bottom-5 flex justify-center item-center  z-50'>
    <div className=' flex gap-5 p-2  z-50  bg-slate-800 shadow-xl rounded-2xl'>
        
        
        <Link className={style} to='/' ><MdHome size={40} className='text-slate-100'/> </Link>    
        <Link className={style} to='/new' ><MdAddBox size={40} className='text-slate-100' /></Link>    
        <Link className={style} to='/contact' ><SiMinutemailer size={40} className='text-slate-100' /> </Link>    
    </div>
    </div>
  )
}

export default Sidebar