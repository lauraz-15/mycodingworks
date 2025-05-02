import "./About.css";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-me-title">
        <h1>About me</h1>
      </div>
      <div className="about-me-section">
        <div className="right-section">
          <div className="about-text">
            <p>
              I am a dedicated Frontend Developer with a passion for creating seamless user experiences through modern web technologies. After transitioning from a successful career in property management, I completed full-stack development training, with a particular focus on frontend development.
            </p>
            <p>My current expertise is in JavaScript, React, and CSS, but I also enjoy working with APIs and backend technologies like Node.js. I thrive in dynamic environments and love solving complex problems with innovative solutions.</p>
          </div>
          <div className="skills">
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>Next JS</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="achievement">
          <h1>1 YEAR </h1>
          <p>FULL STACK COURSE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>1ST PLACE</h1>
          <p>LONDON HACKATON</p>
        </div>
      </div>
    </div>
  );
}

export default About;
