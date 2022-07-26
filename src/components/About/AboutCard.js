import React from "react";
import Card from "react-bootstrap/Card";
import { ImHeart } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Elizabeth Choy </span>
             .<span className="purple"> </span>
            <br />I am a junior CS major at the University of Florida! 
            <br />
            <br />
            Apart from coding, I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImHeart /> playing games!
            </li>
            <li className="about-activity">
              <ImHeart /> reading manga!
            </li>
            <li className="about-activity">
              <ImHeart /> playing with my cat!
            </li>
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
