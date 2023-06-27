import "./header.css";
import React, { useState } from "react";

import { navbarListing, sidebarListing } from "../data/data";
import { Link } from "react-router-dom";
import { Bars } from "../icon/icon.js";
const HeaderComponent = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="header flex-row-align-center padding-half">
      <div className="flex-row-align-center mr-auto ml-1">
        <img
          className="profile-image"
          src="/assets/profile_image.jpg"
          alt="profile_image"
        />
        <h3 className="fw-600 fs-xs link-styling">Ajit Sharma</h3>
      </div>
      <span className="bars" onClick={showSidebar}>
        <Bars size={10} />
      </span>
      <nav className="routing-links active fs-xs">
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
      </nav>

      <nav className={sidebar ? "nav-menu-items  sidebar" : "sidebar"}>
        {sidebarListing.map((item) => {
          return (
            <Link key={item.id} to={item.link} onClick={showSidebar} className="link-styling fs-xs" > {item.name}  </Link>
          )
        })}

      </nav>
    </header>
  );
};
export { HeaderComponent };