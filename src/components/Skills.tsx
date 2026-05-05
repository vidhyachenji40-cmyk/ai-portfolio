const skillGroups = [
  {
    category: "GenAI & LLMs",
    color: "#38bdf8",
    skills: [
      "AWS Bedrock (Claude, Titan, Agents)",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "RAG Pipelines",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Agentic AI",
      "MCP Protocol",
      "Function Calling",
      "LLM Evaluation",
      "Gemini APIs",
      "Anthropic Claude",
      "Vertex AI",
    ],
  },
  {
    category: "Vector & Search",
    color: "#818cf8",
    skills: [
      "Pinecone",
      "ChromaDB",
      "FAISS",
      "OpenSearch",
      "Semantic Search",
      "Embeddings",
    ],
  },
  {
    category: "Java & Backend",
    color: "#34d399",
    skills: [
      "Java 17/21",
      "Spring Boot",
      "Spring AI",
      "REST APIs",
      "Microservices",
      "Kafka",
      "Event-Driven Architecture",
    ],
  },
  {
    category: "Cloud & MLOps",
    color: "#fbbf24",
    skills: [
      "AWS (Bedrock, Lambda, S3)",
      "GCP Vertex AI",
      "Azure AKS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "MLOps",
    ],
  },
  {
    category: "Databases",
    color: "#f87171",
    skills: [
      "PostgreSQL",
      "Cassandra",
      "Cosmos DB",
      "MongoDB",
      "BigQuery",
      "Oracle",
      "SQL Server",
    ],
  },
  {
    category: "Languages",
    color: "#38bdf8",
    skills: ["Python", "Java", "SQL / PL-SQL", "TypeScript", "Pandas"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            04 / Skills
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Compliance highlight */}
        <div
          className="mb-12 p-5 rounded-xl flex items-start gap-4"
          style={{
            background: "rgba(52, 211, 153, 0.05)",
            border: "1px solid rgba(52, 211, 153, 0.2)",
          }}
        >
          <span className="text-2xl">🛡️</span>
          <div>
            <h3
              className="font-display font-semibold mb-1"
              style={{ fontSize: "0.95rem", color: "var(--green)" }}
            >
              Enterprise AI Compliance
            </h3>
            <p className="font-body text-sm" style={{ color: "var(--muted)" }}>
              HIPAA-aligned AI systems · NCPDP Telecom Standard (D0/F6) · Enterprise AI Governance · Secure API Design
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.category}
              className="glow-border rounded-xl p-6"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: g.color, boxShadow: `0 0 8px ${g.color}` }}
                />
                <h3
                  className="font-display font-semibold text-sm"
                  style={{ color: g.color }}
                >
                  {g.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: `${g.color}10`,
                      color: "var(--text)",
                      border: `1px solid ${g.color}22`,
                      opacity: 0.9,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
