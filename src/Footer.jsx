import React from "react";
import { MdEmail, MdPlace } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f0f1a, #1b1b2f)",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
       
        <div>
          <h3 style={{ marginBottom: "10px" }}>Vishnupriya.S</h3>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            MERN Stack Developer passionate about building responsive,
            user-friendly web applications.
          </p>

       
         
        </div>

   
        <div>
          <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
          <p style={linkStyle} onClick={() => scrollToSection("home")}>
            Home
          </p>
          <p style={linkStyle} onClick={() => scrollToSection("skills")}>
            Skills
          </p>
          <p style={linkStyle} onClick={() => scrollToSection("projects")}>
            Projects
          </p>
          <p style={linkStyle} onClick={() => scrollToSection("contact")}>
            Contact
          </p>
        </div>

 
        <div>
          <h4 style={{ marginBottom: "10px" }}>Get in Touch</h4>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <MdEmail />
    vishnupriya32934@gmail.com
  </span>

  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
    <MdPlace />
    Trivandrum, Kerala
  </span>
</p>

           <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <FaLinkedin
              style={iconStyle}
              onClick={() =>
                openLink("https://www.linkedin.com/in/vishnupriya-s-s")
              }
            />

            <FaInstagram
              style={iconStyle}
              onClick={() =>
                openLink("https://www.instagram.com/")
              }
            />

            <FaGithub
              style={iconStyle}
              onClick={() =>
                openLink("https://github.com/vishnupriya-9895")
              }
            />
            <FaWhatsapp
  style={iconStyle}
  onClick={() =>
    window.open("https://wa.me/919895097537", "_blank")
  }
/>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  cursor: "pointer",
  fontSize: "14px",
  marginBottom: "8px",
  opacity: 0.85,
};

const iconStyle = {
  fontSize: "22px",
  cursor: "pointer",
  transition: "0.3s",
};

export default Footer;
