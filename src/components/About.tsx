export default function About() {
  const highlights = [
    {
      icon: "🤖",
      title: "Agentic AI Systems",
      desc: "Architect multi-agent pipelines using LangGraph cyclic edges, enabling self-healing and autonomous decision loops in production.",
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
    {
      icon: "⚙️",
      title: "Java Backbone",
      desc: "Strong Spring Boot / Kafka microservices foundation enables end-to-end ownership from data ingestion to AI inference in production.",
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
              Enterprise Java engineer{" "}
              <span className="text-gradient">gone deep on AI</span>
            </h2>
            <p className="font-body mb-5" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              My career pivoted at the intersection of high-scale Java engineering and the GenAI wave. After building microservices handling 50M+ daily requests at Walmart Global Tech and 10M+ daily transactions at PayPal, I recognized that the most impactful leverage point was no longer just infrastructure — it was intelligence.
            </p>
            <p className="font-body mb-5" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              At Walmart Health & Wellness, I built HIPAA-compliant pharmacy prescription processing systems — handling real-time bidirectional JSON/XML transformation between pharmacy and insurance systems following NCPDP telecommunication standards. I used Python and GenAI APIs to automate prescription field validation — ensuring data accuracy before insurance submission across high-volume Kafka event pipelines on Kubernetes.
            </p>
            <p className="font-body" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Outside work I build production AI systems — self-healing LangGraph agents, RAG pipelines with Pinecone and ChromaDB, multi-cloud AI pipelines across Azure/AWS/GCP, and agentic workflows using Anthropic Claude. My edge is the full stack: I can architect the Kafka event pipeline, design the RAG retrieval layer, tune the agent prompts, observe LLM accuracy with LangSmith, and deploy to production Kubernetes — without handing off at any seam.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["LangChain", "LangGraph", "AWS Bedrock", "GCP Vertex AI", "Python", "Java 17", "Kafka", "Kubernetes"].map((t) => (
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
