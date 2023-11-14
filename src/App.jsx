import './App.css'
import GreetingPage from './components/GreetingPage'
import Navbar from './components/Navbar'
import SvgLine from "./components/SvgLine";
import WorkPage from './components/WorkPage';

function App() {

  return (
    <div className='web-container'>
      <SvgLine></SvgLine>
      <Navbar></Navbar>
      <GreetingPage></GreetingPage>
      <div className='w-full justify-evenly flex flex-wrap relative m-auto p-16 bg-gray-900'>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
        <WorkPage></WorkPage>
      </div>  
    </div>
  )
}

export default App
