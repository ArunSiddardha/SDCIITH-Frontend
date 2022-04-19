import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Header from './components/common/Header';
import Intro from './components/Intro';
import { Link } from 'react-router-dom'
import ProjectsData from './components/ProjectsData';
import Projects from './components/Projects';
function App() {
  const vals = [
    {
      name: "HTMl,CSS,JS",
      projectname: "Basic Responsive Website",
      DriveLink: "/learn/html",
    },
    {
      name: "React",
      projectname: "Basic Responsive Website Using HTML,CSS,JS",
      DriveLink: "/indi/react"
    },
    {
      name: "Flutter",
      projectname: "Instagram Clone Using Flutter",
      DriveLink: "/indi/flutter"
    }

  ]
  return (
    <Router basename='/'>
      <div className='hidden md:flex md:flex-row'>
        <div className='flex-none h-[100vh] '>
          <Header />
        </div >
        <div className='flex-auto no-scrollbar lg:px-16 px-8 h-[100vh] overflow-y-scroll'>
          <Routes>
            <Route path="/" element={<Intro />} />
            {/* <Route path="/learn/website" element={} /> */}
            <Route path="/learn/website/:id" element={<ProjectsData name={vals[0].projectname} DriveLink={vals[0].DriveLink} />} />
          </Routes>
        </div>
        <div className='flex-4 cursor-pointer w-[200px]  lg:min-w-[300px]'>
          <div className='text-center text-[#8899A8] hover:text-black border-y-2 p-4 m-10'>Search</div>
          <Projects vals={vals}  />
        </div>
      </div>
      {/* Mobile version */}
      <div className='block md:hidden '>
          <Header />
        <div className=' md:relative no-scrollbar lg:px-16 px-8 h-[100vh] overflow-y-scroll'>
          <Routes>
            <Route path="/" element={<Intro />} />
            {/* <Route path="/learn/website" element={} /> */}
            <Route path="/learn/website/:id" element={<ProjectsData name={vals[0].projectname} DriveLink={vals[0].DriveLink} />} />
          </Routes>
        </div>
        <div className='hidden cursor-pointer w-[200px]  lg:min-w-[300px]'>
          <div className='text-center text-[#8899A8] hover:text-black border-y-2 p-4 m-10'>Search</div>
          <Projects vals={vals}  />
        </div>
      </div>
    </Router>

  );
}

export default App;
