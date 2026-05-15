export default function About() {
  const highlights = [
    {
      icon: "🔄",
      title: "AI Automation & Low-Code",
      desc: "Build end-to-end AI automation workflows using n8n, Make, Zapier, Flowise, and LangFlow — connecting LLMs to business systems without friction.",
    },
    {
      icon: "🤖",
      title: "Agentic AI Systems",
      desc: "Architect multi-agent pipelines using LangGraph cyclic edges, enabling self-healing and autonomous decision loops that run without human intervention.",
    },
    {
      icon: "🔬",
      title: "RAG & Vector Search",
      desc: "Design retrieval-augmented generation pipelines with Pinecone, ChromaDB, and FAISS — grounding LLM outputs with enterprise knowledge bases.",
    },
    {
      icon: "☁️",
      title: "Cloud-Native AI",
      desc: "Deploy HIPAA-compliant AI on AWS Bedrock, GCP Vertex AI, and Azure AKS — integrating Claude, Gemini, and Titan models at scale.",
    },
  ];

  return (
    <section id="about" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            01 / About
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              AI Automation Engineer{" "}
              <span className="text-gradient">building intelligent workflows</span>
            </h2>
            <p className="font-body mb-5" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              I build AI automation systems that eliminate manual work at scale. Starting from a strong
              Java engineering foundation at Walmart, PayPal, and Intuit, I have shifted fully into
              GenAI — building LangGraph agents, RAG pipelines, and multi-agent workflows that run
              autonomously in production.
            </p>
            <p className="font-body mb-5" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              At Walmart Health &amp; Wellness, I contributed to HIPAA-compliant AI systems using
              Python, LangGraph, and GCP Vertex AI to automate pharmacy prescription processing —
              validating claim data across high-volume Kafka pipelines before insurance submission.
            </p>
            <p className="font-body" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              My automation stack spans both code-first and low-code tools — LangChain, LangGraph,
              RAG with Pinecone and ChromaDB, and platforms like n8n, Make, Zapier, and Flowise.
              I focus on stable, remote roles where I can build and own AI systems end-to-end,
              delivering real business value without the chaos.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["LangChain", "LangGraph", "n8n", "Make", "RAG", "Python", "AWS Bedrock", "GCP Vertex AI"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: highlights */}
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glow-border rounded-lg p-5 transition-all duration-300"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{h.icon}</span>
                  <div>
                    <h3
                      className="font-display font-semibold mb-1"
                      style={{ fontSize: "0.95rem", color: "var(--text)" }}
                    >
                      {h.title}
                    </h3>
                    <p className="font-body text-sm" style={{ color: "var(--muted)" }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
