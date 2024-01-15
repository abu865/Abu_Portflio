import { useEffect, useState } from "react";
import contacts from "../../assets/contact1.jpg";
import contact1 from "../../assets/contact2.jpg";
import contact3 from "../../assets/contact3.jpg";
import { Form } from "react-router-dom";
const Contact = () => {
  const images = [contacts, contact1, contact3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [name, setName] = useState({
    yourName: "",
    Email: "",
    Message: "",
  });

  const handleInputChange = (field, value) => {
    console.log("value", value, field);
    setName({ ...name, [field]: value });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  console.log("name", name);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#8a2be2",
        display: "block",
        display: "flex",
      }}
    >
      <form
        action="https://formspree.io/f/xoqgvwnk"
        method="POST"
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          color: "white",
          width: "48%",
          lineHeight: 1.8,
          margin: 50,
          marginLeft: 80,
          padding: 30,
          borderRadius: 40,
          boxShadow: "0 14px 18px rgba(10, 10, 10, 0.1)",
        }}
      >
        <div style={{ color: "black" }}>
          Let's <span style={{ color: "red" }}>talk</span>{" "}
        </div>
        <div style={{ lineHeight: "none", color: "black" }}>
          To get a quote or wish to meet up for a coffee, please email me
          personally or fill out the form, and I will get back to you shortly.
        </div>

        <div>
          <label style={{ color: name.yourName ? "#8a2be2" : "black" }}>
            Your Name
          </label>
        </div>
        <div style={{ margin: 3 }}>
          <input
            type="text"
            placeholder="Enter your name"
            name="Your Name" 
            value={name.yourName}
            onChange={(e) => handleInputChange("yourName", e.target.value)}
            style={{
              borderRadius: 10,
              border: name.yourName ? "2px solid red" : "2px solid #2d2f30",
              padding: "8px",
              color: "black",
            }}
          />
        </div>
        <div>
          <label style={{ color: name.Email ? "#8a2be2" : "black" }}>
            Your Email
          </label>
        </div>
        <div style={{ margin: 3 }}>
          <input
            type="email"
            name="email" 
            placeholder="Enter your email"
            value={name.Email}
            onChange={(e) => handleInputChange("Email", e.target.value)}
            style={{
              borderRadius: 10,
              border: name.Email ? "2px solid red" : "2px solid #2d2f30",
              padding: "8px",
            }}
          />
        </div>
        <div>
          <label style={{ color: name.Message ? "#8a2be2" : "black" }}>
            Your Message
          </label>
        </div>
        <div style={{ margin: 3 }}>
          <textarea
            type="text"
            placeholder="Enter your message"
            value={name.Message}
            name="Message"
            onChange={(e) => handleInputChange("Message", e.target.value)}
            style={{
              borderRadius: 10,
              border: name.Message ? "2px solid red" : "2px solid #2d2f30",
              padding: "15px",
              resize: "none",
            }}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 18 }}
        >
          <button
            style={{
              color: "white",
              borderRadius: 10,
              padding: "8px",
              transition: "background-color 0.3s",
              backgroundColor: "red",
            }}
            type="submit"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#8a2be2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8a2be2")}
          >
            Send Message
          </button>
        </div>
      </form>

      <div
        style={{
          width: "30%",
          clipPath: "circle(30% at 50% 50%)",
          background: "#454545",
          color: "white",
          overflow: "hidden",
        }}
        
      >
        <img
          src={images[currentImageIndex]}
          alt="Your Alt Text"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default Contact;
