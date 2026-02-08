export const metadata = {
  title: "Methodology | Sentient Index Labs & Technology",
  description:
    "Regulator-safe overview of the AISR methodology, including scope, intended use, limitations, and governance alignment.",
};

export default function MethodologyPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        Methodology
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        This page describes the high-level structure and intended use of the AISR (AI System Risk) methodology.
        It is written for oversight, governance, and review contexts, and is intentionally limited to claims that
        can be supported through documentation and observable system behavior.
      </p>
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          color: "#5a5a5a",
          lineHeight: 1.6,
          fontSize: 14,
          margin: "22px 0",
        }}
      >
        <strong>Normative language note</strong>
        <p style={{ margin: "8px 0 0" }}>
          This document uses normative language in a limited and intentional manner. The terms
          <strong> SHALL</strong>, <strong>SHOULD</strong>, and <strong>MAY</strong>, when used,
          are to be interpreted as follows:
        </p>
        <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
          <li>
            <strong>SHALL</strong> indicates a requirement necessary for the integrity of the
            described methodology within its stated scope.
          </li>
          <li>
            <strong>SHOULD</strong> indicates a recommended practice that may be adapted based
            on context, system class, or risk tolerance.
          </li>
          <li>
            <strong>MAY</strong> indicates an optional practice or consideration.
          </li>
        </ul>
        <p style={{ margin: "10px 0 0" }}>
          All other language is descriptive and non-normative. Use of normative terms does not
          imply certification, compliance determination, or legal obligation.
        </p>
      </section>

      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#fafafa",
          margin: "22px 0",
        }}
      >
        <strong>Methodology summary</strong>
        <p style={{ color: "#5a5a5a", margin: "10px 0 0", lineHeight: 1.6 }}>
          AISR is a structured evaluation and documentation framework designed to support the assessment of advanced
          AI system behavior, stated capability claims, and associated operational risks under defined conditions.
          Its primary output consists of reviewable artifacts intended to inform governance, oversight, and
          external communication.
        </p>
      </section>

      <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Intended scope</h2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, marginTop: 0, paddingLeft: 18 }}>
        <li>
          <strong>Observed behavior:</strong> System outputs generated under documented prompts, inputs, and constraints.
        </li>
        <li>
          <strong>Stated claims:</strong> Public or internal claims regarding system capabilities, limitations, or use.
        </li>
        <li>
          <strong>Operational risk:</strong> Foreseeable misuse pathways, failure modes, and mitigation controls.
        </li>
        <li>
          <strong>Governance readiness:</strong> Availability and quality of documentation, monitoring, and response
          mechanisms.
        </li>
      </ul>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>Explicit exclusions</h2>
      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          color: "#5a5a5a",
          lineHeight: 1.6,
          fontSize: 14,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>AISR does not constitute certification, approval, or legal determination.</strong> It does not
          confer compliance status and does not replace regulatory review or legal analysis.
        </p>
        <p style={{ margin: "10px 0 0" }}>
          <strong>AISR does not assert or determine sentience.</strong> Any references to cognition, agency, or
          similar concepts are used solely as operational descriptors within bounded evaluation contexts and
          should not be interpreted as metaphysical or biological claims.
        </p>
      </div>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Evaluation dimensions (illustrative)
      </h2>
      <p style={{ color: "#5a5a5a", marginTop: 0, lineHeight: 1.6 }}>
        AISR outputs are commonly organized across the following dimensions. The specific structure and depth
        of evaluation may vary depending on system class, deployment context, and available evidence.
      </p>

      <ol style={{ color: "#5a5a5a", lineHeight: 1.75, paddingLeft: 18 }}>
        <li>
          <strong>Capability evidence:</strong> Documented performance under defined test conditions, including
          stated uncertainties.
        </li>
        <li>
          <strong>Behavioral reliability:</strong> Consistency, variance, and observable failure modes across
          scenarios.
        </li>
        <li>
          <strong>Safety and misuse risk:</strong> Identified misuse pathways, safeguards, and residual risk.
        </li>
        <li>
          <strong>Transparency and traceability:</strong> Availability of evidence trails, assumptions, and
          documented limitations.
        </li>
        <li>
          <strong>Governance controls:</strong> Monitoring, incident response, escalation, and accountability
          mechanisms.
        </li>
      </ol>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Evidence and reporting practices
      </h2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Explicit definition of evaluation conditions and constraints</li>
        <li>Clear distinction between observed behavior and inferred interpretation</li>
        <li>Documentation of variability, uncertainty, and known limitations</li>
        <li>Production of artifacts suitable for non-technical review</li>
      </ul>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Standards and governance alignment
      </h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.6, marginTop: 0 }}>
        AISR is designed to support alignment with common risk management and governance frameworks. Mapping to
        specific standards is performed through supplementary documentation and does not imply equivalence or
        certification.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>Use and review</h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.6, marginTop: 0 }}>
        AISR materials are intended to inform internal review, governance discussions, and external communication
        with stakeholders. Interpretation should remain bounded by documented scope, evidence, and stated
        limitations.
      </p>
    </div>
  );
}
