import React, { useState, useEffect } from "react";
import AntigravitySection from "./AntigravitySection";
import profileImg from "./assets/new.png";

import 'animate.css';

const roles = ["MERN Stack Developer", "Web Developer", "Frontend Developer", "Backend Developer"];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 150);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length - 1)), 100);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000); 
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id='home' className="hero">
      <div className="hero-bg">
        <AntigravitySection />
      </div>

      <div className="hero-container">
       
        <div className="hero-content animate__animated animate__fadeInLeft">
          <h1>

            Hi, I’m <span className="animated-name">Vishnupriya.S</span>
          </h1>

          <h2 className="animated-role">{text}<span className="cursor">|</span></h2>

          <p>
            I’m a passionate MERN Stack Developer with solid experience in MongoDB, Express.js, React, and Node.js. I love building dynamic, responsive, and scalable web applications that are intuitive, user-friendly, and enjoyable to interact with.
          </p>

          <div className="hero-buttons">
           <a  className="primary" download>
  Download CV
</a>

             
         <button
  className="secondary"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Let’s Connect
</button>

          </div>
        </div>

   
        <div className="hero-image">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={profileImg} alt="Vishnupriya" />
              </div>

              <div className="flip-card-back">
                <a >
                  <button className="download-btn">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
