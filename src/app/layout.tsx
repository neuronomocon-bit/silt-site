import React from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata = {
  title: "Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology (SILT) — governance-forward evaluation and documentation for advanced AI systems, including the Sentience Evaluation Battery (S.E.B.).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#ffffff",
          color: "#111111",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "28px 18px 36px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Global masthead */}
          <header
            style={{
              paddingBottom: 14,
              marginBottom: 18,
              borderBottom: "1px solid #e7e7e7",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <a
                href="/"
                style={{
                  color: "#111",
                  textDecoration: "none",
                  fontWeight: 650,
                  letterSpacing: "-0.01em",
                  fontSize: 16,
                  whiteSpace: "nowrap",
                }}
              >
                Sentient Index Labs &amp; Technology
              </a>
              <span style={{ color: "#b0b0b0" }}>·</span>
              <span style={{ color: "#6a6a6a", fontSize: 13 }}>
                Public documentation
              </span>
            </div>

            {/* Primary nav */}
            <SiteNav />
          </header>

          <main style={{ flex: 1 }}>{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
