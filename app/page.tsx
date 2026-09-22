const skills = [
  {
    title: "Agentic AI",
    items: [
      "LangGraph",
      "LangChain",
      "MCP",
      "FastMCP",
      "Tool Calling",
      "Multi-Agent Systems",
      "Human-in-the-Loop",
      "Agent State & Memory",
      "LLM Evaluation",
    ],
  },
  {
    title: "RAG & LLM Systems",
    items: [
      "Semantic RAG",
      "Semantic Search",
      "Vector Retrieval",
      "Embeddings",
      "Prompt Engineering",
      "Ollama",
      "Qwen",
      "Hugging Face",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Pydantic",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Production & MLOps",
    items: [
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "LangSmith",
      "Git",
      "AWS",
      "CI/CD",
      "Structured Logging",
    ],
  },
  {
    title: "ML & Core CS",
    items: [
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "C++",
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Agentic Incident Commander",
    subtitle: "Multi-Agent SRE Incident Response Platform",
    description:
      "A production-oriented multi-agent incident-response system that investigates service telemetry, performs structured root-cause analysis, retrieves operational runbooks, plans remediation, and enforces explicit human approval before any state-changing action.",
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "MCP",
      "FastMCP",
      "FastAPI",
      "Pydantic",
      "Semantic RAG",
      "Ollama",
      "Qwen3",
      "SQLite",
      "Prometheus",
      "LangSmith",
      "Docker",
      "GitHub Actions",
    ],
    metrics: [
      {
        value: "93.3%",
        label: "Remediation-action accuracy",
      },
      {
        value: "90%",
        label: "RCA case-pass rate",
      },
      {
        value: "100%",
        label: "Top-2 runbook retrieval",
      },
      {
        value: "100%",
        label: "Safety compliance",
      },
    ],
    bullets: [
      "LangGraph-based orchestration across supervisor, telemetry, RCA, retrieval, remediation-planning, HITL, trusted-executor, and reporting nodes.",
      "MCP tool calling for service metrics, logs, semantic runbook retrieval, and simulated remediation.",
      "SQLite-backed LangGraph checkpoints for durable state and approve/reject workflow resumption.",
      "30 golden incidents covering 29 services and five failure classes.",
      "29 deterministic regression tests with hardened Docker and CI validation.",
    ],
    github:
      "https://github.com/Shivam040/Agentic-Incident-Commander",
  },
  {
    number: "02",
    title: "Agentic Multi-Document Research Assistant",
    subtitle: "Evaluated Multi-Agent RAG System",
    description:
      "A three-agent research system with specialized Query Router, Retrieval, and Synthesis agents for grounded reasoning across multiple documents with semantic retrieval, source citations, MCP tools, and production observability.",
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "MCP",
      "FastMCP",
      "FastAPI",
      "Streamlit",
      "Semantic RAG",
      "SQLite",
      "Ollama",
      "Qwen3",
      "Prometheus",
      "LangSmith",
      "Docker",
    ],
    metrics: [
      {
        value: "100%",
        label: "Routing accuracy",
      },
      {
        value: "1.00",
        label: "MRR",
      },
      {
        value: "100%",
        label: "Citation precision",
      },
      {
        value: "100%",
        label: "MCP success",
      },
    ],
    bullets: [
      "Hybrid deterministic + LLM query routing across direct-answer and retrieval workflows.",
      "Persistent semantic RAG for PDF, TXT, and OCR-readable images.",
      "Custom SQLite vector store with metadata-preserving Top-K retrieval.",
      "Evaluated on a 40-query golden dataset with 100% Hit@1, Hit@3, and Hit@5.",
      "53 deterministic regression tests with Docker Compose and GitHub Actions CI.",
    ],
    github:
      "https://github.com/Shivam040/Agentic-Multi-Document-Research-Assistant",
  },
];

const previousProjects = [
  {
    title: "Kharagpur Data Science Hackathon",
    subtitle: "Knowledge Graph + Logic Reasoning",
    description:
      "End-to-end submission for KDSH Track A focused on evidence-grounded reasoning over long narrative data using knowledge-graph constraints and logic-driven validation.",
    stack: [
      "Knowledge Graph",
      "Long-Context Reasoning",
      "Logic",
      "Python",
      "Docker",
    ],
    github:
      "https://github.com/Shivam040/KHARAGPUR-DATA-SCIENCE-HACKATHON",
  },
  {
    title: "Aviation Reliability Enhancement",
    subtitle: "Fault Detection & Predictive Maintenance",
    description:
      "ML/DL-based predictive-maintenance system for aviation electrical and sensor faults, framing reliability monitoring as a Fault Detection & Isolation problem using telemetry-style data.",
    stack: [
      "Machine Learning",
      "Deep Learning",
      "Fault Detection",
      "Time Series",
      "Predictive Maintenance",
    ],
    github:
      "https://github.com/Shivam040/Aviation-Reliability-Enhancement-Using-Predictive-Analysis-of-Electrical-and-Sensor-Faults",
  },
  {
    title: "Mental Health Assessment",
    subtitle: "BERT-Powered NLP Web Application",
    description:
      "Symptom-based mental-health screening application using a fine-tuned BERT classifier across multiple categories, with confidence visualization and report generation.",
    stack: [
      "BERT",
      "NLP",
      "Hugging Face",
      "Flask",
      "MongoDB",
    ],
    github:
      "https://github.com/Shivam040/mental_health",
  },
  {
    title: "AiInterTask",
    subtitle: "GenAI Multi-Document Q&A",
    description:
      "Multi-document question-answering system with PDF/TXT ingestion, OCR for scanned documents, chunking, indexing, retrieval, and grounded answer synthesis through an API-first pipeline.",
    stack: [
      "RAG",
      "OCR",
      "Vector Search",
      "FastAPI",
      "Docker",
    ],
    github:
      "https://github.com/Shivam040/wasserstoff",
    live: "https://wasserstoff-px5k.onrender.com/",
  },
];

const achievements = [
  {
    value: "AIR 2412",
    title: "GATE DA 2026",
    description: "GATE Data Science & Artificial Intelligence",
  },
  {
    value: "21 / 3,349",
    title: "Fibe Hack the Vibe",
    description: "Machine Learning Challenge",
  },
  {
    value: "2 Years",
    title: "IEEE GBPIET",
    description: "Webmaster",
  },
];

const certifications = [
  "Google Cloud Gen AI Exchange Program",
  "IIT Kharagpur — NPTEL Deep Learning",
  "IIT Madras — NPTEL Introduction to Machine Learning",
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SD<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="navGithub"
          href="https://github.com/Shivam040"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="heroContent">
          <p className="eyebrow">HELLO, I&apos;M</p>

          <h1>
            Shivam
            <br />
            <span>Dangwal.</span>
          </h1>

          <h2>Agentic AI / AI Engineer</h2>

          <p className="heroDescription">
            I build reliable, production-oriented AI agents and LLM systems
            using multi-agent orchestration, MCP, RAG, tool calling,
            human-in-the-loop workflows, evaluation, backend engineering, and
            observability.
          </p>

          <div className="heroTags">
            <span>Python</span>
            <span>LangGraph</span>
            <span>MCP</span>
            <span>RAG</span>
            <span>FastAPI</span>
            <span>Docker</span>
          </div>

          <div className="heroButtons">
            <a className="primaryButton" href="#projects">
              Explore my work ↓
            </a>

            <a
              className="secondaryButton"
              href="https://github.com/Shivam040"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              className="secondaryButton"
              href="https://www.linkedin.com/in/shivam-dangwal04/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="heroSide">
          <div className="terminalCard">
            <div className="terminalTop">
              <div className="terminalDots">
                <span />
                <span />
                <span />
              </div>
              <span>agent.py</span>
            </div>

            <div className="terminalCode">
              <p>
                <span className="codePurple">class</span>{" "}
                <span className="codeBlue">AgenticEngineer</span>:
              </p>
              <p className="indent">
                focus ={" "}
                <span className="codeGreen">
                  &quot;production AI systems&quot;
                </span>
              </p>
              <p className="indent">
                tools = [
                <span className="codeGreen">&quot;LangGraph&quot;</span>,{" "}
                <span className="codeGreen">&quot;MCP&quot;</span>,{" "}
                <span className="codeGreen">&quot;RAG&quot;</span>]
              </p>
              <p className="indent">
                principles = [
                <span className="codeGreen">&quot;evaluate&quot;</span>,{" "}
                <span className="codeGreen">&quot;observe&quot;</span>,{" "}
                <span className="codeGreen">&quot;control&quot;</span>]
              </p>
              <br />
              <p>
                <span className="codeGray"># Build agents that can</span>
              </p>
              <p>
                <span className="codeGray">
                  # actually survive production.
                </span>
              </p>
            </div>
          </div>

          <div className="statusBox">
            <span className="statusDot" />
            <div>
              <strong>Open to opportunities</strong>
              <p>Agentic AI · AI Engineer · GenAI Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section contentSection" id="about">
        <div className="sectionHeading">
          <span>01</span>
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2>Building AI systems beyond the chatbot.</h2>
          </div>
        </div>

        <div className="aboutGrid">
          <div className="aboutPrimary">
            <p>
              I&apos;m a <strong>Computer Science (AI & ML) graduate</strong>{" "}
              focused on Agentic AI and production-oriented LLM systems.
            </p>

            <p>
              I&apos;m interested in agents that do more than generate text:
              systems that maintain state, call tools, retrieve grounded
              evidence, coordinate specialized workflows, request human
              approval when required, and can be measured against explicit
              success criteria.
            </p>

            <p>
              My recent work includes a multi-agent incident-response platform
              using LangGraph and MCP, and an evaluated multi-document research
              system combining semantic RAG, citations, tool calling,
              persistent state, observability, APIs, testing, and CI/CD.
            </p>

            <p>
              Earlier, I worked as an{" "}
              <strong>Adversarial Machine Learning Intern at DRDO&apos;s</strong>{" "}
              Scientific Analysis Group, where I developed a Python-based
              framework for evaluating CNN robustness against adversarial
              attacks.
            </p>
          </div>

          <div className="aboutFacts">
            <div className="fact">
              <span>Focus</span>
              <strong>Agentic AI</strong>
            </div>

            <div className="fact">
              <span>Education</span>
              <strong>B.Tech CSE (AI & ML)</strong>
            </div>

            <div className="fact">
              <span>Location</span>
              <strong>India</strong>
            </div>

            <div className="fact">
              <span>Primary Language</span>
              <strong>Python</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section contentSection" id="projects">
        <div className="sectionHeading">
          <span>02</span>
          <div>
            <p className="eyebrow">FEATURED PROJECTS</p>
            <h2>Systems I&apos;ve engineered and evaluated.</h2>
          </div>
        </div>

        <div className="projectsList">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectHeader">
                <div>
                  <span className="projectNumber">{project.number}</span>
                  <h3>{project.title}</h3>
                  <p className="projectSubtitle">{project.subtitle}</p>
                </div>

                <a
                  className="githubButton"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository ↗
                </a>
              </div>

              <p className="projectDescription">{project.description}</p>

              <div className="metricsGrid">
                {project.metrics.map((metric) => (
                  <div className="metricCard" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="projectBody">
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="previousProjectsSection">
        <div className="previousProjectsHeading">
          <p className="eyebrow">SELECTED PREVIOUS PROJECTS</p>

          <h3>Earlier work across ML, NLP, RAG, and applied AI.</h3>

          <p>
            A selection of projects that shaped my foundations in machine learning,
            deep learning, NLP, retrieval systems, and applied AI engineering.
          </p>
        </div>

        <div className="previousProjectsGrid">
          {previousProjects.map((project) => (
            <article
              className="previousProjectCard"
              key={project.title}
            >
              <div className="previousProjectTop">
                <div>
                  <h3>{project.title}</h3>
                  <p className="previousProjectSubtitle">
                    {project.subtitle}
                  </p>
                </div>

                <span className="previousProjectArrow">
                  ↗
                </span>
              </div>

              <p className="previousProjectDescription">
                {project.description}
              </p>

              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="previousProjectLinks">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                {"live" in project && project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <section className="section contentSection" id="experience">
        <div className="sectionHeading">
          <span>03</span>
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Where I&apos;ve applied AI in practice.</h2>
          </div>
        </div>

        <div className="experienceCard">
          <div className="experienceTop">
            <div>
              <p className="experienceCompany">
                Defence Research and Development Organisation
              </p>
              <h3>Adversarial Machine Learning Intern</h3>
              <p>Scientific Analysis Group Lab · Delhi</p>
            </div>

            <span className="dateBadge">Jan 2025 — Mar 2025</span>
          </div>

          <ul>
            <li>
              Developed a Python-based adversarial evaluation framework using
              IBM Adversarial Robustness Toolbox.
            </li>
            <li>
              Benchmarked six CNN architectures to analyze their behaviour
              under adversarial conditions.
            </li>
            <li>
              Worked on systematic robustness evaluation rather than relying
              only on conventional model accuracy.
            </li>
          </ul>

          <div className="stack">
            <span>Python</span>
            <span>Adversarial ML</span>
            <span>ART</span>
            <span>CNNs</span>
            <span>Machine Learning</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section contentSection" id="skills">
        <div className="sectionHeading">
          <span>04</span>
          <div>
            <p className="eyebrow">TECHNICAL STACK</p>
            <h2>What I use to build AI systems.</h2>
          </div>
        </div>

        <div className="skillsGrid">
          {skills.map((group) => (
            <div className="skillCard" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skillItems">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section contentSection">
        <div className="sectionHeading">
          <span>05</span>
          <div>
            <p className="eyebrow">ACHIEVEMENTS</p>
            <h2>A few milestones along the way.</h2>
          </div>
        </div>

        <div className="achievementsGrid">
          {achievements.map((achievement) => (
            <div className="achievementCard" key={achievement.title}>
              <strong>{achievement.value}</strong>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section contentSection">
        <div className="sectionHeading">
          <span>06</span>
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2>Academic background.</h2>
          </div>
        </div>

        <div className="educationCard">
          <div>
            <p className="experienceCompany">
              GB Pant Institute of Engineering and Technology
            </p>
            <h3>B.Tech in Computer Science — AI & Machine Learning</h3>
            <p>2022 — 2026</p>
          </div>

          <div className="educationScore">
            <span>CGPA</span>
            <strong>7.55 / 10</strong>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section contentSection">
        <div className="sectionHeading">
          <span>07</span>
          <div>
            <p className="eyebrow">CERTIFICATIONS</p>
            <h2>Continuous learning.</h2>
          </div>
        </div>

        <div className="certificationList">
          {certifications.map((certification, index) => (
            <div className="certificationItem" key={certification}>
              <span>0{index + 1}</span>
              <p>{certification}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contactSection" id="contact">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>

        <h2>
          Interested in Agentic AI,
          <br />
          LLM systems, or AI engineering?
        </h2>

        <p className="contactText">
          I&apos;m open to AI Engineer, Agentic AI, GenAI, and related
          software-engineering opportunities.
        </p>

        <div className="contactButtons">
          <a
            className="primaryButton"
            href="mailto:dangwalshivam04@gmail.com"
          >
            Email me ↗
          </a>

          <a
            className="secondaryButton"
            href="https://www.linkedin.com/in/shivam-dangwal04/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            className="secondaryButton"
            href="https://github.com/Shivam040"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>Shivam Dangwal</strong>
          <p>Agentic AI / AI Engineer</p>
        </div>

        <p>Built with Next.js · © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}