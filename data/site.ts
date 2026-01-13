export type Experience = {
  org: string;
  role: string;
  date: string;
  description: string;
  link?: { label: string; href: string };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export type Certification = {
  title: string;
  href: string;
};

export type HackathonPhoto = {
  src: string;
  alt: string;
};

export type HackathonSection = {
  title: string;
  subtitle?: string;
  photos: HackathonPhoto[]; // keep exactly 9
};

export const site = {
  name: "Shivam Dangwal",
  headline:
    "ML/DL + GenAI engineer focused on robust models, practical deployments, and clean end-to-end systems.",
  npx: "npx shivam040",
  about: [
    "B.Tech (CSE — AI & ML), GB Pant Institute of Engineering and Technology (2022–2026).",
    "Ex-intern @ DRDO SAG (Delhi) working on adversarial robustness for CNN classifiers using IBM ART across multiple architectures, threat models, and defenses.",
    "I build applied projects across GenAI (multi-document Q&A), cloud deployments on GCP (Cloud Run, Firestore, Pub/Sub, Vertex AI), and data-driven ML (tabular modeling + evaluation).",
  ].join("\n\n"),

  experience: [
    {
      org: "Defence Research and Development Organisation (DRDO)",
      role: "Adversarial Machine Learning Intern — Scientific Analysis Group (SAG), Delhi",
      date: "Jan 2025 – Mar 2025",
      description:
        "• Benchmarked adversarial robustness of CNN image classifiers using IBM ART across multiple architectures (MobileNet, ResNet, Xception, VGG, LeNet, and custom CNNs).\n" +
        "• Implemented and evaluated threat models including evasion, model extraction, and data poisoning; analyzed robustness vs accuracy trade-offs.\n" +
        "• Applied defenses such as adversarial training, feature squeezing, Gaussian augmentation, and JPEG compression; documented comparative findings for internal reporting.",
      link: { label: "DRDO", href: "https://www.drdo.gov.in/" },
    },
    {
      org: "Institute of Electrical and Electronics Engineers (IEEE)",
      role: "Web Master — IEEE GBPIET",
      date: "Nov 2023 – Present",
      description:
        "Maintain and update the student branch web presence; publish event/initiative updates and keep resources organized for members.",
      link: { label: "IEEE", href: "https://www.ieee.org/" },
    },
  ] satisfies Experience[],

  certifications: [
    {
      title: "Google Cloud — GenAI Exchange Program",
      href: "https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A01422",
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      href: "https://www.skills.google/public_profiles/86bb3e60-af50-4d75-b0fa-13c31e192ef3/badges/15468073?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Explore Generative AI with the Gemini API in Vertex AI",
      href: "https://www.skills.google/public_profiles/86bb3e60-af50-4d75-b0fa-13c31e192ef3/badges/15537710?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      href: "https://www.skills.google/public_profiles/86bb3e60-af50-4d75-b0fa-13c31e192ef3/badges/15532875?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Build Real World AI Applications with Gemini and Imagen",
      href: "https://www.skills.google/public_profiles/86bb3e60-af50-4d75-b0fa-13c31e192ef3/badges/14975300?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "IIT Kharagpur — Deep Learning",
      href: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs114/Course/NPTEL24CS114S75030053904299291.pdf",
    },
    {
      title: "IIT Madras — Introduction to Machine Learning",
      href: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs51/Course/NPTEL24CS51S65420032430717312.pdf",
    },
  ] satisfies Certification[],

  skills: [
    "Probability & Statistics",
    "Linear Algebra",
    "Calculus & Optimization",
    "Python",
    "C++ (OOP, DSA)",
    "SQL",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch (learning)",
    "Hugging Face",
    "Reinforcement Learning (basics)",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "ydata-profiling",
    "pdfplumber",
    "pytesseract",
    "Cloud Run",
    "Firestore",
    "Pub/Sub",
    "Cloud Storage",
    "BigQuery",
    "Vertex AI",
    "Docker",
    "Git",
  ],

  projects: [
        {
      title: "Kharagpur Data Science Hackathon — Track A (KG + Logic)",
      description:
        "End-to-end submission codebase for KDSH Track A, focused on evidence-grounded reasoning over long narrative data. Includes a documented workflow for knowledge-graph constraints + logic-driven checks, plus a Python/Docker implementation scaffold.",
      image: "/projects/kds-hackathon.svg",
      tags: ["KDSH", "Long-Context", "Knowledge Graph", "Logic", "Docker"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Shivam040/KHARAGPUR-DATA-SCIENCE-HACKATHON.git",
        },
      ],
    },
    {
      title: "Aviation Reliability Enhancement — Fault Prediction (FDI)",
      description:
        "Predictive maintenance project for aviation electrical + sensor faults, framing the task as Fault Detection & Isolation (FDI) using ML/DL on publicly available telemetry-style datasets. Built to support early fault detection and reliability monitoring.",
      image: "/projects/aviation-fdi.svg",
      tags: [
        "Predictive Maintenance",
        "Fault Detection",
        "Time Series",
        "Machine Learning",
        "Deep Learning",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Shivam040/Aviation-Reliability-Enhancement-Using-Predictive-Analysis-of-Electrical-and-Sensor-Faults.git",
        },
      ],
    },
    {
      title: "Mental Health Assessment — BERT-Powered Web App",
      description:
        "Web app that screens mental health status via a symptom-based questionnaire and generates a report. Uses a fine-tuned BERT classifier across multiple mental health categories and visualizes confidence scores; built with Flask + MongoDB.",
      image: "/projects/mental-health-bert.svg",
      tags: ["BERT", "NLP", "Flask", "MongoDB", "Web App"],
      links: [
        { label: "GitHub", href: "https://github.com/Shivam040/mental_health.git" },
      ],
    },
    {
      title: "AiInterTask — GenAI Multi-Document Chat",
      description:
        "Multi-document Q&A system with ingestion (PDF/TXT), OCR for scanned pages, chunking + indexing, retrieval, and answer synthesis. Built as an API-first pipeline and deployed as a web service for interactive querying.",
      image: "/projects/aiintertask.svg",
      tags: ["RAG", "OCR", "Vector Search", "FastAPI", "Docker"],
      links: [
        { label: "Live", href: "https://wasserstoff-px5k.onrender.com/" },
        { label: "GitHub", href: "https://github.com/Shivam040/wasserstoff" },
      ],
    },
    // {
    //   title: "Adversarial Machine Learning (CNN Robustness Notebooks)",
    //   description:
    //     "Hands-on adversarial ML notebooks exploring attacks and robustness on common vision datasets (MNIST/CIFAR/ImageNet). Built during/around DRDO SAG work to validate and compare approaches.",
    //   image: "/projects/project-2.svg",
    //   tags: ["Adversarial ML", "CNN", "Robustness", "Notebook"],
    //   links: [{ label: "GitHub", href: "https://github.com/Shivam040/Adversarial-Machine-Learning" }],
    // },
    {
      title: "AI Artisan Marketplace (GCP + Vertex AI)",
      description:
        "Multilingual marketplace prototype with product ingestion, publishing workflows, and AI-generated product stories/marketing assets (Vertex AI). Deployed backend on Cloud Run with Firestore/Cloud Storage + Pub/Sub for async processing.",
      image: "/projects/artisan-marketplace.svg",
      tags: ["GCP", "Cloud Run", "Firestore", "Pub/Sub", "Vertex AI"],
      links: [],
    },
    {
      title: "RoleMap — SHL Assessment Matcher",
      description:
        "Streamlit app to match job descriptions (typed or URL-based) with SHL assessments using Gemini Pro + cosine similarity. Scraped SHL course/catalog data via Selenium to power matching.",
      image: "/projects/rolemap.svg",
      tags: ["Streamlit", "Gemini", "Selenium", "Similarity Search"],
      links: [],
    },
    {
      title: "Convolve — Credit Card Risk (\"Black Flag\") Classifier",
      description:
        "Tabular ML pipeline with EDA (ydata-profiling), visualization (decile chart), clustering (HDBSCAN), PCA, and models (Random Forest, XGBoost, LightGBM). Reported 97.8% accuracy, weighted F1=0.977, test AUC=0.90.",
      image: "/projects/convolve-risk.svg",
      tags: ["XGBoost", "LightGBM", "Random Forest", "EDA", "Evaluation"],
      links: [],
    },
  ] satisfies Project[],


  
  hackathon: {
    title: "Hackathon",
    subtitle: "A few moments from hackathon work, demos, and team snapshots.",
    photos: [
      { src: "/hackathon/Linkedin 1.jpg", alt: "Hackathon photo 1" },
      { src: "/hackathon/Linkedin 2.jpg", alt: "Hackathon photo 2" },
      { src: "/hackathon/Linkedin 3.jpg", alt: "Hackathon photo 3" },
      { src: "/hackathon/Linkedin 4.jpg", alt: "Hackathon photo 4" },
      { src: "/hackathon/Linkedin 5.jpg", alt: "Hackathon photo 5" },
      { src: "/hackathon/Linkedin 6.jpg", alt: "Hackathon photo 6" },
      { src: "/hackathon/Linkedin 7.jpg", alt: "Hackathon photo 7" },
      { src: "/hackathon/Linkedin 8.jpg", alt: "Hackathon photo 8" },
      { src: "/hackathon/Linkedin 9.jpg", alt: "Hackathon photo 9" },
    ],
  } satisfies HackathonSection,

  socials: [
    { label: "GitHub", href: "https://github.com/Shivam040" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivam-dangwal04/" },
  ],

  footer: {
    creditText:
      "One-page portfolio layout inspired by the reference site. Replace placeholder images and add your certificate/repo links as needed.",
  },
};
