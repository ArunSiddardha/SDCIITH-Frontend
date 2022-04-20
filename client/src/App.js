import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import Header from './components/common/Header';
import Intro from './Pages/Intro';
import { Link } from 'react-router-dom'
import ProjectsData from './components/ProjectsData';
import Projects from './components/Projects';
import ElectionsPortal from './Pages/SDCLaunces/ElectionsPortal';
import LCSForum from './Pages/SDCLaunces/LCSForum';
import PlacementPortal from './Pages/SDCLaunces/PlacementPortal';
import Team from './Pages/About/Team';
import Contact from './Pages/About/Contact';
import Feedback from './Pages/Suggestions/Feedback';
import Suggestions from './Pages/Suggestions/Suggestions';
import About from './Pages/About/About';
import Suggest from './Pages/Suggestions/Suggest';
import Design from './Pages/Learn/Design';
import Website from './Pages/Learn/Website';
import Learn from './Pages/Learn/Learn';
import Apps from './Pages/Learn/Apps';
import Proj from './Pages/Projects/Proj';
import Design1 from './Pages/Projects/Design';
import Website1 from './Pages/Projects/Website';
import Apps1 from './Pages/Projects/Apps';
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
  const vals1 = [
    {
      name: "HTMl,CSS,J",
      projectname: "Basic Responsive Website",
      DriveLink: "/learn/html",
    },
    {
      name: "Reac",
      projectname: "Basic Responsive Website Using HTML,CSS,JS",
      DriveLink: "/indi/react"
    },
    {
      name: "Flutte",
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
            <Route index element={<Intro />} />
            <Route path="learn" element={<Learn/>}>
              <Route path="design" element={<Design/>}/>
              <Route path="website" element={<Website/>}/>
              <Route path="apps" element={<Apps/>}/>
              <Route path="design/:id" element={<ProjectsData data={vals} />} />
              <Route path="website/:id" element={<ProjectsData data={vals} />} />
              <Route path="app/:id" element={<ProjectsData data={vals} />} />
            </Route>
            <Route path="proj" element={<Proj />}>
            <Route path="design" element={<Design1/>}/>
              <Route path="website" element={<Website1/>}/>
              <Route path="app" element={<Apps1/>}/>
              <Route path="design/:id" element={<ProjectsData data={vals} />} />
              <Route path="website/:id" element={<ProjectsData data={vals} />} />
              <Route path="app/:id" element={<ProjectsData data={vals} />}/>
            </Route>
            <Route path="sdc" element={<Navigate to="/sdc/elections"/>}>
              <Route path="election" element={<ElectionsPortal/>} />
              <Route path="lcs" element={<LCSForum/>} />
              <Route path="placement" element={<PlacementPortal/>} />
            </Route>
            <Route path="about" element={<About/>}>
              <Route path="team" element={<Team/>} />
              <Route path="contact" element={<Contact/>} />
            </Route>
            <Route path="suggest" element={<Suggest />}>
              <Route path="feedback" element={<Feedback/>} />
              <Route path="suggestions" element={<Suggestions/>} />
            </Route>
            <Route path="*" element={<Team/>}/>
          </Routes>
        </div>


        <div className='flex-4 cursor-pointer w-[200px] h-[100vh] overflow-y-scroll no-scrollbar  lg:min-w-[300px]'>
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
          <Projects vals={vals} vals1={vals1}  />
        </div>
      </div>
    </Router>

  );
}

export default App;
