export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            05 / Contact
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Status */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full font-mono text-xs"
          style={{
            background: "rgba(52, 211, 153, 0.08)",
            border: "1px solid rgba(52, 211, 153, 0.25)",
            color: "var(--green)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--green)" }}
          />
          Open to W2 Opportunities · Remote Only · H4-EAD · Immediate Start
        </div>

        <h2
          className="font-display font-bold mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s build{" "}
          <span className="text-gradient">something intelligent</span>
        </h2>

        <p
          className="font-body mb-12 mx-auto"
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "520px",
            lineHeight: 1.8,
          }}
        >
          Looking for an AI automation engineer who builds GenAI pipelines, RAG systems,
          and intelligent workflows — fully remote, available immediately, H4 EAD
          (no sponsorship needed)? Let&apos;s talk.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: "Email",
              value: "vidhyachenji40@gmail.com",
              href: "mailto:vidhyachenji40@gmail.com",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
              label: "LinkedIn",
              value: "linkedin.com/in/vidhyac40",
              href: "https://linkedin.com/in/vidhyac40",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.57v-2.01c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              ),
              label: "GitHub",
              value: "github.com/vidhyachenji40-cmyk",
              href: "https://github.com/vidhyachenji40-cmyk/",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glow-border rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 group"
              style={{ background: "var(--surface)", textDecoration: "none" }}
            >
              <div
                className="p-3 rounded-lg"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  transition: "all 0.2s ease",
                }}
              >
                {c.icon}
              </div>
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: "var(--muted)" }}>
                  {c.label}
                </p>
                <p
                  className="font-body text-sm font-medium"
                  style={{ color: "var(--text)", wordBreak: "break-all" }}
                >
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Phone */}
        <p className="font-mono text-sm" style={{ color: "var(--muted)" }}>
          📞{" "}
          <a href="tel:+12094483663" style={{ color: "var(--accent)" }}>
            +1-209-448-3663
          </a>
        </p>

        <p className="font-mono text-xs mt-6" style={{ color: "var(--muted)" }}>
          © 2026 Vidhya C · AI Automation Engineer · Built with Next.js
        </p>
      </div>
    </section>
  );
}
