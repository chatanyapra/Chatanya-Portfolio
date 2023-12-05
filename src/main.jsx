import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar'
import { Router, BrowserRouter,  Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='web-container h-screen'>
      <BrowserRouter>  
      <Navbar></Navbar>
      {/* <App/> */}
        <Routes>
            <Route
              exact
              path="/about"
              element={<AboutMe/>}></Route>
            <Route
              exact
              path="/"
              element={<App/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
)
