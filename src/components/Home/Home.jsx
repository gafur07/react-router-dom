import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-[80%] mx-auto h-screen my-auto'>
        <div className='flex h-screen justify-center items-center flex-col gap-4'>
            <h1 className='font-extrabold text-8xl'>Hello User</h1>
            <p className='text-gray-400 text-[18px] text-center max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto voluptatem odio labore, molestiae pariatur asperiores debitis reprehenderit quas ducimus libero quibusdam tempore vero sunt architecto accusantium exercitationem excepturi aperiam corporis cum dolor soluta officia. Aliquam officiis, itaque sapiente pariatur eaque corrupti totam libero aliquid nobis deleniti eius ex veritatis!</p>
        <span className='flex gap-4'>
                <Link 
                    className='rounded-md px-4 py-2 text-white bg-blue-500 font-bold text-xl' 
                    to={"/about"}>
                    About me
                </Link>
                <Link  
                    className='rounded-md px-4 py-2 text-white bg-blue-500 font-bold text-xl' 
                    to={"/posts"}>
                    Posts
                </Link>
        </span>
        </div>
    </div>
  )
}

export default Home