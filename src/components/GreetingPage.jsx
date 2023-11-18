import { useEffect, useRef, useState } from 'react';
import Mainimage from '../assets/robot-background-image (1).png'
import './GreetingPage.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Lottie from 'lottie-react'
import robotAnimation from '../assets/Animation-robot.json'

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

  useEffect(() => {
    const boxContainer= box2Container.current;
    const boxDist= boxContainer.getBoundingClientRect();
    const handleScroll = () => {

      setScrollPosition(()=>{
        if (window.scrollY <= 700) {
          return window.scrollY;
        }
        else{
          return 700;
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
    transition: 'transform 0.5s ease-out', right: `${-1026}px`
  };
  const gearBox={
    transform: `rotate(${scrollPosition * 0.3}deg)`
  };
  return (
    <div style={{minHeight: '1510px'}} className='greetingBox overflow-y-scroll md:overflow-y-hidden w-full bg-gray-900 relative'>
      <div className='image-main flex space-around'>
          <div className="image-robot-container">
            <Lottie className='robot-anim' animationData={robotAnimation} loop={false} />
          </div>
          <div className='user-name text-left text-4xl text-gray-50 font-mono z-10' style={{ fontFamily: "Exo, sans-serif"}}><span className='text-6xl'>Hi,</span><br/>
                <span>I am {' '} {text}</span>
                <Cursor cursorColor='white' cursorStyle= {symbol} />
          </div>
      </div>
      <div ref={box2Container} className="box2-container overflow-hidden absolute w-full bg-gray-900" style={{minHeight: '900px', top: '650px'}}>
          <div className='aboutme-box text-white rounded-2xl relative backdrop-opacity-5 z-10 backdrop-invert bg-black/50 py-7 overflow-x-hidden'>
            <i style={gearBox} className="gear-icon absolute fa-solid fa-gear"></i>
            <h1 className='text-2xl md:text-3xl mx-12 my-6' style={{ fontFamily: "Exo, sans-serif"}}>About me</h1>
            <div className='line-main absolute bg-teal-300'>
              <div className='scanner relative bg-white'></div>
            </div>
            <div className='m-auto text-lg md:text-xl w-10/12'>
              Hello, I'm Chatanya Pratap, a passionate and versatile web developer with expertise in a diverse range of technologies. With a foundation built on HTML, CSS, and JavaScript, I navigate seamlessly across the realms of Laravel, PHP, and React.js, breathing life into innovative and user-centric web applications.
            </div>
            <h1 className='text-xl md:text-2xl mx-12 mt-10 mb-4'  style={{ fontFamily: "Exo, sans-serif"}}>What Sets Me Apart</h1>
            <div className='m-auto text-lg md:text-xl w-10/12'>
              <b>Innovative Solutions: </b>I approach challenges with a mindset that values innovation. Each project is an opportunity to create something unique and impactful, and I thrive on pushing the boundaries of what's possible.  
            </div>
            <div className='m-auto text-lg md:text-xl pt-5 w-10/12'>
              <b>Continuous Learning: </b> The ever-evolving nature of technology inspires me to stay abreast of the latest trends and advancements. A commitment to lifelong learning ensures that my skills remain cutting-edge.            </div>
            </div>
        <img className='image-robot' style={imageStyle} ref={ImageMove} src={Mainimage} alt="..." />
      </div>
    </div>
  )
}