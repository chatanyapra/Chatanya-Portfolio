import { useEffect, useRef, useState } from 'react';
import Mainimage from '../assets/robot-background-image (1).png'
import './GreetingPage.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Lottie from 'lottie-react'
import robotAnimation from '../assets/Animation-robot.json'
import { Parallax } from '@react-spring/parallax'

export default function GreetingPage() {
  const symbol= <span style={{fontSize: '50px'}}>&#9615;</span> ;
  const [text] = useTypewriter({
    words: [' Chatanya Pratap.' ,'a passionate web developer.', 'a fullstack web developer.'],
    loop: {},
    deleteSpeed: 100,
    typeSpeed: 80,
    delaySpeed: 2000
  })

  const ImageMove= useRef(null);
  const box2Container= useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const boxContainer= box2Container.current;
    const boxDist= boxContainer.getBoundingClientRect();
    console.log(boxDist.top );
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
    transform: `translateX(-${scrollPosition}px) scaleX(-1)`,
    transition: 'transform 0.5s ease-out',
  };
  return (
    <div style={{height: '2500px'}}>
      <div className='image-main flex space-around bg-gray-900'>
          <div className="image-robot-container">
            <Lottie className='robot-anim' animationData={robotAnimation} loop={true} />
          </div>
          <div className='user-name overflow-hidden text-left text-4xl text-gray-50 font-mono z-10'><span className='text-6xl'>Hi,</span><br/>
                <span className=''>I am {' '} {text}</span>
                <Cursor cursorColor='white' cursorStyle= {symbol} />
          </div>
      </div>
      <div ref={box2Container} className="box2-container overflow-hidden absolute w-full bg-gray-900" style={{height: '750px', top: '760px'}}>
        <img className='image-robot' style={imageStyle} ref={ImageMove} src={Mainimage} alt="" />
      </div>
    </div>
  )
}