import React, { useEffect, useState } from 'react'

const Calculator = () => {

    const [effortTime, setEffortTime] = useState(() => {
        return parseInt(JSON.parse(localStorage.getItem("effortsData") ?? 0));
    })
    const [totalTopics, setTotalTopics] = useState(1);
    const [totalDays, setTotalDays] = useState(1);
    const [learningRate, setLearningRate] = useState(1); //in hrs
    const [forceUpdate, setUpdate] = useState(false);

    const calculateEffortTime = (topic, days, learningRate) => {
        if (!totalTopics || !totalDays || !learningRate) return;
        localStorage.setItem("effortsData", Math.round(topic / days * learningRate))
        setLearningRate();
        setTotalDays();
        setTotalTopics()
        setUpdate(p => !p)
    }


    useEffect(() => {
        setEffortTime(parseInt(JSON.parse(localStorage.getItem("effortsData") ?? 0)))
    }, [forceUpdate])
    return (
        <div className='p-4 flex flex-col items-start gap-4'>
            <h2 className='text-2xl font-semibold'>Efforts Requirred <p className='text-lg'>(in hr)</p></h2>
            {
               totalDays==1&&effortTime>24?<p className='text-4xl'>Only God Can Save You Now 🫡🥲</p>: effortTime ?
                    <>
                        <input value={`${effortTime}` + (effortTime === 1 ? "hr" : "hrs")} className='border rounded-xs w-full p-4 text-2xl border-white/40' />
                        <button className='outline-none border border-white/40 p-2 px-4 rounded-md md:w-1/2 md:m-auto cursor-pointer hover:bg-zinc-700' onClick={() => {
                            localStorage.setItem("effortsData", 0)
                            setUpdate(p => !p)
                        }}>Clear</button>
                    </> : ""

            }


            <h2 className='my-8 text-2xl font-semibold'>Calculate Efforts Requirred <p className='text-lg'>(in hr)</p></h2>
            <input type='number' value={totalTopics} className='outline-none border border-white/40 p-4 min-[320px]:w-full md:w-1/2 md:m-auto rounded-md' placeholder='Enter total number of topics' min={1} onChange={(e) => setTotalTopics(e.target.value)} />
            <input type='number' value={totalDays} className='outline-none border border-white/40 p-4 min-[320px]:w-full md:w-1/2 md:m-auto rounded-md' placeholder='Enter total number of days' min={1} onChange={(e) => setTotalDays(e.target.value)} />
            <input type='number' value={learningRate} className='outline-none border border-white/40 p-4 min-[320px]:w-full md:w-1/2 md:m-auto rounded-md' placeholder='Enter total number of study hours' min={1} onChange={(e) => setLearningRate(e.target.value)} />

            <button className='outline-none border border-white/40 p-2 px-4 rounded-md md:w-1/2 md:m-auto cursor-pointer hover:bg-zinc-700' onClick={() => calculateEffortTime(totalTopics, totalDays, learningRate)}>Submit</button>
        </div>
    )
}

export default Calculator
