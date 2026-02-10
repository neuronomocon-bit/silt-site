import "./globals.css";
import React from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata = {
  title: "Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology (SILT) — governance-forward evaluation and documentation for advanced AI systems, including the Sentience Evaluation Battery (S.E.B.).",
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
          background: "var(--bg)",
          color: "var(--text)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "26px 18px 36px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Global masthead */}
          <header
            style={{
              paddingBottom: 10,
              marginBottom: 14,
              borderBottom: "1px solid var(--border)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* Left: Logo + identity (no nested anchors) */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Home link wraps logo + name only */}
              <a
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textDecoration: "none",
                  color: "inherit",
                }}
                aria-label="Go to home page"
              >
                <img
                  src="/SILT_logo symbol only_2026.svg"
                  alt="Sentient Index Labs & Technology"
                  width={56}
                  height={56}
                  className="site-logo"
                  style={{
                    display: "block",
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    fontWeight: 650,
                    letterSpacing: "-0.01em",
                    fontSize: 16,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  Sentient Index Labs &amp; Technology
                </div>
              </a>

              {/* Subtitle stays its own link to Registry */}
              <a
                href="/registry"
                className="registry-link"
                style={{
                  color: "var(--text-muted)",
                  fontSize: 13,
                  lineHeight: 1.2,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Public documentation — Sentience Evaluation Battery (S.E.B.)
              </a>
            </div>

            {/* Right: Primary navigation */}
            <SiteNav />
          </header>

          {/* Page content */}
          <main style={{ flex: 1 }}>{children}</main>

          {/* Global footer */}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
