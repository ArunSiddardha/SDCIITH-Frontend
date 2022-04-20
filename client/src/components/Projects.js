import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
function Links({name,link}){
  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return(<div className={`col-span-1 ${splitLocation[2]==="html"?"text-[#0EA5E9] font-bold":"text-[#8899A8]"} hover:font-bold hover:text-[#0EA5E9]`} ><Link to={link}>{name}</Link></div>)
}
function Projects({vals}) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
  return (
    <div className='grid grid-cols-1 text-center gap-2'>
      <Links name="Html, Css, Js" link="/learn/website/html"/>
      <div className='col-span-1 text-[#8899A8] '><Link to={vals[0].DriveLink}>{vals[0].projectname}</Link></div>
      <div className='col-span-1 text-[#8899A8] hover:text-black'><Link to={vals[0].DriveLink}>{vals[0].projectname}</Link></div>
      <div className='col-span-1 text-[#8899A8] hover:text-black'><Link to={vals[0].DriveLink}>{vals[0].projectname}</Link></div>
      <div className='col-span-1 text-[#8899A8] hover:text-black'><Link to={vals[0].DriveLink}>{vals[0].projectname}</Link></div>
    </div>
  )
}

export default Projects