import jsonData from '../assets/cv.json'
import cvImg from '../assets/boss.jpg';

export default function Cv() {
  function fetchJsonData(dataType, data) {
    if (dataType === "Work") {
      return data.map((work) => (
        <div className="cv-content" key={work.Id}>
          <dt>{work.Name}, {work.Location}</dt>
          <dd>{work.Date}, {work.Info}</dd>
        </div>
      ));
    }
    else if (dataType === "Education") {
      return data.map((education) => (
        <div className="cv-content" key={education.Id}>
          <dt>{education.Name}, {education.Location}</dt>
          <dd>{education.Date}, {education.Info}</dd>
        </div>
      ));
    }
  }

  return (
    <>
      <aside className="left">
        <img src={cvImg} alt="it's the ceo"></img>
        <h3>Contact me</h3>
        <p>Daniel Frykman</p>
        <p>mr.daniel.frykman@gmail.com</p>
        <p>more stuff</p>
      </aside>

      <aside className="right">
      </aside>

      <article className="main-content">
        <h3>Work experience</h3>
        {fetchJsonData("Work", jsonData.Work)}
        <h3>Education</h3>
        {fetchJsonData("Education", jsonData.Education)}

      </article>
    </>
  )
}