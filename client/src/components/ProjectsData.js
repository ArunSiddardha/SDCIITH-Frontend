import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectsData({name,DriveLink}) {
  const { projId } = useParams();
  return (
    <div>
    <div className='p-4 m-4 text-4xl md:text-4xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 my-5 font-bold'>{name}</div>
    </div>
  )
}

export default ProjectsData