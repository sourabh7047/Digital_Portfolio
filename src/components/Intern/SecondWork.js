import React from "react";
import { ImPointRight } from "react-icons/im";
import genpact from "../../Assets/Projects/Genpact3.png";

function SecondInternship() {
  return (
    <div style={{marginTop: "1rem", marginBottom: "5rem"}}>
      <img
        src={genpact}
        style={{ width: 220, marginTop: "3rem", margin: "3rem", float: "left" }}
        alt="about"
        className="img-fluid"
      />
      <blockquote className="blockquote mb-0">
        <h3 className="purple">
          <u className="white">Software Development Intern</u>{" "}
        </h3>
        <p style={{ textAlign: "justify" }}>
          <span className="purple">Time: </span> 01/23 - current
          <br />
          <span className="purple">Organisation: </span>Genpact
          <br />
          Projects I worked On:
          <br />
          <br />
          <span className="purple">Flask: </span> Built a Flask API that
          included multiple relationships between tables, JWT token-based
          authentication, and a dedicated Swagger UI. Since Flask works on the
          WSGI engine, which is synchronous, it was necessary to use the asyncio
          library of SQLAlchemy to send multiple queries to the database
          simultaneously.
          <br />
          <br />
            <span className="purple">Ray:</span>Designed and implemented a
            distributed training pipeline using the Ray framework that included
            data processing, training, prediction, and deployment on horizontal
            autoscaling Ray cluster VMs that run on the Google Cloud VMs.
          <br />
          <br />
          <span className="purple">Vertex AI: </span> Developed Vertex AI
          pipelines for model training, deployment, and endpoint generation. The
          data processing and training pipeline generates models that are then
          saved as model artifacts. The endpoint deployment pipeline then
          deploys these models.
          <br />
          <br />
          <span className="purple">DataProc:</span>Created a Python-based API
          system that simplified the submission of dataproc jobs. The API only
          required the submission of the main Python file's link and the
          addition of a zip folder link, making it easier to submit jobs through
          cloud infrastructure.
          <br />
        </p>
      </blockquote>
    </div>
  );
}

export default SecondInternship;
