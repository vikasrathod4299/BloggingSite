import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black py-4">
        <div className="mx-auto px-4 flex justify-between items-center">

          <div className="flex justify-around items-center w-full">

            <a href="#" className="mr-4"><img src={'https://eyecan.in/wp-content/uploads/2022/10/Eyecan-Updated-Logo-e1666782370664.png'} alt="Logo" className="h-8"/></a>
            
            <div className='flex items-center'>
              <Link to={'/'} className="text-yellow-400 font-thin tracking-widest text-xl hover:text-gray-300 focus:text-gray-300">Home</Link>
              <Link to={'/blogs'} className="ml-4 text-yellow-400 font-thin tracking-widest text-xl hover:text-gray-300 focus:text-gray-300 relative">Blogs</Link>
            </div>

          </div>
        </div>
      </nav>
</div>
  )
}

export default Navbar