import './App.css'
import GreetingPage from './components/GreetingPage'
import Navbar from './components/Navbar'
import SvgLine from "./components/SvgLine";

function App() {

  return (
    <div className='web-container'>
      <SvgLine></SvgLine>
      <Navbar></Navbar>
      <GreetingPage></GreetingPage>
    </div>
  )
}

export default App
