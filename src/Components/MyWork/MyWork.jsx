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
          return <img src={work.w_img} alt="my work" />;
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
