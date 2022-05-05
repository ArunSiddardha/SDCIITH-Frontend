import React, { useRef, useState } from "react";
// import Footer from "../components/common/Footer";
import emailjs from "@emailjs/browser";


function Contact() {
  // const form = useRef();
  // const [name, statehandler1] = useState("");
  // const [msg, statehandler5] = useState("");
  // const [num, statehandler3] = useState("");
  // const [rel, statehandler4] = useState("");
  // const [email, statehandler2] = useState("");
  // const [relation, statehandler6] = useState("");
  // const sendEmail = (e) => {
  //   console.log(rel)
  //   e.preventDefault();
  //     emailjs
  //     .sendForm(
  //       "service_wx72olf",
  //       "template_lt2s47s",
  //       form.current,
  //       "iZ55eDdu4Xk_wH12P"
  //     )
  //     .then(
  //       (result) => {
  //         statehandler2("");
  //         statehandler1("");
  //         statehandler3("");
  //         statehandler4("");
  //         statehandler5("");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

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
      <a href="https://wa.me/918309940805" className="inline text-lg lg:text-xl text-[#3B454E]"><span>+91 8309949805</span></a>
      </div>
      <div className="lg:text-4xl text-3xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold ">
        Join the Community
      </div>
      <a href='https://gymkhana.iith.ac.in/index.html'>

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
</div></a>

    </>
  );
}
export default Contact;
