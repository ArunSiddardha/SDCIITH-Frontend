import React, { useRef, useState } from "react";
// import Footer from "../components/common/Footer";
import emailjs from "@emailjs/browser";
import {FaDiscord} from 'react-icons/fa'
import {AiFillFacebook,AiFillInstagram,AiFillGithub,} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

function Contact() {
  
  return (
    <>

      <div className="lg:text-4xl text-3xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold ">
        Contact Us
      </div>
      <div className='text-xl lg:text-3xl text-[#3B454E] font-bold mt-5 lg:my-10 lg:mb-8  '>Arun Siddardha (Founder):</div>
      <div className="m-2 md:m-2">
      <strong className="text-lg lg:text-xl  text-[#3B454E]">Mail: </strong>
      <a href="mailto:sdciith@gmail.com?cc=ai20btech11019@iith.ac.in, arunsiddardha19@gmail.com" className="inline text-lg lg:text-xl text-[#3B454E]"><span>ai20btech11019@iith.ac.in</span></a>
      </div>
      <div className="m-2 md:m-2">
      <strong className="text-lg lg:text-xl text-[#3B454E]">Contact: </strong>
      <a href="https://wa.me/918309949805" className="inline text-lg lg:text-xl text-[#3B454E]"><span>+91 8309949805</span></a>
      </div>
      <div className="lg:text-4xl text-3xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold ">
        Join the Community
      </div>
      <div className='flex flex-row h-[10vh] d:h-[20vh] items-center justify-center gap-3 text-[#3B454E] text-[2.3rem] md:text-[3rem] '>
        <FaDiscord className='hover:text-[#7289da]' />
        <AiFillFacebook className='hover:text-[#3b5998]'/>
        <AiFillInstagram className='hover:text-[#FD1D1D]'/>
        <AiFillGithub className='hover:text-black'/>
        <IoLogoWhatsapp className='hover:text-[#25D366]'/>
    </div>
      {/* <a href='https://gymkhana.iith.ac.in/index.html'>

        <div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-[#7289da] m-2 lg:m-4'>
          Join Discord
        </div></a>
        <a href='https://gymkhana.iith.ac.in/index.html'>

        <div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-[#FD1D1D] m-2 lg:m-4'>
          Follow on Instagram
        </div></a>
        <a href='https://gymkhana.iith.ac.in/index.html'>
       

<div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-[#25D366] m-2 lg:m-4'>
  Join Whatsapp Group
</div></a>
<a href='https://gymkhana.iith.ac.in/index.html'>
<div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-[#3b5998] m-2 lg:m-4'>
  Follow on facebook
</div></a>
<a href='https://gymkhana.iith.ac.in/index.html'>
<div className='flex items-center justify-center font-[900] cursor-pointer text-[1.2rem] text-white hover:bg-[#3B454E]  h-[70px] rounded-lg hover:border-2 p-3 md:p-0  hover:border-black bg-black m-2 lg:m-4'>
  Follow on Github
</div></a> */}

    </>
  );
}
export default Contact;
