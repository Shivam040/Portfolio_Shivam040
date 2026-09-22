import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Dangwal | Agentic AI & AI Engineer",

  description:
    "Portfolio of Shivam Dangwal — Agentic AI and AI Engineer building multi-agent LLM systems with LangGraph, MCP, RAG, FastAPI, evaluation, human-in-the-loop workflows, observability, and production AI infrastructure.",

  keywords: [
    "Shivam Dangwal",
    "Agentic AI",
    "Agentic AI Engineer",
    "AI Engineer",
    "GenAI Engineer",
    "LLM Engineer",
    "LangGraph",
    "MCP",
    "Model Context Protocol",
    "RAG",
    "Multi-Agent Systems",
    "FastAPI",
    "Python",
    "Human in the Loop",
    "LLM Evaluation",
    "Artificial Intelligence",
    "Machine Learning",
  ],

  authors: [
    {
      name: "Shivam Dangwal",
    },
  ],

  creator: "Shivam Dangwal",

  openGraph: {
    title: "Shivam Dangwal | Agentic AI & AI Engineer",
    description:
      "Building reliable multi-agent LLM systems with LangGraph, MCP, RAG, evaluation, FastAPI, and production engineering.",
    type: "website",
    url: "https://portfolio-shivam040.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}