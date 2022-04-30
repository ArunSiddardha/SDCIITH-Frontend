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
     
  
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Things we do
</div>
<ul>
  <li className='m-2'>
    <strong>Skill enhancement:</strong> Join in on our workshops and a lot more to pick up a new skill or to enhance your skill through our well educated mentors.
  </li>
  <li className='m-2'>
  <strong>Meetups:</strong> Get involved in meetups of a wonderful community of developers and aspiring developers to share ideas and to know about the best practices in the development world.
  </li>
  <li className='m-2'>
  <strong>Developement:</strong> We are advocates of Free/Libre Software. We are a community of makers and are constantly working on various fun projects.
  </li>
  <li className='m-2'>
  <strong>Networking:</strong> Participate in meetups and workshops conducted in association with different communities to get to know interesting people while picking up new skills along the way.
  </li>
  </ul>
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Who are we? Why did we make this community?
</div>
      <ul className='text-md text-[#3B454E]'>
        <li >
        We're just a collection of curious individuals from IITH that enjoy developing things. We saw that our capacity to create things had benefited us and those around us in a variety of ways.But here in IITH we observed lack of development,mentorship culture. We wanted to show others how much fun it is to produce things so they may make things that assist more people.<strong> In brief, we created this community so that we may assist others and inspire others to help others which leads to a culture.</strong>
        </li>
      </ul>
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>What will you learn?</div>
      <ul className='text-md text-[#3B454E]'>
        <li >
          Apart from learning the skills. u will get to know how a team works how to lead and manage a team with an actual real life project. And u will get to know many people who will be mentoring u . And u will get to know the crucial things that are important for u and u will get to know how it will be while working for a real project from ur fellow mentors by this way we establish a community culture in our dev community.
        </li>
      </ul>
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Why do we do the things we do?</div>
      <ul className='text-md text-[#3B454E]'>
        <li >
         Our IIT today is facing a lot of problems.Lack of Culture, Lack of mentorship, Lack of platforms for basic things(Leading to Mail Spams),Lack of Alumni interactions,Dying Clubs. More and more people are interested in doing things but they dont know what to do how to do.So we figured out the best action to solve the problems were to getting together the right people with right skills with a right platform to help people and for establishing a culture.<strong>We actually dont believe in getting PORs for showcasing so thats not what we go for.</strong> We try to make it easy for people to access relevant information or the people with the relevant information. So, we decieded this is going to be our vision and mission. 
        </li>
      </ul>
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Vision and Mission</div>
      <ul className='text-md text-[#3B454E]'>
        <li  >
           Our Vision for forming this commitee is to give the students a hands on experience for desiging,developing, managing websites, Apps and Products and establish a development culture in campus. With Giving the Right Mentorship and relevant Resources
          To design,develope,deploy cool Apps, websites and products which are in need for institute, Clubs, Informal associations, Fests.
          </li>
          <br></br>
          <li>
          Our Mission is to make IITH a better place. Like its abbrevation (Inveting and innnovating Technology for humanity) we as a team work tirelessly to make IITH a better place for students . We Want to build things that will be useful for the students of IITH. We want to Share knowledge that will benefit students of IITH. So as a community we move forward and make IITH a better place.
        </li>
      </ul>
      <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Join Our Discord Server</div>
      <div className='text-[#3B454E]'>We use discord as our discussion forum where we mentor and clarify doubts regarding the study projects. And for assigned the SDC projects to the people. </div>
      <a href='https://gymkhana.iith.ac.in/index.html'>

        <div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-[#7289da] m-2 lg:m-4'>
          Join Discord
        </div></a>
      {/* <iframe src={link} title="1" className='w-5/6 h-[50vh] mx-auto lg:h-[120vh]' allow="autoplay"></iframe> */}

    </div>

  )

}

export default Intro