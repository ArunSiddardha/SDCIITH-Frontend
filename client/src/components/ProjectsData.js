import React from 'react'
import { useLocation } from 'react-router-dom'

function ProjectsData({ data }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let item=[];
  data.map((val) => {
    if (splitLocation[3] === val.id) {
      item.push(<><div className='p-4 m-1 md:m-4 text-2xl md:text-4xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 my-5 font-bold'>{val.name}
      </div>
      <div className='h-fit cursor-pointer py-5 m-1 md:m-4 my-2 md:my-5 '>{val.description}
      </div></>)
    }
  })
  console.log(item);
  return (
    <>
    {item[0].props.children}
    {/* {(splitLocation[3] === "html")? <div className='text-black'>{item[0].props.children}</div>:""} */}
    </>
  )

}

export default ProjectsData