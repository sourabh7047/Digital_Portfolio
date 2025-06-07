import React from "react";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import genpact from "../../Assets/Projects/Genpact3.png";

function ThirdWork() {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "5rem" }}>
      <img
        src={genpact}
        style={{ width: 300, margin: "2em", float: "right" }}
        alt="about"
        className="img-fluid"
      />

      <blockquote className="blockquote mb-0">
        <h3 className="purple">
          <u className="white">Software Developer</u>{" "}
        </h3>
        <p style={{ textAlign: "justify" }}>
          <span className="purple">Time: </span> 01/23 - Present
          <br />
          <span className="purple">Organisation</span>Genpact (Bengaluru)
          <br />
          Projects I worked On:
          <br />
          <br />
          <span className="purple">Chat & RAG Systems: </span> Built generative
          AI chat applications and Retrieval-Augmented Generation (RAG)
          systemsfor scalable multi-tenant architectures, with secure
          authentication and RBAC implemented using Okta, Azure AD.
          <br />
          <br />
          <span className="purple">AI Agentic System:</span>Developed AI-driven
          agentic systems featuring a central ’Master Agent’ that
          dynamicallyorchestrates workflows by selecting specialized sub-agents
          based on user input. Each agent was equipped with domain-specific
          tools (APIs, LLMs, data processors) to handle complex, multi-step
          tasks in real time. A dedicated microservicefor agentic tools using
          gRPC was built to reduce backend workload and improve system
          efficiency.
          <br />
          <br />
          <span className="purple">
            High-Performance Task Processing:{" "}
          </span>{" "}
          Implemented a distributed task queue using Celery to handle
          CPU-intensiveoperations. Decoupling synchronous API requests from
          background processing reduced backend load by 40%, im-proved response
          times by 60%, and enabled horizontal scaling of worker nodes.
          <br />
          <br />
          <span className="purple">Observability:</span>Integrated OpenTelemetry
          with Azure Application Insights for centralized logging, distributed
          trac-ing, and real-time monitoring, cutting issue resolution time by
          30% and accelerating development cycles
          <br />
          <br />
          <span className="purple">Automated Cloud Infrastructure:</span>Used
          Terraform and Azure DevOps to implement IaC and CI/CD
          pipelines,automating cloud provisioning, reducing manual errors by
          70%, and ensuring reliable deployments via state versioning.
          <br />
          <br />
          <span className="purple">ML Pipeline:</span>Experience in end-to-end
          AI/ML model deployment pipeline using the Vertex AI platform
          (GCP),with model monitoring, alerts, and batch processing pipeline.
          <br />
          <br />
          <span className="purple">LLM Evaluation:</span>Explored large language
          models (LLMs) Evaluation tool like Chakra, Trulens, and Tevals
          toevaluate application performance and driving 15% higher client
          satisfaction.
          <br />
        </p>
      </blockquote>
    </div>
  );
}

export default ThirdWork;
