import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rental2 from "../../Assets/Projects/rental2.png";
import rental from "../../Assets/Projects/rental.png";
import perntodo from "../../Assets/Projects/pern-todo.png";
import { ProjectData } from "./ProjectData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectData.map((data, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={data.image}
                title={data.title}
                description={data.description}
                demoLink={data.demoLink}
                ghLink={data.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
