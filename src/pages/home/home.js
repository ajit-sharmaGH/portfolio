import { Link } from "react-router-dom";
import { ConnectSocialIcons } from "../../component/icon/connectIcons";
import "./home.css";
const HomeComponent = () => {
  return (
    <section className="component-section">
      <img
        className="profile-photo"
        src="/profile_image.jpg"
        alt="profile_photo"
      />
      <h1 className="fw-600 name-intro">HEY, I'M AJIT SHARMA</h1>

      <p className="paragraph-intro">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>

      <Link className="home-project-link fs-xs" to="/project">
        Projects
      </Link>

      <footer>
        <ConnectSocialIcons />
      </footer>
    </section>
  );
};
export { HomeComponent };
