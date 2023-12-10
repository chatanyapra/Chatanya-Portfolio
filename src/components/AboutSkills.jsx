import React from 'react'

export default function AboutSkills() {
  return (
    <div className='w-full h-full absolute top-0 overflow-x-hidden'>
        {/* <div className='about-skills relative w-4/5 m-auto mt-2 overflow-hidden rounded-2xl relative bg-black'> */}
        {/* animation skills circle */}
            <div className='skills-main-circle absolute w-96 h-96 rounded-full border-white border-2' style={{top: '-140px', right: '-140px'}}>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>JavaScript</div>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>HTML</div>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>CSS</div>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>Laravel</div>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>PHP</div>
                <div className='absolute w-28 h-10 rounded-xl bg-gray-900 '>React JS</div>
            </div>
            {/* Another container */}
            <div className='content-skill-main relative flex flex-col w-5/6 m-auto flex flex-row lg:flex-col'>
                <div className='pl-10 w-full h-2/5 text-white'>
                    <h1 className='pt-6 text-3xl font-bold'>What I Do</h1>
                    <hr className='mr-10 mb-2'></hr>
                    <div className='pr-4 pt-4 break-words flex text-lg lg:text-xl leading-7 lg:leading-8 h-4/5 overflow-y-auto' style={{ wordSpacing: '5px'}}>
                        I specialize in building robust and scalable web applications using the power of PHP and Laravel. My proficiency in crafting
                        responsive and visually appealing user interfaces is fueled by my skills in CSS (Bootstrap and Tailwind), HTML, and JavaScript.
                        Additionally, I bring dynamic interactivity to my projects through the use of React.js, ensuring a modern and engaging user experience.
                    </div>
                    <span></span>
                </div>
                <div className='pl-10 w-full h-4/5 text-white'>
                    <h1 className='pt-8 text-3xl font-bold'>Skills</h1>
                    <hr className='mr-10'></hr>
                    <div className='buttons-skills pr-4 pt-4 text-black text-center font-bold '>
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
        {/* </div> */}
    </div>
  )
}
