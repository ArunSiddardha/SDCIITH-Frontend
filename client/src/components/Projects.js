import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function Projects({ vals ,learnapps,learndesign}) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  if (splitLocation[1] === "learn") {
    if (splitLocation[2] === "website") {
      return (

        <div className='relative top-[1vh] right-0 grid grid-cols-1   gap-2'>
<div className={` m-6 text-lg text-black rounded-lg col-span-1 text-center font-bold  `}>TOPICS</div>
          {
            vals.map((val) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#00cc00]`} >{val.name}</div></Link>
            ))
          }

        </div>
      )
    }
    if (splitLocation[2] === "apps") {
      return (

        <div className='right-0 grid grid-cols-1  gap-2'>
<div className={` m-6 text-lg text-black rounded-lg col-span-1 text-center font-bold  `}>TOPICS</div>
          {
            learnapps.map((val) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#00c200]`} >{val.name}</div></Link>
            ))
          }

        </div>
      )
    }
    if (splitLocation[2] === "design") {
      return (

        <div className='right-0 grid grid-cols-1  gap-2'>
<div className={` m-6 text-lg text-black rounded-lg col-span-1 text-center font-bold  `}>TOPICS</div>
          {
            learndesign.map((val) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#00c200]`} >{val.name}</div></Link>
            ))
          }

        </div>
      )
    }
  } 
  

}

export default Projects