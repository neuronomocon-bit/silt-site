import React from "react";

export function SiteFooter() {
  const linkStyle: React.CSSProperties = {
    color: "#5a5a5a",
    textDecoration: "none",
  };

  const sepStyle: React.CSSProperties = { margin: "0 10px", color: "#b0b0b0" };

  return (
    <footer
      style={{
        marginTop: 48,
        paddingTop: 18,
        borderTop: "1px solid #e7e7e7",
        color: "#5a5a5a",
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
        <a href="/methodology" style={linkStyle}>
          Methodology
        </a>
        <span style={sepStyle}>·</span>
        <a href="/example" style={linkStyle}>
          S.E.B. public example
        </a>
        <span style={sepStyle}>·</span>
        <a href="/seb" style={linkStyle}>
          S.E.B. dashboard (planned)
        </a>
        <span style={sepStyle}>·</span>
        <a href="/resources" style={linkStyle}>
          Resources
        </a>
        <span style={sepStyle}>·</span>
        <a href="/privacy" style={linkStyle}>
          Privacy
        </a>
        <span style={sepStyle}>·</span>
        <a href="/terms" style={linkStyle}>
          Terms
        </a>
        <span style={sepStyle}>·</span>
        <a href="/disclaimer" style={linkStyle}>
          Disclaimer
        </a>
      </div>

      <div style={{ marginTop: 10 }}>
        © {new Date().getFullYear()} Sentient Index Labs &amp; Technology. All materials are provided
        for informational purposes only and do not constitute certification, compliance determination,
        or a determination of sentience.
      </div>
    </footer>
  );
}
