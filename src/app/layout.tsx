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
              borderBottom: "1px solid #e7e7e7",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* Logo + identity (NO nested anchors) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <img
  src="/SILT_logo symbol only_2026.svg"
  alt="Sentient Index Labs & Technology"
  width={56}
  height={56}
  style={{
    display: "block",
    width: 56,
    height: 56,
    flexShrink: 0,
  }}
/>


              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <a
                  href="/"
                  style={{
                    color: "#111",
                    fontWeight: 650,
                    letterSpacing: "-0.01em",
                    fontSize: 16,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  Sentient Index Labs &amp; Technology
                </a>

                <a
  href="/registry"
  className="registry-link"
  style={{
    color: "#6a6a6a",
    fontSize: 13,
    lineHeight: 1.2,
  }}
>
  Public documentation — Sentience Evaluation Battery (S.E.B.)
</a>
              </div>
            </div>

            {/* Primary navigation (client component) */}
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
