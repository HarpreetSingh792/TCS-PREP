import React from "react";
import DataTable from "./DataTable";


const Syllabus = ({ topicsData, updateData }) => {
    return (
        <>
            <h2 className='p-4 text-4xl font-semibold'>Syllabus</h2>
            <div className="ml-8">

                <p><b>Point to be noted:</b></p>
                <p><b>All the Topics written in Syllabus is mandatory</b></p>
                <p><li>✅ means Important</li><li>❌ means less Important</li></p>
            </div>
            {topicsData.map(category => (
                <DataTable key={category.topicType} title={category.topicType} data={category.topics} updateData={updateData} />
            ))}
        </>
    );
};


export default Syllabus
