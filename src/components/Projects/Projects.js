import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Softskill from "../../Assets/Projects/softSkills.jpg";
import SpiritSwap from "../../Assets/Projects/spiritswap.png";
import Drum from "../../Assets/Projects/Drum.png";
import GeneWeb from "../../Assets/Projects/GeneWeb.png";
import BreastCancer from "../../Assets/Projects/BreastCancer.jpg";
import simonGame from "../../Assets/Projects/simonGame.png";
import NFTGarage from "../../Assets/Projects/nftgarage.png"
import HireGenius from "../../Assets/Projects/HireGenius.png";

function Projects() {
  return (
    <>
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
                imgPath={GeneWeb}
                isBlog={false}
                title="GeneWEB"
                description="GeneWeb is a research tool website for young researchers that server as a link between the NCBI and the EBI. It includes implementations of the NCBI's enormous genome and proteome database as well as the EBI's Genome and proteome modification Tools. With a simple user interface and all the necessary packages in one location"
                ghLink="https://github.com/sourabh7047/GeneWeb_1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={simonGame}
                isBlog={false}
                title="Simon Game"
                description="Simon Game forces you to scratch your temporary memory and pattern recognition, a simple and fun game made with HTML,CSS and Javascipt"
                ghLink="https://github.com/sourabh7047/simonGame"
                demoLink="https://sourabh7047.github.io/simonGame/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Drum}
                isBlog={false}
                title="Drum"
                description="I like to play drum but I did not had one so I made one for me"
                ghLink="https://github.com/sourabh7047/DrumGame"
                demoLink="https://sourabh7047.github.io/DrumGame/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Softskill}
                isBlog={false}
                title="Softskill Importance Classification"
                description="A binary classification predictive model to see the impact of soft skills and values on acedemic success."
                ghLink="https://github.com/sourabh7047/Human_Value_Soft_Skill_Classification"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BreastCancer}
                important={true}
                isBlog={false}
                title="Breast Cancer - Research"
                description="A The task was to classify the cancerous cell nuclei surface morphological dataset into benign and malignant tumors.implemented different binary classification algorithms, analyzed the performance through varies matrices result, and optimized them. Published in 2024 11th International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions) (ICRITO)"
                ghLink="https://github.com/sourabh7047/Breast_Cancer_Classification"
                demoLink="https://ieeexplore.ieee.org/document/10522209"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={HireGenius}
                important={true}
                isBlog={false}
                title="HireGenius"
                description="HireGenius is a job portal that streamlines recruitment with AI-driven resume screening and job matching. Technologies: Flask, LLMs, Celery, OIDC authentication, API rate limiting, PostgreSQL."
                ghLink="https://github.com/sourabh7047/HireGenius"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Some of the project on which I worked under <strong className="purple">Internship</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={SpiritSwap}
                isBlog={false}
                title="SpiritSWap"
                description="SpiritSwap is a decentralized exchange (DEX) on the Fantom Opera Chain. SpiritSwap's design is based on the Uniswap constant-product automated market maker (AMM)."
                ghLink="https://github.com/Layer3Org"
                demoLink="https://www.spiritswap.finance/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NFTGarage}
                isBlog={false}
                title="NFTGarage"
                description="A NFT Launchpad envisioning to bridge the gap between DeFi & NFTs with a parallel focus on supporting other innovative projects to grow by exposing them to our technology."
                ghLink="https://github.com/NFTGarage/platform"
                demoLink="https://nftgarage.world/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
