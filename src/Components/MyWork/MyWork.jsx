import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  return (
    <div id="work" className="my-work-section">
      <div className="title">
        <h1>My Latest work</h1>
      </div>
      <div className="work-container">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.link || "#"} target="_blank" key={index} rel="noopener noreferrer">
              <div className="porfolio-item">
                <div className="porfolio-img-cont">
                  <img src={work.img} alt="my work" />
                </div>

                <p className="work-title">{work.title}</p>
                <p className="work-description">{work.description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="show-more">
        <p>Show more</p>
        <img src={arrow_icon} alt="show more arrow" />
      </div>
    </div>
  );
}

export default MyWork;
