import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function Projects({ vals ,learnapps}) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  if (splitLocation[1] === "learn") {
    if (splitLocation[2] === "website") {
      return (

        <div className='right-0 grid grid-cols-1  gap-2'>

          {
            vals.map((val) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#00c200]`} >{val.name}</div></Link>
            ))
          }

        </div>
      )
    }
    if (splitLocation[2] === "apps") {
      return (

        <div className='right-0 grid grid-cols-1  gap-2'>

          {
            learnapps.map((val) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#00c200]`} >{val.name}</div></Link>
            ))
          }

        </div>
      )
    }
  } else if (splitLocation[1] === "proj") {
    return (
      <div className='right-0 grid grid-cols-1  gap-2'>

          {
            vals.map((val, index) => (
              <Link to={val.link}><div className={` p-2 pl-6 ml-8 rounded-lg col-span-1 ${splitLocation[3] === val.id ? "bg-[#000000] font-bold text-white" : "text-[#8899A8]"} hover:font-bold hover:text-white hover:bg-[#ff0000]`} >{val.name}</div></Link>
            ))
          }

        </div>
    )
  }

}

export default Projects