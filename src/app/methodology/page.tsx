export const metadata = {
  title: "Methodology | Sentient Index Labs & Technology",
  description:
    "High-level description of SILT’s AISR methodology: scope, intended use, limitations, and governance alignment.",
};

export default function MethodologyPage() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 18px" }}>
      <header style={{ marginBottom: 22 }}>
        <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
          Methodology
        </h1>
        <p style={{ color: "#5a5a5a", margin: 0, lineHeight: 1.55 }}>
          This page provides a high-level, regulator-safe overview of SILT’s evaluation approach. It is written to be
          citeable and intentionally avoids speculative claims.
        </p>
      </header>

      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#fafafa",
          marginBottom: 22,
        }}
      >
        <strong>Summary</strong>
        <p style={{ color: "#5a5a5a", margin: "10px 0 0", lineHeight: 1.55 }}>
          AISR (AI System Risk) is a structured evaluation and documentation framework designed to help organizations
          assess advanced AI system behavior, claims, and operational risk under defined conditions, and to produce
          artifacts that support governance, oversight, and external communication.
        </p>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Scope</h2>
        <ul style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
          <li>
            <strong>Evaluation:</strong> What the system does under defined prompts, inputs, and constraints.
          </li>
          <li>
            <strong>Claims:</strong> What is asserted versus what is evidenced, including stated limitations.
          </li>
          <li>
            <strong>Operational risk:</strong> Foreseeable misuse pathways, failure modes, and mitigation controls.
          </li>
          <li>
            <strong>Governance artifacts:</strong> Reporting outputs intended to be reviewed by non-build stakeholders.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>What AISR is not</h2>
        <div
          style={{
            border: "1px solid #e7e7e7",
            borderRadius: 14,
            padding: 14,
            background: "#fff",
            color: "#5a5a5a",
            lineHeight: 1.55,
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>AISR is not a certification, endorsement, or legal determination.</strong> It does not grant
            “approval” status and it is not legal advice.
          </p>
          <p style={{ margin: "10px 0 0" }}>
            <strong>AISR does not claim to establish “sentience.”</strong> Any references to cognition, agency, or
            related concepts are used only as operational evaluation language within stated scope and limitations.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Evaluation dimensions (v1)</h2>
        <p style={{ color: "#5a5a5a", marginTop: 0, lineHeight: 1.55 }}>
          AISR outputs are typically organized across these high-level dimensions. Each dimension is supported by
          documented evidence, boundary conditions, and explicit uncertainty statements where applicable.
        </p>

        <ol style={{ color: "#5a5a5a", lineHeight: 1.7 }}>
          <li>
            <strong>Capability evidence:</strong> Demonstrated performance under defined tests and constraints.
          </li>
          <li>
            <strong>Behavioral reliability:</strong> Stability, variance, and failure modes across scenarios.
          </li>
          <li>
            <strong>Safety &amp; misuse risk:</strong> Misuse pathways, prompt/interaction risks, and mitigations.
          </li>
          <li>
            <strong>Transparency &amp; traceability:</strong> Evidence trails, documentation quality, and limitations.
          </li>
          <li>
            <strong>Governance readiness:</strong> Controls, monitoring, incident response, and accountability.
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Evidence and reporting</h2>
        <ul style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
          <li>
            <strong>Defined test conditions:</strong> What inputs were used, what constraints applied, and what was out
            of scope.
          </li>
          <li>
            <strong>Reproducibility notes:</strong> When and how results may vary (model versioning, temperature,
            guardrails, tooling).
          </li>
          <li>
            <strong>Limitations:</strong> What the assessment cannot conclude and what evidence would be required.
          </li>
          <li>
            <strong>Governance artifacts:</strong> Summaries suitable for leadership, risk teams, and external review.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Standards alignment</h2>
        <p style={{ color: "#5a5a5a", marginTop: 0, lineHeight: 1.55 }}>
          AISR is designed so its outputs can be mapped to common governance frameworks and risk management practices.
          SILT will publish short, citeable mapping notes as public resources.
        </p>
      </section>

      <section style={{ marginBottom: 0 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Contact</h2>
        <p style={{ color: "#5a5a5a", marginTop: 0, lineHeight: 1.55 }}>
          For review workflows, partnerships, or questions about scope and evidence requirements, contact SILT via the
          site contact channel.
        </p>
      </section>
    </main>
  );
}
