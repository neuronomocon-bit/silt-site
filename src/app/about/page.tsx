export const metadata = {
  title: "About | Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology (SILT) is a research and methodology practice focused on evaluation, governance, and standards-oriented communication for advanced AI systems.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        About
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        Sentient Index Labs &amp; Technology (SILT) is a research and methodology practice focused on evaluation,
        governance, and standards-oriented communication for advanced A.I. systems. Our work emphasizes auditability,
        careful scope definition, and documentation that can be reviewed by both technical and non-technical stakeholders.
      </p>

      <hr style={{ border: 0, height: 1, background: "#e7e7e7", margin: "22px 0" }} />

      <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Purpose</h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        SILT exists to reduce ambiguity in how advanced AI systems are described, evaluated, and governed. We focus on
        producing structured artifacts—methodology summaries, evaluation notes, and governance mappings—that support
        oversight, decision-making, and external communication.
      </p>

      <h2 style={{ fontSize: 18, margin: "18px 0 8px" }}>Operating principles</h2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, marginTop: 0, paddingLeft: 18 }}>
        <li>
          <strong>Auditability:</strong> Methods should be explainable, repeatable, and scoped to defined conditions.
        </li>
        <li>
          <strong>Minimal claims:</strong> Public language should match the strength of available evidence.
        </li>
        <li>
          <strong>Traceability:</strong> Conclusions should link to observable outputs, documentation, and limitations.
        </li>
        <li>
          <strong>Governance relevance:</strong> Outputs should map to real decision processes and controls.
        </li>
      </ul>

      <h2 style={{ fontSize: 18, margin: "18px 0 8px" }}>What we publish</h2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, marginTop: 0, paddingLeft: 18 }}>
        <li>High-level methodology summaries (public, citeable)</li>
        <li>Short governance alignment notes (public, when available)</li>
        <li>Versioned resources and updates (published with changelogs)</li>
      </ul>

      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#fafafa",
          marginTop: 22,
          color: "#5a5a5a",
          lineHeight: 1.6,
          fontSize: 14,
        }}
      >
        <strong>Neutral positioning note:</strong> SILT does not provide legal advice and does not issue certifications.
        Our materials are designed to support evaluation and governance discussions and should be interpreted within
        stated scope and limitations.
      </div>
    </div>
  );
}

