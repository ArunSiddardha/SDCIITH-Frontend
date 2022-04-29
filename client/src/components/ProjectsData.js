import React from 'react'
import { useLocation } from 'react-router-dom'

function ProjectsData({ data }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let item=[];
  data.map((val) => {
    if (splitLocation[3] === val.id) {
      item.push(<div className='p-4 m-4 text-4xl md:text-4xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 my-5 font-bold'>{val.name}
      </div>)
    }
  })
  console.log(item);
  return (
    <div className={item[0].props.className}>{item[0].props.children}</div>
  )

}

export default ProjectsData