import React from 'react'

function Website() {
  return (
    <>
    <div className='lg:text-4xl text-3xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold'>Web developing</div>
    <ul className='text-md md:text-lg text-[#3B454E] mb-5 text-[#3B454E]'>
        <li >
           There are 4 important things to learn while developing websites those are 
         </li>
    </ul>
    <ul className='text-md md:text-lg text-[#3B454E] list-disc m-4 text-[#3B454E]'>
      <li>Front End</li>
      <li>Back End</li>
      <li>Databases</li>
      <li>Hosting</li>
    </ul>
    <hr/>
    <br></br>
    <div className='text-md md:text-lg text-[#3B454E] '>
    Ahead of everything i recommend u to learn about the basics of the internet. You dont need to spend lot of time in it but I just want you to know about the basics like domains,DNSs,servers,how internet works etc.
    </div>
    <br></br>
    <div className='text-md md:text-lg text-[#3B454E]'>Resources for the same can be found it <a className='inline text-green-600' href="">here</a></div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Frontend</div>
    <div className='text-md md:text-lg text-[#3B454E]'>The front end of a website is everything the user either sees or interacts with when they visit the website. It is responsible for the total look and feel of an online experience.<br></br><br></br>
    <strong>Tech Stack:</strong> HTML,CSS,JS . These are basic things you have to learn for develping a frontend of the website initially.<br></br><br></br>
    Then after learning those you can take a further step and learn React or vue or Angular which are  libraries and frameworks of Javascript which are used to build powerful UIs faster.They is scalable, simple and fast. My suggestion is to use react as that will be used for most of our SDC projects and react is most popular and it has a high developer community. If you are interested in another technologies resources will be shared soon .
    </div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Backend</div>
    <div className='text-md md:text-lg text-[#3B454E]'>It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers.<br></br><br></br>
    <strong>Tech Stack:</strong> NodeJS, Golang ,Django DRF. We will be focusing mainly on these tech stacks as the backend . My sugesstion is if you want to start learning with golang first check NodeJS document and then go with learing golang.And for Django  DjangoDRF i have provided u with the resources<br></br><br></br>
    </div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Databases</div>
    <div className='text-md md:text-lg text-[#3B454E]'>
    In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage. And there are variety of databases to learn about but here we will stick to most famous and most used ones which are MongoDB and PostreSQL. Resources for the postgres SQL will come soon and for MongoDB we have given it along with NodeJS. As they get handy . We use NodeJS with MongoDB And Django with Sql these are most used in the current tech stacks. Its not mandatory but we prefer these things.
    </div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Hosting</div>
    <div className='text-md md:text-lg text-[#3B454E]'> And the final part after building a website is hosting and u can use docker to ease your process check the docker explanation page in the docker resources. And for hosting websites the basics of hosting are pretty well documented. You can go through them from given resources</div>
  
    
    </>
  )
}

export default Website