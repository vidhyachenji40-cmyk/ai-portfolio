import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidhya C — AI / GenAI Engineer",
  description: "Enterprise AI Engineer specializing in LangChain, LangGraph, AWS Bedrock, RAG pipelines, and multi-agent systems. 7+ years building production-grade AI at Walmart & PayPal.",
  keywords: ["AI Engineer", "GenAI", "LangChain", "LangGraph", "RAG", "AWS Bedrock", "Multi-Agent Systems"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
