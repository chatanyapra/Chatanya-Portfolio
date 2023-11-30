import UserImage from '../assets/my-image.jpg'
import UserLogo from '../assets/portfolioLogo.png'

export default function Navbar() {

    const handleCheckboxClick = () => {
      var sideNavbar= document.querySelector('.sidenavbar');
      var overLayBox= document.querySelector('.overLayBox');
      var checkboxNavbur= document.querySelector('#checkboxNavbur');
      sideNavbar.classList.toggle('sidenavbarToggle');
      overLayBox.classList.toggle('overLayBoxToggle');
      checkboxNavbur.classList.toggle('checkboxNavburChecked');
    };
  return (
    <>
      <div className='navbar-main w-full bg-gray-900 h-16 text-white flex justify-between z-20'>
        <div className='navbar_logo w-40 h-full relative text-center'><img src={UserLogo} style={{marginTop: '-23px'}} className='ml-2 w-36 h-28'/> <div className="triangle"></div></div>
        <div className='navbtns mr-5 hidden justify-between md:flex'>
          <button className='nav-btn w-32 mx-4 my-3'>Home</button>
          <button className='nav-btn w-32 mx-4 my-3'>About </button>
          <button className='nav-btn w-32 mx-4 my-3'>Contact</button>
          <button className='nav-btn w-32 mx-4 my-3'>Resume</button>
        </div>
        <input type="checkbox" onClick={handleCheckboxClick} id="checkboxNavbur"/>
        <label htmlFor="checkboxNavbur" className="toggleBars my-2 mr-5 flex md:hidden">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
        </label>
      </div>
      <div className='sidenavbar w-72 flex flex-col rounded-xl overflow-hidden bg-gray-900 fixed z-40 text-white'>
        <div className='w-28 h-32 overflow-hidden rounded-full bg-gray-700 outline-dashed outline-7 outline-offset-8 border-2 border-cyan-500 relative top-10 left-10'>
          <img className='w-full h-full rounded-full' src={UserImage} alt='...'/>
        </div>
        <div className='w-11/12 m-auto h-96 my-24 flex flex-col'>
          <button className='nav-btn w-full h-12 my-3 text-xl' onClick={handleCheckboxClick}>Home</button>
          <button className='nav-btn w-full h-12 my-3 text-xl' onClick={handleCheckboxClick}>About </button>
          <button className='nav-btn w-full h-12 my-3 text-xl' onClick={handleCheckboxClick}>Contact</button>
          <button className='nav-btn w-full h-12 my-3 text-xl' onClick={handleCheckboxClick}>Resume</button>
        </div>
      </div>
      <div className='overLayBox fixed w-full h-full top-0 left-0 right-0 bottom-0 hidden z-30' onClick={handleCheckboxClick}></div>
    </>
  )
}
