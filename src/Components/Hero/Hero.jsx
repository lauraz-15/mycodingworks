import "./Hero.css";
import profileImg from "../../assets/laur_photo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={profileImg} alt="Laura" />
      <h1>
        <span>I am Laura,</span> Frontend developer based in London
      </h1>
      <p>Frontend developer based in LondonFrontend developer based in LondonFrontend developer based in n London</p>
      <div className="hero-action-btns">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect-btn">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume-btn">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
