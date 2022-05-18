import React, { useState,useEffect } from 'react'
import Logo from '../../images/brand12.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from '../../css/hamburger.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from '../Projects';
import Logo1 from '../../images/Brand2.png'
import {vals, learndesign,learnapps,webprojects,appprojects,desginprojects} from '../../Data' 
function Links({ name, path }) {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const paths = path.split("/")
  return (
    <Link to={path}><div className={`pb-2 m-1 pt-2 pl-4 ml-3 text-[0.9rem]  ${splitLocation[1] === paths[0] && splitLocation[2] === paths[1] ? "text-white bg-black font-bold rounded-md" : "text-[#5C6975]"}  border-black-600 hover:font-bold  hover:rounded-md hover:text-white hover:bg-black`}>{name}</div></Link>
  )
}
function Header() {
  // const vals = [
  //   {
  //     id:"html",
  //     name: "HTMl,CSS,JS",
  //     link: "/learn/website/html",
  //   },
  //   {
  //     id:"react",
  //     name: "React",
  //     projectname: "React JS",
  //     link: "/learn/website/react"
  //   },
  //   {
  //     id:"git",
  //     name: "Git and Github",
  //     projectname: "Git and Github",
  //     link: "/learn/website/git"
  //   },
  //   {
  //     id:"node",
  //     name: "Node JS",
  //     projectname: "Node JS",
  //     link: "/learn/website/node"
  //   },
  //   {
  //     id:"docker",
  //     name: "Docker",
  //     projectname: "Docker",
  //     link: "/learn/website/docker"
  //   },
  //   {
  //     id:"drf",
  //     name: "Django DRF",
  //     projectname: "Django DRF",
  //     link: "/learn/website/drf"
  //   }

  // ]

  
  const [hamburger, sethamburger] = useState(false);
  const [hamburger2, sethamburger2] = useState(false);
  const location = useLocation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className='hidden lg:block border-r-2 no-scrollbar bg-[#F1F2F5] cursor-pointer h-[100vh] w-[200px] lg:w-[300px] overflow-y-scroll max-w-[300px]'>
        <div className='logo mx-auto w-fit align-center relative top-4 my-4 mb-6 '>
          <Link to="/"><img alt="Students Dev Community" src={Logo} className='w-[140px] lg:w-[210px] inline-block'></img></Link>
        </div>
        <br />
        <div className='  relative pl-4 lg:pl-8'>
          <Link to='/'><div className={`p-2 pl-4 mb-2  ${splitLocation[1] === "" ? "text-white bg-black font-bold rounded-md" : "text-[#56585C]"}  hover:text-white rounded-md hover:text-white hover:bg-black hover:font-bold`}>Introduction</div></Link>
          <hr></hr>
          <div className="p-2 pl-4 text-sm text-[#8899A8]">SDC PROJECTS</div>
          <Links name="Elections Portal" path="sdc/election" />
          <Links name="LCS Forum" path="sdc/lcs" />
          <Links name="Placement Portal" path="sdc/placement" />
          <Links name="10 More Coming soon...." path="#"></Links>
          <hr></hr>
          <div className="pl-4 p-2 mt-2 text-sm text-[#8899A8]">PROJECTS</div>
          <Links name="Design" path="proj/design" />
          <Links name="Web Dev" path="proj/website" />
          <Links name="App dev" path="proj/app" />
          <div className="pl-4 p-2 mt-2 text-sm text-[#8899A8]">LEARNING</div>
          <Links name="Design" path="learn/design" />
          <Links name="Web Dev" path="learn/website" />
          <Links name="App Dev" path="learn/apps" />
          <hr></hr>
          <div className='pl-4 mt-2 p-2 text-sm text-[#8899A8] '>ABOUT</div>
          <Links name="Team Structure" path="about/team" />
          <Links name="Contact" path="about/contact" />
          <hr></hr>
          <div className='pl-4 mt-2 p-2 text-sm text-[#8899A8]'>SUGGESTIONS</div>
          <Links name="Feedback" path="suggest/feedback" />
          <Links name="Ideas" path="suggest/ideas" />
        </div>
        <div className='h-[10vh]'></div>
      </div>
      {/* mobile version */}
      <div className='block lg:hidden bg-[#F5F7F9]'  >
        <div className=' px-8  z-30  flex text-center items-center justify-center border-[#E3E8ED] border-b-2 py-2 top-[9vh] sm:h-[10vh]' >

          <div
            className={
              hamburger
                ? `${style.btn1} ${style.active} z-50 fixed  left-0 `
                : `${style.btn1} ${style.notActive} z-50 fixed  left-0 `
            }
            onClick={() => sethamburger((prev) => !prev)}
          >
            <span className={style.span1}></span>
            <span className={style.span1}></span>
            <span className={style.span1}></span>
          </div>
          <div className='logo mx-auto w-fit content-start justify-start relative top-3  mb-6 '>
          <Link to="/"><img  alt="Students Dev Community" src={Logo1} className='min-w-[150px] w-[70%] sm:w-4/5 max-w-[700px] inline-block'></img></Link>
        </div>
        {(splitLocation[1]==="learn"||splitLocation[1]==="proj")?
          <div
            className={
              hamburger2 
                ? `${style.btn1} ${style.active} z-50 fixed  right-0 `
                : `${style.btn2} ${style.notActive} z-50  fixed  right-10 `
                
            }
            onClick={() => sethamburger2((prev) => !prev)}
            
          >
            <span className={style.span1}></span>
            <span className={style.span1}></span>
            <span className={style.span1}></span>
          </div>
:""}
        </div>
        {hamburger ? (
          <div className=' fixed h-[100vh]  z-30 top-0 bg-[#F5F7F9] overflow-y-scroll w-[80vw]' onClick={() => sethamburger((prev) => !prev)}
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="400">
          <div className='pl-6 relative  top-[10vh] lg:pl-12'>
          <Link to='/'><div className={`p-2 pl-4 mb-2  ${splitLocation[1] === "" ? "text-white bg-black font-bold rounded-md" : "text-[#5C6975]"}  hover:text-black rounded-md hover:text-white hover:bg-black hover:font-bold`}>Introduction</div></Link>
          <hr></hr>
          <div className="p-2 pl-4 text-sm text-[#8899A8]">SDC LAUNCHES</div>
          <Links name="Elections Portal" path="sdc/election" />
          <Links name="LCS Forum" path="sdc/lcs" />
          <Links name="Placement Portal" path="sdc/placement" />
          <hr></hr>
          <div className="pl-4 p-1 mt-2 text-sm text-[#8899A8]">PROJECTS</div>
          <Links name="Design" path="proj/design" />
          <Links name="Web Dev" path="proj/website" />
          <Links name="App Dev" path="proj/apps" />
          <div className="pl-4 p-1 mt-2 text-sm text-[#8899A8]">LEARNING</div>
          <Links name="Design" path="learn/design" />
          <Links name="Web Dev" path="learn/website" />
          <Links name="App Dev" path="learn/apps" />
          <hr></hr>
          <div className='pl-4 mt-2 p-1 text-sm text-[#8899A8] '>ABOUT</div>
          <Links name="Team Structure" path="about/team" />
          <Links name="Contact" path="about/contact" />
          <hr></hr>
          <div className='pl-4 mt-2 p-1 text-sm text-[#8899A8]'>SUGGESTIONS</div>
          <Links name="Feedback" path="suggest/feedback" />
          <Links name="Ideas" path="suggest/Ideas" />
          <div className='h-[10vh]'></div>
        </div>
          </div>
        ) : (
          ""
        )}
        {hamburger2? (
          <div className='fixed top-0 z-30 bg-[#F5F7F9] overflow-y-scroll w-[80vw] h-[100vh] m-0 right-0' onClick={() => sethamburger2((prev) => !prev)}
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-duration="4000">
          <div className='relative top-[3vh]'>
          <Projects vals={vals} learnapps={learnapps} learndesign={learndesign} webprojects={webprojects} approjects={appprojects} designprojects={desginprojects} />
          </div>
          </div>
        ) : (
          ""
        )}
        {/* <div className=''>
        <Link to='/'><div className={`p-2 pl-4 mb-2  ${splitLocation[1]===""?"text-white bg-black font-bold rounded-md":"text-[#5C6975]"}  hover:text-black rounded-md hover:text-white hover:bg-black hover:font-bold`}>Introduction</div></Link>
            <hr></hr>
            <div className="p-2 pl-4 text-sm text-[#8899A8]">SDC LAUNCHES</div>
            <Links name="Elections Portal" path="sdc/election"/>
            <Links name="LCS Forum" path="sdc/lcs"/>
            <Links name="Placement Portal" path="sdc/placement"/>
            <hr></hr>
            <div className="pl-4 p-1 mt-2 text-sm text-[#8899A8]">PROJECTS</div>
            <Links name="Design" path="proj/design"/>
            <Links name="Website" path="proj/website"/>
            <Links name="Apps" path="proj/app"/>
            <div className="pl-4 p-1 mt-2 text-sm text-[#8899A8]">LEARNING</div>
            <Links name="Design" path="learn/design"/>
            <Links name="Website" path="learn/website"/>
            <Links name="Apps" path="leanr/apps"/>
            <hr></hr>
            <div className='pl-4 mt-2 p-1 text-sm text-[#8899A8] '>ABOUT</div>
            <Links name="Team" path="about/team"/>
            <Links name="Contact" path="about/contact"/>
            <hr></hr>
            <div className='pl-4 mt-2 p-1 text-sm text-[#8899A8]'>SUGGESTIONS</div>
            <Links name="Feedback" path="suggest/feedback"/>
            <Links name="Complaints" path="suggest/complaints"/>
        </div> */}
      </div>

    </>
  )
}

export default Header