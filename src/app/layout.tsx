import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology (SILT) develops evaluation and governance methodologies for advanced AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial',
          color: "#0b0b0b",
          background: "#ffffff",
        }}
      >
        {/* Header */}
        <header
          style={{
            borderBottom: "1px solid #e7e7e7",
            padding: "18px 0",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 18px",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>
                Sentient Index Labs &amp; Technology
              </div>
              <div style={{ fontSize: 13, color: "#5a5a5a" }}>
                Evaluation · Governance · Standards
              </div>
            </div>

            <nav
              style={{
                display: "flex",
                gap: 16,
                fontSize: 14,
                color: "#5a5a5a",
                flexWrap: "wrap",
              }}
            >
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/methodology">Methodology</a>
              <a href="/resources">Resources</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "40px 18px",
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #e7e7e7",
            marginTop: 60,
            padding: "18px 0",
            fontSize: 13,
            color: "#5a5a5a",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 18px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              © {new Date().getFullYear()} Sentient Index Labs &amp; Technology
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
