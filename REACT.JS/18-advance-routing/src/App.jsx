import Nabvar from "./components/Nabvar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Men from "./pages/Men"
import Woman from "./pages/Woman"
import Kids from './pages/Kids'
import Cours from "./pages/Cours"
import CoursesDetails from "./pages/CoursesDetails"
import { Routes, Route } from "react-router-dom";
import Nave2 from "./components/Nave2"


const App = () => {
  return (
    <div className=" h-screen bg-black text-white " >
      <Nabvar/>
      
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route path='/cours' element={<Cours/>} />
        <Route path="/cours/:courseId" element={<CoursesDetails/>} />
        
        <Route  path='/about' element={<About/>}>
          <Route path='men' element={<Men/>} />
          <Route path='woman' element={<Woman/>} />
          <Route path='kids' element={<Kids/>} />
        </Route>
      
        <Route  path='*' element={<Notfound/>}  />
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App