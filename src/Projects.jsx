import React from "react";

const projects = [
  {
    title: "Loan Calculator",
    description:
      "A simple loan calculator that instantly calculates EMI, interest, and total payable amount.",
    tech: "HTML •Bootstrap  • JavaScript",
    link: "https://vishnupriya-9895.github.io/loan-calculator/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive shopping website with product listing and modern UI design.",
    tech: "HTML • CSS • Bootstrap",
    link: "https://vishnupriya-9895.github.io/clothing/",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio showcasing skills, projects, and contact information.",
    tech: "React.js • Reactbootstrap",
    link: "#",
  },
  {
    title: "Resume Builder",
    description:
      "A website to create and download professional resumes with ease.",
    tech: "React.js • React Bootstrap • Tailwind • Mui",
    link: "resume-builder-58j8wj40j-vishnupriyas-projects-00aa7883.vercel.app",
  },
  {
    title: "Food Delivery Website",
    description:
      "A food ordering website with dynamic UI and smooth user experience.",
    tech: "React.js • Tailwind",
    link: "https://tasty-bites-git-master-vishnupriyas-projects-00aa7883.vercel.app",
  },
  {
    title: "Todo List",
    description: "A task management app supporting full CRUD operations.",
    tech: "React.js • MUI",
    link: "https://tasty-bites-git-master-vishnupriyas-projects-00aa7883.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "black",
        padding: "80px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        Projects
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#ccc",
          maxWidth: "600px",
          margin: "0 auto 60px",
          lineHeight: "1.6",
        }}
      >
        Here are some of the projects I’ve built using modern web technologies.
      </p>

      <div
        className="animate__animated animate__fadeIn"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              borderRadius: "18px",
              padding: "30px",
              color: "#fff",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              transition: "all 0.35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(159,123,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "12px",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#ddd",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            <span
              style={{
                display: "inline-block",
                fontSize: "0.8rem",
                marginBottom: "20px",
                color: "#ff9ffc",
              }}
            >
              {project.tech}
            </span>

            <div>
              <a
                href={project.link}
                style={{
                  textDecoration: "none",
                  padding: "10px 22px",
                  borderRadius: "25px",
                  background: "linear-gradient(90deg, #ff9ffc, #9f7bff)",
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  boxShadow: "0 10px 25px rgba(159,123,255,0.5)",
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
