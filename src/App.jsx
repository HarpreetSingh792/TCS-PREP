import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Data from "./assets/data"
import Calculator from "./components/Calculator"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
import Progress from "./components/Progress"
import Syllabus from "./components/Syllabus"

function App() {

  const [topicsData, setTopicsData] = useState(() => {
    const savedData = localStorage.getItem("topicsData");
    return savedData ? JSON.parse(savedData) : Data;
  });



  const updateData = (topicName) => {
    const newData = topicsData.map(category => ({
      ...category,
      topics: category.topics.map(topic => topic.topic === topicName ? { ...topic, isCompleted: !topic.isCompleted } : topic)
    }));
    setTopicsData(newData);
    localStorage.setItem("topicsData", JSON.stringify(newData));
  };
  return (

    <div className="bg-gray-950 min-h-screen h-full p-0  text-white/70">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus topicsData={topicsData} updateData={updateData} />} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="//progress" element={<Progress data={topicsData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
