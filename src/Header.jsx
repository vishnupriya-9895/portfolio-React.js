import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Navbar expand="lg" className="bg-transparent fixed-top">
      <Container className="d-flex justify-content-between align-items-center">
        <h3 className="text-white m-0">Portfolio</h3>

        <div className="d-flex gap-5 fw-bold">
          <span onClick={() => scrollToSection("home")} className="text-white "   style={{ cursor: "pointer" }}>
            Home
          </span>

          <span onClick={() => scrollToSection("skills")} className="text-white "  style={{ cursor: "pointer" }}>
            Skills
          </span>

          <span onClick={() => scrollToSection("projects")} className="text-white"  style={{ cursor: "pointer" }}>
            Projects
          </span>

          <span onClick={() => scrollToSection("contact")} className="text-white "  style={{ cursor: "pointer" }}>
            Contact
          </span>
        </div>

        <Button
          variant="outline-light"
          onClick={() => scrollToSection("contact")}
        >
          Let’s Connect
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
