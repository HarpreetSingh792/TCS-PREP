import React from 'react'
import ProgressChart from './ProgressChart'

const Progress = ({ data }) => {
    return (
        <>
            {
                data?.map((ele) => {
                    return <div key={ele.topicType}>
                        <ProgressChart data={ele}/>
                    </div>
                })
            }
        </>
    )
}

export default Progress
