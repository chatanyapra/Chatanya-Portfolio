import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar-main w-screen bg-gray-900 h-16 text-white flex justify-between z-10'>
      <div className='navbar_logo w-40 h-full relative text-center pt-4'>Navbar <div className="triangle"></div></div>
      <div className='navbtns mr-5 flex justify-between '>
        <button className='nav-btn mx-4 my-auto'>Hover me</button>
        <button className='nav-btn mx-4 my-auto'>Hover me</button>
        <button className='nav-btn mx-4 my-auto'>Hover me</button>
      </div>
    </div>
  )
}
