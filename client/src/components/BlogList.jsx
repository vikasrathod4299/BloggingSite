import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import DOMPurify from "dompurify";
import axios from 'axios';

const BlogList = () => {
    const [data, setData]=useState([])

    useEffect(()=>{
        (async()=>{
            try{
                const data = await axios.get('http://localhost:3000/blogs')
                setData(data.data) 
            }catch(err){
                console.log(err)
            }
        })()
    },[])

  return (

    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">


    <div className="grid gap-8 lg:grid-cols-2">
      {
          data.map((item)=>{
              return <article key={item._id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">

                          <div className="flex justify-between items-center mb-5 text-gray-500">
                              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                  {item.type}
                              </span>
                              <span className="text-sm">{new Date(item.date).toLocaleDateString()}</span>
                          </div>

                          <div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{item.title}</a></h2>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content.slice(0,250))}} className="mb-5 font-light text-gray-500 dark:text-gray-400"></p>
                          </div>

                          <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                  <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                  <span className="font-medium dark:text-white">
                                      {item.auther}
                                  </span>
                              </div>
                              <div className='flex gap-x-2 items-center'>
                              <Link to={`/editBlogs/${item._id}`} className="inline-flex items-center font-medium text-orange-400 dark:text-orange-300 hover:underline">
                                  <svg className="mr-2 w-4 h-4 bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>
                                  Edit Blog
                              </Link>
                              <Link to={`/blogs/${item._id}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                  Read more
                                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule='evenodd' d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule={"evenodd"}></path></svg>
                              </Link>
                              </div>
                          </div>
                    </article> 
        })
    }
    </div>  
</div>

  )
}

export default BlogList