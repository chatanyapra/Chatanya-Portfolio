import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react'
import robotAnimation from '../assets/Animation-robot.json'
import AboutMe from './AboutMe';

export default function GreetingPage() {
  const symbol= <span style={{fontSize: '50px'}}>&#9615;</span> ;
  const [text] = useTypewriter({
    words: [' Chatanya Pratap.' ,'a passionate web developer.', 'a fullstack web developer.'],
    loop: {},
    deleteSpeed: 100,
    typeSpeed: 80,
    delaySpeed: 2000
  })
  const [isMobile, setIsMobile]= useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []); 

  return (
    <div style={{minHeight: '1510px'}} className='greetingBox overflow-y-scroll md:overflow-y-hidden w-full bg-gray-900 relative'>
      <div className='image-main flex space-around'>
          <div className="image-robot-container">
            <Lottie className='robot-anim' animationData={robotAnimation} loop={isMobile ? false : true} />
          </div>
          <div className='user-name text-left text-4xl text-gray-50 font-mono z-10' style={{ fontFamily: "Exo, sans-serif"}}><span className='text-6xl'>Hi,</span><br/>
                <span>I am {' '} {text}</span>
                <Cursor cursorColor='white' cursorStyle= {symbol} />
          </div>
      </div>
      
      <AboutMe></AboutMe>
    </div>
  )
} 