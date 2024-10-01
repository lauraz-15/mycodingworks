import "./Contact.css";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/mail_icon.svg";
import mapIcon from "../../assets/location_icon.svg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f1101ce9-7869-40cb-94b6-e3edad1d1e9a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className="container">
        <div className="left">
          <h1>Let's talk</h1>
          <p>I am currently available to take on a new project, feel free to email me</p>
          <div className="contact-details">
            <div className="detail">
              <img src={mailIcon} alt="mail icon" />
              <p>korrado.laura@gmail.com</p>
            </div>
            <div className="detail">
              <img src={mapIcon} alt="location icon" />
              <p>London, UK</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Please enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Please enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea type="text" placeholder="Enter your message" name="message" rows="8"></textarea>
          <button type="submit" className="sumbit-contact">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
