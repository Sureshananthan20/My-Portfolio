
import './index.css'
function Education({ duration, title, desc }) {
  return (
    <div className="education-main-div">
      <h3 >
        <span>{title}</span>
        <span style={{ marginLeft: '150px' }}>{duration}</span>
      </h3>

      <p>{desc}</p>
      <br></br>
    </div>
  );
}

export default Education;
