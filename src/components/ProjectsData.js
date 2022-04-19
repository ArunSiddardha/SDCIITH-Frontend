import React from 'react'

function ProjectsData({name,DriveLink}) {
    console.log(DriveLink,"1")
  return (
    <div>
    <div className='p-4 m-4 text-4xl md:text-4xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 my-5 font-bold'>{name}</div>
    
    </div>
  )
}

export default ProjectsData