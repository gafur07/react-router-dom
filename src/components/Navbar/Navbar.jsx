import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-indigo-400 fixed top-0'>
        <header className='w-[80%] mx-auto py-8 flex text-white justify-between items-center'>
            <h1 className='font-bold text-3xl'>
                <Link to={"/"}>Logo</Link>    
            </h1>
            <ul className='flex items-center gap-4'>
                <li className='font-bold text-xl'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='font-bold text-xl'>
                    <Link to={"/posts"}>Posts</Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar