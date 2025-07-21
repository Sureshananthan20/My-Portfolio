import './index.css'
import HoverButton from './Hoverbutton.jsx';
import GitHub from './assets/GitHub.png'
import  insta from'./assets/insta.png'
import LinkedIn from './assets/LinkedIn.png'
import Education from './Education.jsx';
import Projects from './Projects.jsx';



function Name(){

return(

   <div>

  <div className="left">
    <div>
    <h1 className='Name-style'>Suresh Ananthan</h1>
    <h2 className='Role-style'>Fresher | Java & React Developer</h2>
    <p className='Summary-style'>Passionate fresher with a strong foundation in programming and a willingness to learn anything.</p>
    </div>
    <div className='buttons-div'>
      <HoverButton name="EXECUTIVE SUMMARY" target_id='about' />
      <HoverButton name="EDUCATION" target_id='education'/>
      <HoverButton name="PROJECTS" target_id='projects' />
    </div>
    <div className='my-links'>
      <a href='https://github.com/Sureshananthan20' target='_blank'><img className='link-img' src={GitHub}></img></a>
      <a href='https://www.instagram.com/suresh_51_' target='_blank'><img className='link-img' src={insta}></img></a>
      <a href='https://www.linkedin.com/in/sureshananthan' target='_blank'><img className='link-img' src={LinkedIn}></img></a>
    </div>
    <div className='contact'>
        <h4>Contact :</h4>
      <a href="mailto:sureshananthan20@gmail.com" style={{ color: '#f3f3f3ff;', textDecoration: 'none' }}>
        sureshananthan20@gmail.com
      </a>
      <p>Ph.no : +91 6369459877</p>
      <a href='Suresh_Ananthan_Resume.pdf' target="_blank" rel="noopener noreferrer">
        View My Resume
      </a>
    </div>
  </div>

  <div className="right">
    <div className="about"  id='about'>
      <h2>EXECUTIVE SUMMARY</h2>
      <p>
        Motivated and detail-oriented Computer Science graduate with a strong foundation in Java, Spring Boot, and MySQL. Completed a certified C programming course and built real-world projects using React.js for frontend and Spring Boot for backend development. Proficient in object-oriented programming, data structures, and REST API development. Eager to
contribute to a dynamic software development team and grow as a full-stack Java developer.
      </p>
      <br></br>
      <hr></hr>
    </div>
    
    <div className="education" id='education'>
      <h2>EDUCATION</h2>
      <Education  duration='2020 - 2024' title='Bachelor of Technology' desc='I hold a B.Tech in Computer Science and Business Systems from E.G.S. Pillay Engineering College, Nagapattinam, Tamil Nadu, with a CGPA of 7.5.'></Education>
      <Education  duration='2018 - 2020' title='Higher Secondary' desc='Completed Higher Secondary from Govt. Hr. Sec. School, Nagapattinam, State Board, in 2020, scored 55%.'></Education>
      <Education  duration='2017 - 2018' title='High School' desc='Completed High School from Govt. Hr. Sec. School, Nagapattinam, State Board, in 2018,scored 79%.'></Education>
      <hr></hr>
    </div>
    
    <div className="projects" id='projects'>
      <h2>PROJECTS</h2>
      <Projects project_title='WhizList – Task Management Web Application' desc='Developed WhizList, a task management web application using Java Spring Boot and MySQL, featuring task creation, updating, status tracking, and data persistence with a RESTful backend API.Designed a responsive and intuitive frontend interface using HTML, CSS, and JavaScript to provide seamless task
management and user interaction.' githubLink='https://github.com/Sureshananthan20/whizlist-backend'></Projects>
<Projects project_title='My Portfolio Website' desc='A personal portfolio website built using React to showcase my skills, education, and projects. Features include responsive design, smooth scroll, and reusable components.' githubLink='https://github.com/Sureshananthan20/My-Portfolio'></Projects>
    </div>
    </div>
  </div>


);
}
export default Name