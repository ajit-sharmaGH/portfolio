import "./header.css";
import { navbarListing } from "../data/data";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <header className="header flex-row-align-center padding-half">
      <div className="flex-row-align-center mr-auto ml-2">
        <img
          className="profile-image mr-2"
          src="/profile_image.jpg"
          alt="profile_image"
        />
        <h3 className="fw-600 fs-xs link-styling">Ajit Sharma</h3>
      </div>
      <ul className="flex-wrap fs-xs">
        {navbarListing.map((item) => {
          return (
            <div key={item.id}>
              <Link to={item.link} className="link-styling">
                {item.name}
              </Link>
              <div className="project-model">
                <p>
                  <Link to={item.miniLink} className="model-link-styling">
                    {item.miniName}
                  </Link>
                </p>
                <p>
                  <Link to={item.majorLink} className="model-link-styling">
                    {item.majorName}
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </ul>
    </header>
  );
};
export { HeaderComponent };
