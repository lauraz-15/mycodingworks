import "./Hero.css";
import profileImg from "../../assets/laur_photo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={profileImg} alt="Laura" />
      <h1>
        <span>I am Laura,</span> a passionate Frontend Developer.
      </h1>
      <p>Specializing in JavaScript, React, and APIs, I build seamless digital experiences with a focus on efficiency and creativity.</p>
      <div className="hero-action-btns">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect-btn">Connect with me</div>
        </AnchorLink>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume-btn">My resume</div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
