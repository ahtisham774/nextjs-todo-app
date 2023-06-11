'use client'
// import Image from 'next/image'
// import Navbar from './components/header/navbar'
// import Sidebar from './components/sidebar/sidebar'
import React,{useContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from '@/pages/dashboard/dashboard';
import About from '@/pages/about/about';
import Users from '@/pages/user';
import Contact from '@/pages/contact/page';
import Sidebar from './components/menu/page';

 const  Home = () =>  {
   
  return (
    <div className=' relative flex flex-row w-full  z-1  align-middle items-center justify-stretch gap-x-4 '>
            
            <Router>
                <Sidebar />
                 <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/user' element={<Users/>} />
                </Routes>
            </Router>
        </div>
    
    
  )
}

export default Home