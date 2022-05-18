import React from 'react'

function Apps() {
  return (
    <>
    <div className='lg:text-4xl text-3xl border-b-4  text-[#3B454E] h-fit cursor-pointer py-5 mb-5 mt-2 md:my-5 font-bold'>App developing</div>
    <ul className='text-md md:text-lg text-[#3B454E] mb-5 text-[#3B454E]'>
        <li >
        There are basically three broad categories in which apps can be divided.

        <ul className='text-md md:text-lg text-[#3B454E] list-disc m-4 text-[#3B454E]'>
      <li>Native Apps</li>
      <li>Hybrid Apps</li>
      <li>Web Apps</li>
    </ul>

We'll be focussing mainly on the first two types(Native and Hybrid). For developing Web Apps, you'll need some knowledge of Web Dev too. So, we'll come back to it later if we have time.Or u can research about it if u know web dev

         </li>
    </ul>
    <div  className='text-md md:text-lg text-[#3B454E]'>So we will bascially focus on these stacks</div>
    <ul className='text-md md:text-lg text-[#3B454E] list-disc m-4 text-[#3B454E]'>
      <li>Android (native)</li>
      <li>Flutter (Hybrid)</li>
      <li>React Native (Hybrid)</li>
    </ul>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Andriod (Java) </div>
    <div className='text-md md:text-lg text-[#3B454E]'>
   This is most vast, most popular, most harderst way of building the apps. Here we use native java to build apps for the andoird applications . But apps built with this  only work for Android and u have to learn a lot for mastering in android dev in java. But the plus part is that u will defnitely get a job if u learn this. And you can find plenty of projects regarding it .
    </div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>Flutter</div>
    <div className='text-md md:text-lg text-[#3B454E]'>
   This is the latest, not the harderst nor the easiest way of building the apps. It is used to build cross platform apps that is u can write code once and run it in everywhere i mean everywhere like desktop, IOS, Android , web etc.Here we will use dart as our programming language. We will be using this mostly to build our apps. i recommend everyone to learn this and follow the videos and the resources we have given.Here we use Firestore as our databsae while developing the flutter apps mostly which u will learn in if u follow the resources.
    </div>
    <div className='text-2xl lg:text-3xl text-[#3B454E] font-bold my-5'>React Native</div>
    <div className='text-md md:text-lg text-[#3B454E]'>
   This is the perhaps the most easiest way of building the apps. It is used to build cross platform apps that is also similar to flutter we can write code once and run it in everywhere  like on desktop, IOS, Android , web etc. And here we use the backend as NodeJS mostly and it is similar the language is pretty similar  to react so if u know react then learning this is a piece of cake for u. U can use the same tech stack as react and build the apps with that using react native instead of react .And it has much low performance than native apps and flutter. So for high functionality apps we dont recommened using this.
    </div>
    </>
  )
}

export default Apps