import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SlideBar from './SlideBar'

const Navbar = () => {
    const [showSlidebar, setShowSlidebar] = useState(false)
    return (

        <div className='min-[320px]:p-2 md:pl-4 flex w-full'>
            {
                showSlidebar && <SlideBar setShowSlidebar={setShowSlidebar} />}
            <button className='outline-none border-none bg-transparent cursor-pointer' onClick={()=>setShowSlidebar(true)}>
                <img src="./src/assets/slidebar-left.png" alt="slidebar-icon" width={30} className='opacity-60 min-[320px]:w-5 md:w-7' />
            </button>
            <div className='flex w-full min-[320px]:justify-between md:justify-evenly items-center p-4 bg-gray-950/80 text-white/70'>

                <NavLink to="/">TCS Prep</NavLink>
                {window.innerWidth > 768 && <NavLink to="/">Home</NavLink>}
                <NavLink to="/syllabus">Syllabus</NavLink>
                <NavLink to="/calculator">Calculator</NavLink>
                <NavLink to="/progress">Progress</NavLink>

            </div>
        </div>
    )
}

export default Navbar
