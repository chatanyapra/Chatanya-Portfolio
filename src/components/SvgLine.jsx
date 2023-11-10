import React from 'react'
import './SvgLines.css'
import { useEffect, useRef } from 'react';

export default function SvgLine() {
  //   const svgRef = useRef(null);
  // const pathRef = useRef(null);

  // useEffect(() => {
  //   const svg = svgRef.current;
  //   const path = pathRef.current;

  //   const scroll = () => {
  //     const distance = (window.scrollY);
  //     const totalDistance = svg.clientHeight - window.innerHeight;
  //     const percentage = distance / totalDistance;
  //     console.log(percentage);
  //     const pathLength = path.getTotalLength();

  //     path.style.strokeDasharray = `${pathLength}`;
  //     path.style.strokeDashoffset = `${pathLength * (1 - percentage) }`;
  //   };

  //   scroll();
  //   window.addEventListener('scroll', scroll);

  //   return () => {
  //     window.removeEventListener('scroll', scroll);
  //   };
  // }, []);

  return (
    <div className='container'>
      {/* <svg className='sqiggle' ref={svgRef} width="466" height="2490" viewBox="25 0 556 2490" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='path-svg' ref={pathRef} d="M1.5 8.49997C254.5 -15.5 770.29 455 441.5 455C260.5 455 62.361 298 62.361 473V2490" stroke="url(#paint0_linear_547_4)" strokeWidth="15"/>
        <defs>
          <linearGradient id="paint0_linear_547_4" x1="302" y1="-12" x2="302" y2="2490" gradientUnits="userSpaceOnUse">
          <stop offset="0.118076" stopColor="#F3B532" stopOpacity="1"/>
          <stop offset="0.326568" stopColor="#D7BF6C"/>
          <stop offset="0.59638" stopColor="#F3B532" stopOpacity="0.979811"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg> */}
    </div>
  )
}




