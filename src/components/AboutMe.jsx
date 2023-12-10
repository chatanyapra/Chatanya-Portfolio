import React from "react";
import { useEffect, useRef, useState } from 'react';
import Mainimage from '../assets/robot-background-image (1).png'


export default function AboutMe() {
  
    const ImageMove= useRef(null);
    const box2Container= useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    // const screenWidth= window.innerWidth;
  
    useEffect(() => {
      const handleScroll = () => {
  
        setScrollPosition(()=>{
           if (window.scrollY <= 720) {
            return window.scrollY;
          }
          else{
            return 720;
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const imageStyle = {
      transform: `translateX(-${(scrollPosition)*.201}%) scaleX(-1)`,
      transition: 'transform 0.5s ease-out'
    };
    const gearBox={
      transform: `rotate(${scrollPosition * 0.3}deg)`
    };
  return (
    <div
      ref={box2Container}
      className="box2-container overflow-hidden relative w-full bg-gray-900" style={{ minHeight: "900px", top: "650px" }}>
      <div className={"aboutme-box text-white rounded-2xl relative py-7 overflow-x-hidden z-10 backdrop-opacity-5 backdrop-invert bg-black/50"}>
        <i style={gearBox} className="gear-icon absolute fa-solid fa-gear"></i>
        <h1
          className="text-2xl md:text-3xl mx-12 my-6"
          style={{ fontFamily: "Exo, sans-serif" }}
        >
          About me
        </h1>
        <div className="line-main absolute bg-teal-300">
          <div className="scanner relative bg-white"></div>
        </div>
        <div className="m-auto text-lg md:text-xl w-10/12">
          Hello, I'm Chatanya Pratap, a passionate and versatile web developer
          with expertise in a diverse range of technologies. With a foundation
          built on HTML, CSS, and JavaScript, I navigate seamlessly across the
          realms of Laravel, PHP, and React.js, breathing life into innovative
          and user-centric web applications.
        </div>
        <h1
          className="text-xl md:text-2xl mx-12 mt-10 mb-4"
          style={{ fontFamily: "Exo, sans-serif" }}
        >
          What Sets Me Apart
        </h1>
        <div className="m-auto text-lg md:text-xl w-10/12">
          <b>Innovative Solutions: </b>I approach challenges with a mindset that
          values innovation. Each project is an opportunity to create something
          unique and impactful, and I thrive on pushing the boundaries of what's
          possible.
        </div>
        <div className="m-auto text-lg md:text-xl pt-5 w-10/12">
          <b>Continuous Learning: </b> The ever-evolving nature of technology
          inspires me to stay abreast of the latest trends and advancements. A
          commitment to lifelong learning ensures that my skills remain
          cutting-edge.
        </div>
      </div>
      <img
        className="image-robot"
        style={imageStyle}
        ref={ImageMove}
        src={Mainimage}
        alt="..."
      />
    </div>
  );
}
