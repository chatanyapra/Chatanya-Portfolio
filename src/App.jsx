import './App.css'
import GetInTouch from './components/GetInTouch';
import GreetingPage from './components/GreetingPage'
import Navbar from './components/Navbar'
import WorkPage from './components/WorkPage';
import './components/GreetingPage.css'
import './components/Navbar.css'
import './components/WorkPage.css'
import OldPortfolio from './assets/portfolioWebsite.jpg'
import schoolImage from './assets/homepage.jpeg'
import laravelSPimg from './assets/dashboardFornt.jpeg'
import techerPanel from './assets/teacherpanel.jpeg'
import quizImage from './assets/quizImage.png'
import snakeImage from './assets/snakeGame.jpg'

function App() {
  const aboutProject1= ['This is my first project, when i was learning the reactjs. I used some technology to make it beautiful. This will work properly only in big screens like- laptop.', 'Demo project made in order to grasp the concepts of react js'];
  const aboutProject2= ['This is a School Portal and some specific features and functionalities are- Student Information System("Access to student profiles, including personal details, academic records, attendance tracking, time table and grades"). This website contain email system for password recovery and it is Responsive which means it is compatible on mobile devices as well.',
                        'Using core PHP, Implementing a school portal enhances efficiency, transparency, and communication within the educational community']
  const aboutProject3= ['This website is based on Laravel framework which make it more secure. It is a School Portal (Student Panel) and some specific features and functionalities are- Student Information System("Access to student profiles, including personal details, academic records, attendance tracking, time table, grades etc").It is Responsive which means it is compatible on mobile devices as well.',
                        'Using Laravel framework, This platform provides various functionalities to streamline communication, collaboration, and information management within an educational institution.']
  const aboutProject4= ['This website is based on Laravel framework which uses Model-View-Controller (MVC) architectural pattern to building secure web applications. It is a School Portal (Teacher Panel) and some specific features and functionalities are- Teacher Information System("Access to teacher profiles, including personal details, attendance management, time table management, registration management, marking system etc").', 
                        'Using Laravel framework, This platform provides various functionalities to streamline communication, collaboration, and information management within an educational institution.']  
  const aboutProject5= ['This website is mainly based on php. The quiz exam is designed to assess and evaluate student and some common features and functionalities associated with quiz exams- Multiple choice question, randomization, timed, security measures etc', 
                        "This quiz exam is a form of assessment that typically consists of a series of questions designed to test a student's knowledge on a particular subject"]
  const aboutProject6= ['Creating a simple Snake game using JavaScript is a great way to practice programming and understand the basics of game development',
                        'Snake game using Javascript and understanding the basic concepts']
                        
  return (
    <div className='web-container h-screen'>
      <Navbar></Navbar>
      <GreetingPage></GreetingPage>
      <div className='w-full justify-evenly flex flex-wrap relative m-auto p-5 pt-60 sm:pt-40 bg-gray-900'>
        <h1 className='absolute top-40 sm:top-20 text-7xl text-white'  style={{ fontFamily: "Exo, sans-serif"}}>My Work</h1>
        <WorkPage src={OldPortfolio} name='Portfolio' link='https://chatanyapra.github.io/myPortfolio'
        language={['React','CSS', 'HTML','Bootstrap']} about={aboutProject1[0]} desc={aboutProject1[1]}></WorkPage>
        
        <WorkPage src={schoolImage} name='School Portal ( Student Panel )' link='https://cppublicschool9045website.000webhostapp.com/newSch.php'
        language={['Php','CSS', 'HTML', 'Javascript','Bootstrap']} about={aboutProject2[0]} desc={aboutProject2[1]}></WorkPage>

        <WorkPage src={laravelSPimg} name='School Portal ( Student Panel )' link='https://github.com/chatanyapra/school-management-student-laravel'
        language={['Laravel', 'Php','CSS', 'HTML', 'Javascript','Bootstrap']} about={aboutProject3[0]} desc={aboutProject3[1]}></WorkPage>

        <WorkPage src={techerPanel} name='School Portal ( Teacher Panel )' link='https://github.com/chatanyapra/school-website-teacher-portal'
        language={['Laravel', 'Php','CSS', 'HTML', 'Javascript','Bootstrap']} about={aboutProject4[0]} desc={aboutProject4[1]}></WorkPage>

        <WorkPage src={quizImage} name='Quiz Exam' link='https://github.com/chatanyapra/quizFilesNew'
        language={['Php','CSS', 'HTML', 'Javascript']} about={aboutProject5[0]} desc={aboutProject5[1]}></WorkPage>
        
        <WorkPage src={snakeImage} name='Snake Game' link='https://chatanyaacademy.000webhostapp.com/snake.html'
        language={['CSS', 'HTML', 'Javascript']} about={aboutProject6[0]} desc={aboutProject6[1]}></WorkPage>
        
      </div> 
      <GetInTouch></GetInTouch> 
    </div>
  )
}

export default App
