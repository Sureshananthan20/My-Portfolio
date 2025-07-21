
import './index.css'

function Projects({project_title, desc,githubLink}){
  if(githubLink){
    
      return (
    <div>
      <h4>{project_title}</h4>
      <p>{desc}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">GitHub
      </a>
      <br></br>
      <br></br>
    </div>
  );
    
  }
  else{
  return (
    <div>
      <h4>{project_title}</h4>
      <p>{desc}</p>

    </div>
  );
};}
export default Projects