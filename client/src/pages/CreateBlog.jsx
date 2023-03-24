import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import {useNavigate,useNavigation, useLocation, useParams} from 'react-router-dom'


const CreateBlog = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const params = useParams()
    
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(params.id){
            (async()=>{
                const data = await axios.get('http://localhost:3000/blogs/'+params.id)
                setValue(data.data.content)
                setTitle(data.data.title)
            })()

        }
        
    },[])

    const postBlog = async()=>{
        try{
            await axios.post('http://localhost:3000/blogs',{'title':title,content:value})
            navigate('/blogs')            
        }catch(err){

        }
    }

    const updateBlog= async()=>{
        try{
            await axios.put('http://localhost:3000/blogs/'+params.id,{title:title,content:value})
            navigate('/blogs')
        }catch(err){
            console.log(err)
        }
    }
    const deleteBlog = async ()=>{
        try{
            await axios.delete('http://localhost:3000/blogs/'+params.id)
            navigate('/blogs')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <section className='container mx-auto p-8 flex flex-col gap-y-10 sm:gap-y-5'>
                <div className='flex flex-col'>
                    <label>Title For your Blog:</label>
                    <input onChange={(e)=>setTitle(e.target.value)} className='p-3 border border-black' value={title} type={'text'} name='blogTitle' id='blogTitle' placeholder='Enter Title'/>
                </div>
                <ReactQuill className='bg-slate-200 h-96' theme="snow" value={value} onChange={setValue} />
                <div className='flex flex-col my-8 gap-y-3'>
                    <button onClick={params.id?updateBlog:postBlog} className={`${params.id?'bg-blue-500 text-white':'bg-white text-black'}  p-3  tracking-widest border border-black ${params.id?'hover:bg-white hover:text-black':'hover:text-white hover:bg-blue-500'}`}>{params.id?'Update    blog-->':'Post blog-->'}</button>
                    {params.id && <button onClick={deleteBlog} className={`bg-red-500 text-white  p-3  tracking-widest border border-black hover:bg-white hover:text-black`}>{params.id?'Delete blog-->':'Delete blog-->'}</button>}
                </div>
            </section>
        </div>
  )
}

export default CreateBlog