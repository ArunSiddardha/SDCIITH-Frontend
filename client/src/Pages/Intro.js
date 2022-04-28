import React from 'react'

function Intro() {
  const link = "https://drive.google.com/file/d/1KEzoCMGoYWX7tIk1SBf3mBKrQ-ruVmzR/preview";
  return (
  
      <div className='  relative'>
    <div className='lg:text-5xl text-2xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-8 font-bold'>Welcome to the SDC</div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5 '>Introduction to SDC</div>
    <ul className='text-md text-[#3B454E]'>        
            Welcome to the SDC. Here we are a group of developers who work around the clock to design,develope,deploy ,direct Websites, Apps and Products.And here we give students a hands on experience for desiging,developing, managing products .By Giving the Right Mentorship and relevant Resources for the same
            which are in need for institute, Clubs, Informal associations, Fests.    
    </ul>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Our Aim</div>
    <ul className='text-md text-[#3B454E]'>
    <li >
            Our Aim for forming this commitee is to give the students a hands on experience for desiging,developing, managing websites, Apps and Products and establish a development culture in campus. With Giving the Right Mentorship and relevant Resources
            To design,develope,deploy cool Apps, websites and products which are in need for institute, Clubs, Informal associations, Fests. 

         </li>
    </ul>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Our Culture</div>
    <ul className='text-md text-[#3B454E]'>
    <li >
           We will be working on projects in an organised manner . With a proper hirerchial team structure with a immese amout of learning,management skills from ur peers
         </li>
    </ul>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>What will you learn?</div>
    <ul className='text-md text-[#3B454E]'>
    <li >
           Apart from learning the skills. u will get to know how a team works how to lead and manage a team with an actual real life project. And u will get to know many people who will be mentoring u . And u will get to know the crucial things that are important for u from ur fellow mentors by this way we establish a community culture in our dev community.
         </li>
    </ul>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Join Our Discord Server</div>
    <div className='text-[#3B454E]'>We use discord as our discussion forum where we mentor and clarify doubts regarding the study projects. And for assigned the SDC projects to the people. </div>
    <a href='https://gymkhana.iith.ac.in/index.html'>
      
   <div className='flex justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E] items-center h-[70px] rounded-lg hover:border-2 hover:border-black bg-[#7289da] m-3'>
   Join Our Discord by clicking here 
   </div></a>
    {/* <iframe src={link} title="1" className='w-5/6 h-[50vh] mx-auto lg:h-[120vh]' allow="autoplay"></iframe> */}
    
    </div>
   
  )
  
}

export default Intro