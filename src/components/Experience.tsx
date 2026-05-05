const experiences = [
  {
    role: "AI / GenAI Engineer",
    company: "Walmart Health & Wellness",
    via: "via Apex Systems",
    period: "Jun 2025 – Feb 2026",
    location: "Remote",
    type: "AI",
    bullets: [
      "Deployed HIPAA-aligned Generative AI on GCP Vertex AI and Gemini APIs, automating healthcare data mapping workflows and reducing manual effort by 30%",
      "Designed end-to-end Python RAG pipelines and LangGraph agentic workflows with vector embeddings (Pinecone, ChromaDB) to handle complex NCPDP claim transformations",
      "Built LangGraph agent pipelines with LLM observability via LangSmith — monitoring accuracy, detecting hallucinations, and ensuring production reliability",
      "Engineered Kafka-based event-driven Java microservices on Azure AKS/WCNP for high-volume prescription processing within the Billing Order Management platform",
    ],
    stack: ["Python", "GCP Vertex AI", "Gemini APIs", "LangChain", "LangGraph", "LangSmith", "Kafka", "Java 17", "Cosmos DB", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    company: "Intuit",
    via: "via TEK Systems",
    period: "Feb 2025 – May 2025",
    location: "Mountain View, CA",
    type: "Java",
    bullets: [
      "Built secure Java REST APIs and Spring Boot microservices for loan and financial transaction workflows within the QuickBooks Online Payments team",
      "Managed zero-downtime deployments via Azure DevOps CI/CD pipelines with Maven build tooling",
      "Explored LLM-assisted workflow automation for financial process acceleration",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Azure DevOps", "Maven", "SQL Server"],
  },
  {
    role: "Java Backend Developer",
    company: "PayPal",
    via: "via TEK Systems",
    period: "Aug 2024 – Jan 2025",
    location: "San Jose, CA",
    type: "Java",
    bullets: [
      "Contributed migration from C++ to Java for the Account Lifecycle Platform, modernizing core backend services processing 10M+ daily transactions",
      "Developed and maintained REST APIs for account lifecycle and payment workflows with comprehensive unit testing coverage",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "C++", "Unit Testing"],
  },
  {
    role: "Java Microservices Developer",
    company: "Walmart Global Tech",
    via: "via Apex Systems",
    period: "Apr 2022 – Jul 2024",
    location: "Sunnyvale, CA",
    type: "Java",
    bullets: [
      "Built Java Spring Boot microservices for Mexico Checkout Services Unified Promise orchestrator handling 50M+ peak daily requests with high availability",
      "Implemented inventory reservation, membership management, and multi-payment processing (cash, credit cards, PayPal) for Walmart Mexico",
      "Deployed and managed services via Docker and Kubernetes on WCNP with Cassandra backends across dev/stage/production via CI/CD",
    ],
    stack: ["Java", "Spring Boot", "Docker", "Kubernetes", "Cassandra", "WCNP", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "YES BANK",
    via: "",
    period: "2016 – 2017",
    location: "Chennai, India",
    type: "Java",
    bullets: [
      "Automated backend banking processes and financial reporting modules using Java/J2EE with REST service integrations and SQL validation scripts",
    ],
    stack: ["Java", "J2EE", "SQL", "PL/SQL", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            03 / Experience
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)", marginLeft: "7px" }}
          />

          <div className="space-y-10">
            {experiences.map((e, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Dot */}
                <div
                  className="hidden md:block absolute left-0 w-3.5 h-3.5 rounded-full border-2 top-1"
                  style={{
                    borderColor: e.type === "AI" ? "var(--accent)" : "var(--border-bright)",
                    background: e.type === "AI" ? "var(--accent)" : "var(--bg)",
                    boxShadow: e.type === "AI" ? "0 0 12px rgba(56,189,248,0.5)" : "none",
                  }}
                />

                <div
                  className="glow-border rounded-xl p-6 md:p-8"
                  style={{ background: "var(--surface)" }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="font-display font-bold"
                        style={{
                          fontSize: "1.1rem",
                          color: e.type === "AI" ? "var(--accent)" : "var(--text)",
                        }}
                      >
                        {e.role}
                      </h3>
                      <p className="font-body text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                        {e.company}
                        {e.via && (
                          <span className="ml-1" style={{ color: "var(--muted)", opacity: 0.6 }}>
                            {e.via}
                          </span>
                        )}
                        {" · "}
                        {e.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {e.period}
                      </span>
                      {e.type === "AI" && (
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(56,189,248,0.1)",
                            color: "var(--accent)",
                            border: "1px solid rgba(56,189,248,0.25)",
                          }}
                        >
                          AI / GenAI
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: e.type === "AI" ? "var(--accent)" : "var(--muted)" }}
                        />
                        <span className="font-body text-sm" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {e.stack.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "0.65rem" }}>
                        {t}
                      </span>
                    ))}
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
