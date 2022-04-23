import React from 'react'
import { useLocation } from 'react-router-dom'

function ProjectsData({data}) {
  const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
  console.log(splitLocation,data);
    
      data.map((val)=>{
        if(splitLocation[3] === val.id){
          console.log(val.name)
          return (
            <div className='p-4 m-4 text-4xl md:text-4xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 my-5 font-bold'>{val.name}
            </div>
          )
        }

      })
    
}

export default ProjectsData