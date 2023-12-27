import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import education from "../../Assets/Projects/education.png";
import clerance from "../../Assets/Projects/clerance.png";
import skillflare from "../../Assets/Projects/skillflare.png";
import dot from "../../Assets/Projects/dot.png";
import embarkcv from "../../Assets/Projects/embarkcv.png";

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
              imgPath={education}
              isBlog={false}
              title="LearnsX India"
              description="LearnsX India is an Sex Education platform developed for India where we talk about five phases like Anatomy, Sexual Transmitted Diseases, Reproduction, Contraception, Healthy Relationship. We team OJAS proposed this at Smart India Hackathon 2023 to AICTE - MIC, Student Innovation under Smart Education category. Currently in Development."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillflare}
              isBlog={false}
              title="SkillFlare"
              description="SkillFlare is an EdTech platform for learners to get educate from industry top experts. It’s a fully functionaled-tech platform that enables users to create, consume, and rate educational content."
              ghLink="https://github.com/anujkumaryadav/skillflare"
              demoLink="https://skill-flare.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={embarkcv}
              isBlog={false}
              title="EmbarkCV"
              description="The Embarkcv is a web-based application that enables users to craft visually appealing and highly professional resumes. With our platform, users can create resumes that stand out from the crowd and give them a competitive edge in the job market."
              ghLink="https://github.com/anujkumaryadav/embarkcv"
              demoLink="https://embarkcv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clerance}
              isBlog={false}
              title="Student Clerance Management System"
              description="Student Clearance Management System for Bajaj Institute of Technology, Wardha"
              ghLink="https://github.com/anujkumaryadav/student-clearance"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dot}
              isBlog={false}
              title="Dot Batch Mini Projects"
              description="I enrolled in the MERN Stack course by Love Babbar on thecodehelp.in"
              ghLink="https://github.com/anujkumaryadav/dot-batch-projects"
              demoLink="#"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
