import { GithubIcon, LinkedinIcon, MediumIcon, TwitterIcon } from "./icon";

import "./icon.css";
const ConnectSocialIcons = () => {
  return (
    <section className="social-icons">
      <a
        href="https://github.com/ajit-sharmaGH"
        target={"_blank"}
        rel="noreferrer"
      >
        <GithubIcon />
      </a>

      <a
        href="https://twitter.com/its_AjitSharma"
        target={"_blank"}
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/itsAjitSharma"
        target={"_blank"}
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>

      <a href="https://" target={"_blank"} rel="noreferrer">
        <MediumIcon />
      </a>
    </section>
  );
};
export { ConnectSocialIcons };
