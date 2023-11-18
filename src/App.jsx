import './App.css'
import GetInTouch from './components/GetInTouch';
import GreetingPage from './components/GreetingPage'
import Navbar from './components/Navbar'
import SvgLine from "./components/SvgLine";
import WorkPage from './components/WorkPage';

function App() {

  return (
    <div className='web-container h-screen'>
      {/* <SvgLine></SvgLine> */}
      <Navbar></Navbar>
      <GreetingPage></GreetingPage>
      <div className='w-full justify-evenly flex flex-wrap relative m-auto p-5 pt-60 sm:pt-40 bg-gray-900'>
        <h1 className='absolute top-40 sm:top-20'  style={{ fontFamily: "Exo, sans-serif"}}>My Work</h1>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
      </div> 
      <GetInTouch></GetInTouch> 
    </div>
  )
}

export default App
