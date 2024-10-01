import "./Footer.css";
import footerLogo from "../../assets/logo_laura.png";
import userIcon from "../../assets/user_icon.svg";

function Footer() {
  let currYear = new Date().getFullYear();
  return (
    <div className="footer-section">
      <div className="top">
        <div className="left">
          <img className="logo" src={footerLogo} alt="footer-logo" />
          <p>I am a frontend developer based in UK. With a solid full-stack foundation, I enjoy working across the stack but have a strong passion for building responsive and dynamic frontend applications.</p>
        </div>
        <div className="right">
          <div className="email-input">
            <img src={userIcon} alt="uswer icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="bottom-left">
          @ {currYear} www.mycodingworks.com. <span>All rights reserved</span>
        </div>
        <div className="bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
