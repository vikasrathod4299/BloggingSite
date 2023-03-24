import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full bottom-0 py-8'>
        <div className='flex flex-col gap-y-6 justify-center items-center container mx-auto sm:flex-row'>
            <div className='w-full flex flex-col gap-y-4 sm:w-1/3'>
                <div>
                    <img className='w-40' src='https://eyecan.in/wp-content/uploads/2022/10/Eyecan-Updated-Logo-e1666782370664.png'  alt='logo'/>
                    <p className='text-slate-400 text-sm'>Empowering Lives through A.I.</p>
                </div>
                <p className='font-bold text-white text-base'>Know More abount Eyecan.</p>
                <p className='text-slate-400 text-sm'>Eyecan is India’s most advanced mobile assistant application on a mission to show the potential of the blind to the world.</p>
            </div>
            <div className='w-full flex flex-col gap-y-3 sm:1/3 sm:px-36'>
                <p className='font-semibold text-white tracking-wider'>Useful Links</p>
                <ul className='text-white flex flex-col gap-y-8'>
                    <li className='text-base '><a>Home</a></li>
                    <li className='text-base '><a>Blogs</a></li>
                    <li className='text-base '><a>About us</a></li>
                </ul>
            </div>
            <div className='w-full flex flex-col gap-y-4 sm:1/3'>
                <div>
                    <p className='font-semibold text-base text-white tracking-wider'>Address</p>
                    <p className='text-slate-400 text-sm'>5224, Block 5, Ace Golfshire, Noida Sector 150, Uttar Pradesh, India.</p>
                </div>
                <div>
                    <p className='font-semibold text-base text-white tracking-wider'>Phone</p>
                    <p className='text-slate-400 text-sm'>+91 8225835554</p>
                </div>
                <div>
                    <p className='font-semibold text-base text-white tracking-wider'>Email</p>
                    <p className='text-slate-400 text-sm'>support@eyecan.in</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer