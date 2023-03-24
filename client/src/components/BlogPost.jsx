import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from "dompurify";
import Footer from './Footer';

const BlogPost = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    
    useEffect(()=>{
        (async()=>{
            try{
                const data = await axios.get('http://localhost:3000/blogs/'+params.id);
                setPost(data.data)
            }catch(err){
                console.log(err)
            }
        })()
    },[])

  return (
    <div>

    <section className='container mx-auto flex flex-col justify-center items-center gap-y-8 p-8'>
        <div>
            <h1 className='text-2xl font-extrabold sm:text-4xl '>{post.title}</h1>
        </div>
        <div className='border rounded-md p-8 bg-slate-200 w-[350px] sm:w-[600px] lg:w-[1000px]'>
            <div className='flex justify-between my-4'>
                <code className='text-slate-400 underline'>{post.auther}</code>
                <code className='text-slate-400 underline'>{new Date(post.date).toLocaleDateString()}</code>
            </div>
           <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} className="my-4-5 font-light text-gray-500 dark:text-gray-400"></p> 
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default BlogPost