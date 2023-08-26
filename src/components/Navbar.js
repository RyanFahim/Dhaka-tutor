import React, { useState } from 'react'
import { BsFillTelephoneFill, BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineBars } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    return (
        <>
            <div className="bg-gray-400 flex justify-around">
                <div className='flex'>
                    <BsFillTelephoneFill size={25} className='mr-2  m-auto' />
                    <div className='m-auto'>+8801531212121</div>

                </div>

                <div className='flex m-2'>
                    <ul className='flex'>
                        <li className='mr-2'><BsFacebook size={25} /></li>
                        <li className='mr-2'><BsLinkedin size={25} /></li>
                        <li className='mr-2'><BsTwitter size={25} /></li>
                        <li className='mr-2'><BsYoutube size={25} /></li>
                    </ul>
                </div>

            </div>

            <div className='flex justify-around bg-gray-200 p-2'>
                <div className='flex my-auto'>
                <AiOutlineBars
                        onClick={() => setNav(true)}
                        className='md:hidden flex mr-5' size={25} />
                <h1 className='text-2xl my-auto'>
                    
                    Tutor Dhaka
                </h1>
                </div>
                <div>

                    <ul className='flex justify-around my-5'>
                        <li className='mr-4 cursor-pointer border-solid border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white hidden md:flex '>Home</li>
                        <li className='mr-4 cursor-pointer  m-auto hidden md:flex'>About Us</li>
                        <li className='mr-4 cursor-pointer  m-auto hidden md:flex'>Categories</li>
                        <li className='mr-4 cursor-pointer  m-auto hidden md:flex'>Review</li>
                        <li className='mr-4 cursor-pointer border-solid border-2 border-orange-600 p-2 rounded-lg hover:bg-orange-600 hover:text-white hidden md:flex'>Login</li>


                    </ul>
                </div>
                {/* <div>
                    <AiOutlineClose />
                </div> */}
            </div>

            {/* mobile version */}

            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
                <div className='flex justify-around mt-3'>
                    <h1 className='text-2xl mb-5'> Tutor Dhaka</h1>
                    <AiOutlineClose
                        onClick={() => setNav(false)}
                        className='cursor-pointer' size={25} />
                </div>
                <div>
                    <ul className='flex-col justify-center'>
                        <li className='mr-4 cursor-pointer border-solid border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white ml-3'>Home</li>
                        <li className='mr-4 cursor-pointer ml-3 py-3 m-auto'>Categories</li>
                        <li className='mr-4 cursor-pointer ml-3 py-3 m-auto'>About Us</li>
                        <li className='mr-4 cursor-pointer ml-3 py-3 m-auto'>Review</li>
                        <li className='mr-4 cursor-pointer ml-3 border-solid border-2 border-orange-600 p-2 rounded-lg hover:bg-orange-600 hover:text-white'>Login</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar