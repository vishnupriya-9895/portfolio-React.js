import React from "react";
import AntigravitySection from "./AntigravitySection";

const skills = [
  { name: "HTML", percent: 90, class: "p90" },
  { name: "CSS", percent: 95, class: "p85" },
  { name: "React.js", percent: 80, class: "p80" },
  { name: "Node.js", percent: 75, class: "p75" },
  { name: "MongoDB", percent: 70, class: "p70" },
  { name: "Tailwind", percent: 85, class: "p85" },
  { name: "Java", percent: 65, class: "p65" },
  { name: "Python", percent: 60, class: "p70" },
];

const Skills = () => {
  return (
    <section id="skills">
    <div className="hero-bg">
            <AntigravitySection />
          </div>
    <h1 className="text-center text-2xl">Skills</h1>
  
    <div className="skills-container mx-auto">
    
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-box">
            <div className={`percent ${skill.class}`}>
              <svg className="progress-svg">
                <circle className="bg-circle" cx="70" cy="70" r="70" />
                <circle className="progress-circle" cx="70" cy="70" r="70" />
              </svg>

              <div className="number">
                <h2>
                  {skill.percent}
                  <span>%</span>
                </h2>
              </div>
            </div>

            <h2 className="skill-text">{skill.name}</h2>
          </div>
        </div>
      ))}
    </div>
      </section>
  );
};

export default Skills;
