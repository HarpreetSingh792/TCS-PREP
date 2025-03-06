import React from "react";
import DataTable from "./DataTable";


const Syllabus = ({ topicsData, updateData }) => {
    return (
        <>
            <h2 className='p-4 text-4xl font-semibold'>Syllabus</h2>
            {topicsData.map(category => (
                <DataTable key={category.topicType} title={category.topicType} data={category.topics} updateData={updateData} />
            ))}
        </>
    );
};


export default Syllabus
