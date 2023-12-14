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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Memory Game"
              description="Memory Fruits Duel is a 2-player online memory card game featuring fruit-themed cards. Using basic HTML, CSS, and JavaScript, players take turns flipping cards to find matching pairs. It's a fun and competitive game that challenges memory skills and encourages friendly rivalry between friends,to have fun together."
              ghLink="https://github.com/saiyamjain26/MemoryGame"
              demoLink="https://memory-game-xi-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BlogBlitz"
              description="BlogBlitz is a modern blogging platform crafted using the MERN stack. It offers an intuitive interface for bloggers to create and publish content effortlessly. With MongoDB for data storage, Express.js and Node.js for efficient backend operations, and React for a dynamic front-end, BlogBlitz ensures a smooth user experience."
              ghLink="https://github.com/saiyamjain26/MernStack-Blogging-Project"
              demoLink="https://blog-blitz-iefe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage for Convenience."
              ghLink="https://github.com/saiyamjain26/WebDevEditor"
              demoLink="https://web-dev-editor.vercel.app/"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SocialBlitz Frontend"
              description="The social media page is built with HTML, CSS, and JavaScript, offering users the ability to customize text size, color, and switch between light and dark modes. It allows posting text, images, or multimedia content with features for editing and sharing."
              ghLink="https://github.com/saiyamjain26/SocialBlitz-"
              demoLink="saiyamjain26.github.io/SocialBlitz-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sociopedia"
              description="The MERN social media project allows secure user sign-in, profile creation, and friend connections using MongoDB. It offers features to add posts, like, comment, and interact within a community. With a React front-end and Node.js/Express.js backend, users can seamlessly engage by sharing content and connecting with friends in a user-friendly interface."
              ghLink="https://github.com/saiyamjain26/SocialMedia"
              demoLink="https://socialblitz.vercel.app/" 
            />
          </Col>

          // <Col md={4} className="project-card">
          //   <ProjectCard
          //     imgPath={emotion}
          //     isBlog={false}
          //     title="Face Recognition and Emotion Detection"
          //     description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
          //     Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
          //     ghLink=""
          //     demoLink=""    
          //   />
          // </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
