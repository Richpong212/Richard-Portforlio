import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import aws1 from "../../Assets/Certification/aws1.png";
import aws2 from "../../Assets/Certification/aws2.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Richard Acheampong</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              {/* Certifications */}
              <div className="container">
                <h3>Certifications</h3>

                <div className="row">
                  <Col md={3} style={{ paddingBottom: 20 }}>
                    <img
                      src={aws1}
                      alt="aws 1 pic"
                      className="img-fluid"
                      style={{ maxHeight: "150px" }}
                    />
                  </Col>

                  <Col md={3} style={{ paddingBottom: 20 }}>
                    <img
                      src={aws2}
                      alt="aws 2 pic"
                      className="img-fluid"
                      style={{ maxHeight: "150px" }}
                    />
                  </Col>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
