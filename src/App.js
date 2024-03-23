import './App.css';
import NaveBar1 from './NaveBar1';
import Sidbar from './Sidbar';
import Home from './Home';
import Certificate from './Certificate';
import About from './About'
import Project from './Project';
import Contact from './Contact';
import More from './More';

import {BrowserRouter , Routes , Route, Outlet} from 'react-router-dom';
import Footer from './Footer';
import Commit from './Commit';

function Page(){

  return (
      <div>
          <div><NaveBar1/></div>
          <div>
              <Outlet/>
          </div>
          <div className="forth"><Footer /></div>
          
      </div>
      
  )
}

function App() {
  return (
    // <div className="">
    //   <NavBar/>
    //   <Sidbar/>
    // </div>
    <>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page/>}>
              <Route path='home' element = {<Home/>}/>
              <Route path='commit' element={<Commit/>}/>
              <Route path='certificate' element={<Certificate/>}/>
              <Route path='project' element={<Project/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='more' element={<More/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
