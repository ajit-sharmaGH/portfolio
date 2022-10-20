import { projectData } from "../../component/data/data";
import "./project.css";
const ProjectComponent = () => {
  return (
    <section className="project-section">
        <div className="flex-col-center">
      <h3 className="mt-1 mb-1">Projects</h3>
      <p className="txt-align-center">Here I have mentioned some of my personal projects</p>
      </div>
      <div className="project-child">
        {projectData.map((item) => {
          return (
            <div className="project-component mb-1" key={item.id}>
              <img
                src={item.img}
                className="project-images mt-2"
                alt="projectImage"
              />
              <aside className="flex-col">
                <h3 className="">{item.title} </h3>
                <span>{item.description}</span>
                <span className="project-anchor-tag mt-1 flex-wrap">
                 <a href={item.liveLink} target="_blank" rel="noreferrer" >Live Demo</a>
                  <a href={item.GithubLink} target="_blank" rel="noreferrer">Github Code</a>
                </span>
              </aside>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export { ProjectComponent };
