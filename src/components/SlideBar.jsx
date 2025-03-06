import React, { useState } from 'react'

const SlideBar = ({ setShowSlidebar }) => {

    return (
        <div className='z-50  fixed top-0 left-0 p-4 border border-white/70 bg-gray-950 min-[320px]:w-11/12 md:w-1/4 overflow-y-auto overflow-x-hidden h-full'>
            <div className='w-full flex justify-end'>
                <button className='outline-none border-none bg-transparent cursor-pointer' onClick={() => setShowSlidebar(false)}>
                    <img src="./src/assets/cross.png" alt="cross-icon" className='opacity-60 min-[320px]:w-5 md:w-7' />
                </button>
            </div>

            <p className='text-2xl'><b>🎯 Key Takeaways</b></p>
            <p className='my-8 text-justify'>In <b>Reasoning Ability</b> you might wondered what is prepositional and factual analysis topics are, so here is all the topics you need to cover for that:</p>
            <p className='my-8 text-xl'><b>⦿ Preposition Topics:</b></p>
            <p className='my-8 ml-4'><b>Expected Number of Questions 5-8</b></p>
            <p className='my-8 mx-4'>
                <li>Statements & Assumptions</li>
                <li>Statements & Conclusion</li>
                <li>Statements & Course of Actions</li>
                <li>Statements & Arguments</li>
            </p>
            <p className='my-8 text-xl'><b>⦿ Figure & Factual Analysis:</b></p>
            <p className='my-8 ml-4'><b>Expected Number of Questions 6-8</b></p>
            <p className='my-8 mx-4'>
                <li>Cut & Unfolds</li>
                <li>Visual Reasoning</li>
                <li>Unboxing a Cube/ Dice</li>
                <li>Attention to Detail</li>
            </p>
        </div>
    )
}

export default SlideBar
