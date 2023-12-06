import React from 'react'

export default function AboutSkills() {
  return (
    <div className='w-full absolute top-0'>
        <div className='about-skills relative w-4/5 bg-black m-auto mt-24 border-8 border-solid overflow-hidden'>
        {/* animation skills circle */}
            <div className='skills-main-circle relative w-96 h-96 rounded-full border-white border-2' style={{top: '-140px', left: '-140px'}}>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>JavaScript</div>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>HTML</div>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>CSS</div>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>Laravel</div>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>PHP</div>
                <div className='skill-button absolute w-28 h-10 rounded-xl bg-black'>React JS</div>
            </div>
            {/* Another container */}
            <div className='content-skill-main flex flex-col w-4/6 h-full absolute bg-black'>
                <div className='pl-10 w-full h-2/5 text-white'>
                    <h1 className='pt-4 text-xl font-bold'>What I Do</h1>
                    <hr className='mr-10 mb-2'></hr>
                    <div className='ml-4 mr-10 break-words text-sm leading-7'>
                    I specialize in building robust and scalable web applications using the power of PHP and Laravel. My proficiency in crafting
                     responsive and visually appealing user interfaces is fueled by my skills in CSS (Bootstrap and Tailwind), HTML, and JavaScript.
                     Additionally, I bring dynamic interactivity to my projects through the use of React.js, ensuring a modern and engaging user experience.
                    </div>
                    <span></span>
                </div>
                <div className='pl-10 w-full h-3/5 text-white'>
                    <h1 className='pt-4 text-xl font-bold'>Skills</h1>
                    <hr className='mr-10'></hr>
                    <div className='pr-4 pt-4 text-black flex flex-wrap h-4/5 font-bold justify-center overflow-y-auto'>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>HTML</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>CSS</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>JavaScript</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>PHP</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>Laravel</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>React JS</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>AJAX</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>Tailwind</div>
                        <div className='skill-btn m-3 px-4 py-1 bg-white rounded-md'>Bootstrap</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
