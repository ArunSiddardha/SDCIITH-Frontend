import React,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
function Feedback() {
  const form = useRef();
  const [name, statehandler1] = useState("");
  const [msg, statehandler5] = useState("");
  const [num, statehandler3] = useState("");
  const [rel, statehandler4] = useState("");
  const [email, statehandler2] = useState("");
  const [relation, statehandler6] = useState("");
  const sendEmail = (e) => {
    console.log(rel)
    e.preventDefault();
      emailjs
      .sendForm(
        "service_wx72olf",
        "template_lt2s47s",
        form.current,
        "iZ55eDdu4Xk_wH12P"
      )
      .then(
        (result) => {
          statehandler2("");
          statehandler1("");
          statehandler3("");
          statehandler4("");
          statehandler5("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };
  return (
    <>
      <div className="hidden md:block ">
       <div className="h-screen items-center ">
       <div className=" lg:text-5xl text-2xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold ">
            Feedback
          </div>
          As we are a growing community we are highly open to Feedback.
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`w-full container px-5 mx-auto grid grid-cols-8 h-[50vh] mt-4 grid-flow-row auto-rows-max gap-2 text-black grid-rows-5`}
          >
            
           
            <input
              className="col-span-8 row-span-1 rounded-lg p-2 bg-[#F1F2F5]"
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={(e) => statehandler1(e.target.value)} 
              required
            />
            <input
              className="col-span-4 row-span-1 rounded-lg p-2 bg-[#F1F2F5]"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => statehandler2(e.target.value)}
              required
            />
            <input
              className="col-span-4 row-span-1 rounded-lg p-2 bg-[#F1F2F5]"
              type="text"
              value={num}
              name="num"
              placeholder="Roll Number"
              onChange={(e) => statehandler3(e.target.value)}
              required
            />
              <input className="col-span-8 row-span-1 border p-2  rounded-lg  bg-[#F1F2F5]" 
              value={rel} 
              name="Phn" 
              placeholder="Phone Number"
              onChange={(e) => statehandler4(e.target.value)} />
        
            <textarea
              className="col-span-8 row-span-4 rounded-lg p-2 bg-[#F1F2F5] resize-none"
              value={msg}
              placeholder="Your FeedBack"
              onChange={(e) => statehandler5(e.target.value)}
              name="msg"
              required
              />
            <div className="flex mt-2  col-span-8 justify-start  mx-auto w-full">
              <button
                type="submit"
                className="text-xl text-white bg-[#3B454E] text-md  p-2 px-4  rounded-lg justify-start"
              >
                Submit
              </button>
            </div>
          </form>
          </div>
      </div>

      {/* {mobile part begins} */}
      <div className="block md:hidden">
       
          <div className="lg:text-5xl text-2xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold ">
            CONTACT US
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`grid grid-cols-1 w-full text-xs container p-1  mx-auto gap-2 text-black h-[60vh] grid-rows-10 rounded-xl  bg-white`}
          >
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 text-[1rem] bg-[#F1F2F5]"
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={(e) => statehandler1(e.target.value)}
              required
            />
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 text-[1rem] bg-[#F1F2F5]"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => statehandler2(e.target.value)}
              required
            />
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 text-[1rem] bg-[#F1F2F5]"
              type="text"
              value={num}
              name="num"
              placeholder="Roll Number"
              onChange={(e) => statehandler3(e.target.value)}
              required
            />
          
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 text-[1rem] bg-[#F1F2F5]"
              type="text"
              value={rel}
              name="rel"
              placeholder="Phone number"
              onChange={(e) => statehandler4(e.target.value)}
            />
            <textarea
              className="col-span-2 row-span-6  rounded-lg p-2 text-[1rem] bg-[#F1F2F5] resize-none"
              name="msg"
              placeholder="Your Feedback"
              value={msg}
              onChange={(e) => statehandler5(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-xl text-white font-bold col-span-2 text-[1rem]  bg-[#3B454E] rounded-lg font-heading p-2 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
     </>
  );
}

export default Feedback