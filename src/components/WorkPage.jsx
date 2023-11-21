import React from 'react'

export default function WorkPage() {
  const languageUsed = event => {
    event.currentTarget.nextElementSibling.classList.toggle('techBoxFull');
  }
  return (
      <div className="card-container backdrop-invert bg-black/50 backdrop-opacity-5 my-20 relative top-0">
        <a href="/" className="hero-image-container">
          <img className="hero-image" src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg" alt="Spinning glass cube"/>
        </a>
        <main className="main-content">
          <h1 className='projectname py-5 text-xl'>Project Name</h1>
          <p className='text-sm'>Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex-row text-blue-500  text-sm pt-4">Link-
            <a className='text-blue-500' href='#'> click here...</a>
          </div>
        </main>
          <span className='button-color h-15 absolute right-0 bottom-0 z-20' onClick={languageUsed}><button className='info-button'>Tech used</button></span>
          <div className='technology-box overflow-hidden bg-fixed bg-cover absolute right-0 bottom-0 p-6'>
            <h2 className='text-xl mb-2'>About</h2>
            <p className='text-sm'>AA jjlkjkjnjjknj jccaa aaajnkjk  dsjfjsdfJJJIOJOJ E JORIJEWIEJRIOOWEIOl</p>
            <h2 className='text-xl mt-3 mb-2'>Languages</h2>
            <p className='text-sm'>JORIJEWIEJRIOOWEIOl</p>
            <p className='text-sm'>JORIJEWIEJRIOOWEIOl</p>
            <p className='text-sm'>JORIJEWIEJRIOOWEIOl</p>
            <p className='text-sm'>JORIJEWIEJRIOOWEIOl</p>
          </div>
      </div>
  )
}
