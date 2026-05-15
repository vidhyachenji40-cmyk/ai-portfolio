"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ zIndex: 0, opacity: 0.7 }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
          zIndex: 1,
        }}
      />

      <div className="relative text-center px-6 max-w-5xl mx-auto" style={{ zIndex: 2 }}>
        {/* Status badge */}
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
          Available for W2 Roles · Remote Only · H4-EAD · Immediate Start
        </div>

        {/* Name */}
        <h1
          className="font-display mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Vidhya{" "}
          <span className="text-gradient">C</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display mb-6"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
            color: "var(--muted)",
            letterSpacing: "-0.01em",
          }}
        >
          I automate complex workflows with{" "}
          <span style={{ color: "var(--accent)" }}>AI</span>{" "}
          — so your team focuses on{" "}
          <span style={{ color: "var(--green)" }}>what matters</span>
        </p>

        <p
          className="font-body mb-10 mx-auto"
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "580px",
            lineHeight: 1.8,
          }}
        >
          AI Automation Engineer building GenAI pipelines, RAG systems, and intelligent workflows
          — LangChain, LangGraph, n8n, Make · 7+ years engineering · H4 EAD · Remote · Available Now
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#projects" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/vidhyac40"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-px mx-auto rounded-lg overflow-hidden"
          style={{
            maxWidth: "640px",
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
        >
          {[
            { value: "7+", label: "Years Eng." },
            { value: "100K+", label: "Claims/Day (AI)" },
            { value: "4", label: "AI Projects" },
            { value: "H4 EAD", label: "No Sponsorship" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 flex flex-col items-center py-4 px-3"
              style={{ background: "var(--surface)", minWidth: "120px" }}
            >
              <span
                className="font-display text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {s.value}
              </span>
              <span className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
