
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,

} from "react-router-dom";
import Header from './components/common/Header';
import Intro from './Pages/Intro';
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
import {vals,learnapps, learndesign,webprojects,appprojects,desginprojects} from './Data' 
import SDC from './Pages/SDCLaunces/SDC';
import Sidebar from './components/common/Sidebar';
function App() {
  
  let item = ( <Routes>
    <Route index element={<Intro />} />
    <Route path="learn" element={<Learn/>}>
      <Route path="design" element={<Design/>}/>
      <Route path="website" element={<Website/>}/>
      <Route path="apps" element={<Apps/>}/>
      <Route path="design/:id" element={<ProjectsData data={learndesign} />} />
      <Route path="website/:id" element={<ProjectsData data={vals} />} />
      <Route path="apps/:id" element={<ProjectsData data={learnapps} />} />
    </Route>
    <Route path="proj" element={<Proj />}>
    <Route path="design" element={<Design1/>}/>
      <Route path="website" element={<Website1/>}/>
      <Route path="app" element={<Apps1/>}/>
      <Route path="design/:id" element={<ProjectsData data={desginprojects} />} />
      <Route path="website/:id" element={<ProjectsData data={webprojects} />} />
      <Route path="apps/:id" element={<ProjectsData data={appprojects} />}/>
    </Route>
    <Route path="sdc" element={<SDC/>}>
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
      <Route path="ideas" element={<Suggestions/>} />
    </Route>
    <Route path="*" element={<Team/>}/>
  </Routes>
  )
  return (
    <Router basename='/'>
      <div className='hidden lg:flex lg:flex-row'>
        <div className='flex-none h-[100vh] '>
          <Header />

        </div >

        <div className='flex-auto no-scrollbar lg:px-16 px-8 h-[100vh] overflow-y-scroll'>
          {item}
          <div>
            <Sidebar/>
          </div>
        </div>


        <div className='flex-4 border-l-2 cursor-pointer w-[300px] h-[100vh] overflow-y-scroll no-scrollbar  lg:min-w-[300px]'>
        <Projects vals={vals} learnapps={learnapps} learndesign={learndesign} webprojects={webprojects} approjects={appprojects} designprojects={desginprojects} />
        </div>
      </div >



      {/* Mobile version */}
      <div className='block lg:hidden '>
          <Header />
        <div className=' md:relative no-scrollbar lg:px-16 px-8 h-[100vh] overflow-y-scroll'>
         {item}
         <Sidebar/>
        </div>
      </div>
    </Router>

  );
}

export default App;
