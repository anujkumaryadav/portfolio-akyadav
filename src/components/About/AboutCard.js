import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anujkumar Yadav </span>
            from <span className="purple"> Wardha, India.</span>
            <br />
            I am currently final year Computer Engineering student at Bajaj Institute of Technology, Wardha.
            <br />
            I have completed Diploma in Computer Engineering from Agnihotri School of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Love to Fail & Learn
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoy to drip on Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Joy Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm here to build and Innovate "{" "}
          </p>
          <footer className="blockquote-footer">AK Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
