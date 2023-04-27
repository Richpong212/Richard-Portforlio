import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Richard Acheampong </span>
            from <span className="purple"> Odense, Denmark.</span>
            <br />
            Ever Since I was a child, I have always been curious about how
            things came into being. I remember dismantling my Pentium 4 computer
            to figure out how this thing could display my Need for Speed game.
            Since then my curiosity for science and technology has grown in
            strength. I dwell in an environment where the decision path is short
            and people desire to learn from one another. I am an action-oriented
            person. In my spare time, I enjoy technology blogs and books to keep
            me updated with the latest advances. I work on different projects
            that I find interesting.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I can't change the world but I can make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Richard Acheampong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
