import React from 'react'

function Intro() {
  const link = "https://drive.google.com/file/d/1KEzoCMGoYWX7tIk1SBf3mBKrQ-ruVmzR/preview";
  return (
  
      <div className='  relative'>
    <div className='lg:text-5xl text-2xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold'>Student Dev Commitee</div>
    <div className='text-xl lg:text-3xl text-[#3B454E] font-bold my-5'>Our Aim</div>
    <ul className='text-md font-serif'>
        <li >
            Our Aim for forming this commitee is 
         </li>
         <li>
         To give the students a hands on experience for desiging,developing, managing websites, Apps and Products. With Giving the Right Mentorship and relevant Resources.
         </li>
         <li>
             To design,develope,deploy cool Apps, websites and products which are in need for institute, clubs, informal associations. 
         </li>

    </ul>
    <iframe src={link} className='w-5/6 h-[50vh] mx-auto lg:h-[120vh]' allow="autoplay"></iframe>
    
    </div>
   
  )
  
}

export default Intro