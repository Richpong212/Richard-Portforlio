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
            I am excited to take you on a quick journey through my professional
            story. Imagine a world where pineapples meets technology. That's
            where my adventure began. I cultivated success through running a
            pineapple venture. Sounds unsual right? Well, it has thought me that
            the sweet spot lies in the fusion of business accumen and technology
            prowess. Imagine turning pineapples into profits. I would say that's
            creativity and innotvation at its best.
            <br />
            <br />
            But I am not just a person who knows how to grow pineapples. I am an
            architect of solutions. I cultivator of seamless user experiences.
            <br />
            <br />
            Much like turning to the perfect pineapples requires a holistic
            approach, That is how I approach technology. Not just as a
            developer, but as a create of extraordinary experiences.
            <br />
            <br />
            Now let me share a secret. Although it is not that of any screte
            that is not known by everyone, but I would say my commitment to
            continous learning and adaptability has been the key to my success.
            It has thought me to master the art of crafting user experiences
            through frontend technologies and designing scalable and powerful
            backend solutions.
            <br />
            <br />
            As I continue to evolve, I am ready to bring my unique blend of
            business accumen and technology prowess to new challenges. I thrive
            on fostering innovation and driving success in every endeavor.
            <br />
            <br />
            So if you are looking for someone who turns unconventional to
            exceptional, who sees technology as a canvas for creating
            extraordinary experiences, then I am your guy.
            <br />
            <br />
            Let's connect, explore new horizons and turn your projects into
            success stories.
            <br />
            <br />
            I am Richard Acheampong and I can't wait to bring my passion and
            skills to your team.Thanks for stopping by!
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
