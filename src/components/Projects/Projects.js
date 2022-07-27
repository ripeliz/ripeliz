import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Recent Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="lol44"
              description="Personal champion reccomender for League of Legends"
              ghLink="https://github.com/ripeliz/lol44"
              demoLink="/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Edufy"
              description="Interactive quiz website aimed to gameify online learning for younger students."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Minesweeper"
              description="Minesweeper replica"
              ghLink="https://github.com/ripeliz/Minesweeper"
              demoLink="/home"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
