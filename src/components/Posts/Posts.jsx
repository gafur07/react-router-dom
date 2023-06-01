import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(res => {
            setPosts(res)
            console.log(res)
    })
    },[])

    function deleteTask(id) {
        setPosts(posts.filter(item => item.id !== id))
        Swal.fire({
            title: "Task deleted!",
            text: "Task oshirldi qaytip tiklew mumkin emes !",
            icon: "info",
            timer: 5000
        })
        console.log("Hello");
    }
    
  return (
    <div className='w-[80%] mx-auto mt-[150px]'>
        <h1 className='text-center text-xl font-bold mb-[30px]'>
            All post
           ({posts.length})
        </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-4 mb-[50px]'>

        {
            posts.map(item => (
                <div key={item.id} className='bg-green-400 h-[200px] rounded-md p-4 text-white font-bold'>
                    <h1 className='h-[120px]'>
                        {item.title}
                    </h1>
                    <button onClick={() => deleteTask(item.id)} className='bg-red-500 text-white rounded-md px-4 py-2 cursor-pointer'>Delete</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Posts