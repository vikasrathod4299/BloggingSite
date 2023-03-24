import React from 'react'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Blogs = () => {


  return (
    <div>
      
      <header className='text-3xl container mx-auto p-8'>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div> 
      </header>
      <section className='container mx-auto bg-white dark:bg-gray-900 flex flex-col items-center'>

            <Link to={'/createBlog'} className='p-3 border border-black hover:bg-blue-500 w-36'>{'Create Blog-->'}</Link>
            <BlogList/>

      </section>

      <Footer/>
    </div>
  )
}

export default Blogs