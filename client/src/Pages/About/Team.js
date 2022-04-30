import React from 'react'

function Team() {
  return (
    <>
    <div className='lg:text-5xl text-2xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold'>Team</div>
    <ul className='text-[1.1rem] mb-5 text-[#3B454E]'>
        <li >
           We have very Organised team strucutre both for leading the projects and for leading the SDC.Students join as Developers, Designers and they are assigned different products based on their experience and enthusiasm.
         </li>
         

    </ul>
    <hr/>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Team Structure</div>
    The SDC team is divided into three councils 
    <ul className='list-disc m-4'>
      <li>Web Council</li>
      <li>App Council</li>
      <li>Design Council</li>
    </ul>
    <div className='text-center text-[1.2rem] text-[#3B454E]  font-bold'>CHEIF MEMBERS</div>
 
    <div className='text-xl text-[#3B454E] font-bold my-5 mb-2 '>Lord Commander (Head)</div>
    He/She is the Head of the SDC's councils and is responsible for the developement of the community and the members.He/She Discusses with the Maesters about the projects and make a team for projects and assign the roles for the members.And also he/she ensures that study projects are given to the students community.
    <div className='text-xl text-[#3B454E] font-bold my-5 mb-2 '>Maesters (Cores)</div>
    <ul className='text-[1rem] text-[#3B454E]'>
       <li className='m-2'> <strong>Web Maester:</strong> He/She is the  Backbone of SDC's Web council Mentors and manages needs such as frontend,backend,testing and hosting of web products built using the React,Go,NodeJS,Django </li>
       <li className='m-2'> <strong>App Maester:</strong> He/She is the  Backbone of SDC's App council Mentors and manages app requirements such as frontend,backend,testing and hosting of app products built using the flutter,react native,Android based for IOS and Android </li>
       <li className='m-2'> <strong>Design Maester:</strong> He/She is the Backbone of SDC's Design council.He/She manages and guides the design council to create beautiful UIs and stunning UX for the project of SDC. </li>
    </ul>
    <div className='text-xl text-[#3B454E] font-bold my-5 mb-2 '>Commanders (Mentors)</div>
    <ul className='text-[1rem] mb-8 text-[#3B454E]'>
    They are the Senior members of the team who have previously worked on many products with SDC take on projects and advise the next generation team in further developing those projects.
    </ul>
    <div className='text-center text-[1.2rem] text-[#3B454E]  font-bold'>SUPPORTING MEMBERS</div>
    <div className='text-xl text-[#3B454E] font-bold my-5 mb-2 '>Rangers (Senior Dev)</div>
    <ul className='text-[1rem] text-[#3B454E]'>
    After completing one of the two rounds of Development Cycles at SDC, builders are promoted to rangers. Before SDC makes a call for new developers, a development cycle lasts 4-6 months. Phase 1 begins in May, while Phase 2 begins in October.
    <div className='my-2'>
They are SDC's spine, and they will be in charge of guaranteeing the smooth functioning of our projects and shaping the community future by teaching our Builders. They'll be dealing with Builders, directing study projects, and assisting them in their learning.</div>
Their selection process will consist of interviews and questions about their previous experience in SDC study projects.
    </ul>
    <div className='text-xl text-[#3B454E] font-bold my-5 mb-2 '>Builders (Junior Dev)</div>
    <ul className='text-[1rem] text-[#3B454E]'>
    As students take their first steps into the world of development, they are offered projects,mentorship that will help them learn the development cycle while also allowing them to construct a complete fullstack project.
    </ul>
    </>
  )
}

export default Team