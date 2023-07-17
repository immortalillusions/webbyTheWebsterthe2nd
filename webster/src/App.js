import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Songs from "./pages/Songs" 
import {Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <div className = 'container'>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/songs" element = {<Songs/>}></Route>
        </Routes>
      </div>
    </>);
}

