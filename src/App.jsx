import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Home, CreatePost } from './pages'

import { logo } from './assets'
// import { Home }

export default function App() {

  return (
    <BrowserRouter className='text-3xl font-bold underline decoration-wavy decoration-2 decoration-blue-500'>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 p-4 border-b border-b-[#e6ebf4]'>
        <Link to="/" target='_self' className=''>
          <img src={logo} alt="logo" className='w-12 sm:w-28 object-contain' />
        </Link>

        <Link to="/create-post" target='_self' className='relative font-inter font-medium bg-gradient-to-br from-[#00FFA1] to-[#00D4FF] before:content-[""] before:bg-[url("./assets/noise.png")] before:absolute before:inset-0 text-white py-2 px-4 rounded-full before:rounded-full before:opacity-25'>
          <span className='z-50'>Create</span>
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        {/* [calc(100vh - 73px)] <- this is the height of the navbar */}
        {/* <Routes location=""> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
};
