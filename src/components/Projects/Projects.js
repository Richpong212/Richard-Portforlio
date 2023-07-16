import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rental2 from "../../Assets/Projects/rental2.png";
import rental from "../../Assets/Projects/rental.png";
import perntodo from "../../Assets/Projects/pern-todo.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Hjem"
              description="The rental property application have several features to help users find their desired rental property. Firstly, users will be able to create an account and log in to the application. Once logged in, users will be able to search for rental properties based on various criteria such as location, price range, number of bedrooms, and amenities. The application will allow users to view detailed property listings, including photos, descriptions, and rental prices.
Tech: Nodejs,reactjs,express,MongoDB"
              ghLink="https://github.com/Richpong212/rentalservice_client"
              demoLink="https://customer-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental2}
              isBlog={false}
              title="RealDeal"
              description="The Real Estate Project is build using MERN Stack, The website has a responsive design that works on desktop, tablet, and mobile devices. The app  includes features such as user authentication, property search, property listings, property details, contact agent, and an admin panel. By leveraging the strengths of MongoDB, Express.js, React.js, and Node.js. I created a responsive and user-friendly experience for users looking to browse and search for properties online."
              ghLink="https://github.com/Richpong212/RentalService-Customer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perntodo}
              isBlog={false}
              title="Simple Pern Todo App"
              description="The PERN Todo App is a sleek and efficient application built with PostgreSQL, Express, React, and Node.js. It allows users to manage their tasks easily with features like create, read, update, and delete functionalities. This showcases my expertise in full-stack web development and demonstrates my ability to leverage the power of the PERN stack for building practical and user-friendly applications."
              ghLink="https://github.com/Richpong212/PERN-STACK-TODO"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
