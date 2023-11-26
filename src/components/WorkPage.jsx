import React from 'react'

export default function WorkPage(props) {
  const languageUsed = event => {
    event.currentTarget.nextElementSibling.classList.toggle('techBoxFull');
  }
  const lang= props.language;
  return (
      <div className="card-container backdrop-invert bg-black/50 backdrop-opacity-5 my-20 relative top-0">
        <a href={props.link} className="hero-image-container">
          <img className="hero-image w-full h-full relative" src={props.src} alt="Spinning glass cube"/>
        </a>
        <main className="main-content relative">
          <h1 className='projectname py-5 text-xl'>{props.name ? props.name : 'Project Name'}</h1>
          <p className='text-sm'>{props.desc}</p>
          <div className="flex-row text-blue-500 text-sm pt-4">Link-
            <a className='text-blue-500' href={props.link}> click here to open</a>
          </div>
        </main>
          <span className='button-color h-15 absolute right-0 bottom-0 z-20' onClick={languageUsed}><button className='info-button'>Tech used</button></span>
          <div className='technology-box overflow-hidden bg-fixed bg-cover absolute right-0 bottom-0 p-6'>
            <h2 className='text-xl mb-2'>About</h2>
            <p className='text-sm'>{props.about}</p>
            <h2 className='text-xl mt-3 mb-2'>Languages</h2>
            {lang && lang.map((item) => (
              <p className='text-sm' key={item}>{item}</p>
            ))}
          </div>
      </div>
  )
}
