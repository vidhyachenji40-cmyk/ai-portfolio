export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: "1px solid var(--border)", zIndex: 1, position: "relative" }}
    >
      <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
        © 2026 Vidhya C · Built with Next.js · AI / GenAI Engineer
      </p>
    </footer>
  );
}
