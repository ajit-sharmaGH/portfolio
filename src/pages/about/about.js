import { mySkills } from "../../component/data/data";
import { ConnectSocialIcons } from "../../component/icon/connectIcons";
import "./about.css";

const About = () => {
  return (
    <section className="pl-1 pr-1 about-section">
      <h3 className="mb-1 mt-1 fw-600">About Me</h3>
      <p className="">
        Here you will find more information about me, what I do, and my current
        skills which is in terms of programming and technology
      </p>
      <div className="section-child mb-1 mt-1">
        <div className="flex-col">
          <h3 className="mb-1 mt-1">Get to Know Me</h3>
          <p className="txt-align-left">
            I am a{" "}
            <span className="highlighted-text">Frontend Web Developer</span>{" "}
            seeking a job opportunity in this fields. I build the Front-end of
            websites and web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
          </p>
          <p className="mt-1 mb-1">
            I am open to job opportunities where I can contribute, learn and
            grow. If you have a good opportunity which matches my skills and
            experience then try to contact me !
          </p>
        </div>
        <div className="flex-col mt-1">
          <h3>My Skills</h3>
          <ul className="flex-wrap mt-1">
            {mySkills.map((skill) => {
              return (
                <li key={skill.id} className="mb-half mr-half mt-half">
                  <span className="chips-styling">{skill.language} </span>
                </li>
              );
            })}
          </ul>
        </div>
       
      </div>
      <button className="mb-1">Email Me</button>
      <footer className="mb-1">
        <ConnectSocialIcons />
      </footer>
    </section>
  );
};
export { About };
