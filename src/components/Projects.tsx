const projects = [
  {
    id: "01",
    name: "Jenson-Flow",
    subtitle: "Autonomous Marketing & Analytics Engine",
    desc: "A 100% Python self-healing multi-agent system where LangGraph cyclic edges allow agents to auto-detect and remediate SQL failures in real-time. Natural language queries resolve against retail databases through a genre-aware marketing engine that dynamically adapts tone and generates personalized outreach per customer profile.",
    impact: [
      "Self-healing SQL error detection and auto-recovery via agent loops",
      "Genre-aware content generation — personalizes tone per customer archetype",
      "Production polling loop runs every 60 seconds with zero human intervention",
      "LangChain + Anthropic Claude multi-agent architecture",
    ],
    stack: ["Python", "LangGraph", "LangChain", "Gemini 2.0 Flash", "AWS Bedrock", "SQLite", "Anthropic Claude"],
    type: "Open Source",
    accent: "#38bdf8",
    github: "https://github.com/vidhyachenji40-cmyk/",
  },
  {
    id: "02",
    name: "Synapse AI",
    subtitle: "Enterprise Java AI Agent",
    desc: "A production-grade Java 17 Spring Boot AI agent powered by Anthropic Claude Haiku that delivers expert architectural guidance and T-SQL optimization strategies for Azure Synapse Analytics at 5TB+ scale. Features automated AI grounding tests that continuously verify response accuracy against a curated expert knowledge base.",
    impact: [
      "Handles Azure Synapse workloads at 5TB+ data scale",
      "Automated grounding tests verify AI response accuracy against expert KB",
      "CI/CD via GitHub Actions — 100% build success rate maintained",
      "Spring AI integration pattern reusable for any enterprise Java codebase",
    ],
    stack: ["Java 17", "Spring Boot", "Spring AI", "Anthropic Claude Haiku", "Docker", "GitHub Actions", "Maven"],
    type: "Open Source",
    accent: "#818cf8",
    github: "https://github.com/vidhyachenji40-cmyk/",
  },
  {
    id: "03",
    name: "Walmart BOM AI Pipeline",
    subtitle: "HIPAA-Aligned Healthcare Automation",
    desc: "Enterprise Generative AI solution deployed on GCP Vertex AI for healthcare data mapping automation at Walmart Health & Wellness. LangGraph agents orchestrate complex prescription claim transformations compliant with NCPDP Telecom Standard (D0/F6), with full LLM observability and hallucination detection via LangSmith.",
    impact: [
      "30% reduction in manual healthcare data processing effort",
      "HIPAA-aligned and NCPDP Telecom Standard (D0/F6) compliant",
      "LangSmith tracing monitors agent accuracy and detects hallucinations",
      "Kafka event-driven pipeline handling high-volume prescription claims",
    ],
    stack: ["Python", "GCP Vertex AI", "Gemini APIs", "LangGraph", "LangSmith", "Kafka", "Cosmos DB", "Azure AKS"],
    type: "Production",
    accent: "#34d399",
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            02 / Featured Work
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="glow-border rounded-xl overflow-hidden"
              style={{ background: "var(--surface)" }}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.id}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          background: p.type === "Production"
                            ? "rgba(52, 211, 153, 0.1)"
                            : "rgba(56, 189, 248, 0.1)",
                          color: p.type === "Production" ? "var(--green)" : "var(--accent)",
                          border: `1px solid ${p.type === "Production" ? "rgba(52,211,153,0.25)" : "rgba(56,189,248,0.25)"}`,
                        }}
                      >
                        {p.type}
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                        color: p.accent,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.name}
                    </h3>
                    <p className="font-body text-sm mt-1" style={{ color: "var(--muted)" }}>
                      {p.subtitle}
                    </p>
                  </div>

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.57v-2.01c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>

                <p className="font-body text-sm mb-6" style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                  {p.desc}
                </p>

                {/* Impact bullets */}
                <div className="mb-6">
                  <p className="font-mono text-xs mb-3" style={{ color: "var(--muted)", letterSpacing: "0.08em" }}>
                    KEY OUTCOMES
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {p.impact.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.accent }} />
                        <span className="font-body text-sm" style={{ color: "var(--text)", opacity: 0.8 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
