import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import BlogPost from './components/BlogPost'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/createBlog' element={<CreateBlog/>}/>
            <Route path='/blogs/:id' element={<BlogPost/>}/>
            <Route path='/editBlogs/:id' element={<CreateBlog/>}/>
        </Routes>

  )
}

export default Router