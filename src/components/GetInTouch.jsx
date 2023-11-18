import React from 'react'

export default function GetInTouch() {
  return (
    <div className='w-full h-fit bg-gray-900 p-10 md:p-24 flex justify-between flex-col md:flex-row'>
        <div className='w-fit'>  
            <h2 className='text-4xl text-white text-center md:text-left' style={{ fontFamily: "Exo, sans-serif"}}>Thanks for visiting!</h2>
            <h3 className='text-white py-4'>©2023 Designs by Chatanya Pratap. All right reserved.</h3>
        </div>
        <div className="w-52 m-auto md:m-0 flex justify-around py-9">
            <a href="#" target="_blank"><i className="fab fa-instagram text-white text-4xl"></i></a>
            <a href="#" target="_blank"><i className="fab fa-linkedin text-white text-4xl"></i></a>
            <a href="#" target="_blank"><i className="fab fa-github text-white text-4xl"></i></a>
        </div>
    </div>
  )
}
