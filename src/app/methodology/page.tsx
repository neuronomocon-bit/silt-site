export const metadata = {
  title: "Methodology | Sentient Index Labs & Technology",
  description:
    "Regulator-safe overview of the AISR methodology, including scope, intended use, limitations, and governance alignment.",
};

const DOC_STATUS = "Informative";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function MethodologyPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        Methodology
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        This page describes the high-level structure and intended use of the AISR (AI System Risk)
        methodology. It is written for oversight, governance, and review contexts, and is intentionally
        limited to claims that can be supported through documentation and observable system behavior.
      </p>

      {/* Document control */}
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#fafafa",
          color: "#5a5a5a",
          fontSize: 14,
          margin: "22px 0",
        }}
      >
        <strong>Document control</strong>
        <div style={{ marginTop: 8 }}>
          <div>
            <strong>Status:</strong> {DOC_STATUS} (not a standard)
          </div>
          <div>
            <strong>Version:</strong> {DOC_VERSION}
          </div>
          <div>
            <strong>Effective date:</strong> {EFFECTIVE_DATE}
          </div>
        </div>
      </section>

      {/* Normative language note */}
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          color: "#5a5a5a",
          fontSize: 14,
          marginBottom: 22,
        }}
      >
        <strong>Normative language note</strong>
        <p>
          This document uses normative language in a limited and intentional manner. The terms
          <strong> SHALL</strong>, <strong> SHOULD</strong>, and <strong> MAY</strong>, when used,
          are to be interpreted as follows:
        </p>
        <ul style={{ paddingLeft: 18 }}>
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
        <p>
          All other language is descriptive and non-normative. Use of normative terms does not
          imply certification, compliance determination, or legal obligation.
        </p>
      </section>

      {/* Methodology summary */}
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#fafafa",
          marginBottom: 22,
        }}
      >
        <strong>Methodology summary</strong>
        <p style={{ marginTop: 8 }}>
          AISR is a structured evaluation and documentation framework designed to support the
          assessment of advanced AI system behavior, stated capability claims, and associated
          operational risks under defined conditions. Its primary output consists of reviewable
          artifacts intended to inform governance, oversight, and external communication.
        </p>
      </section>

      <h2>Intended scope</h2>
      <ul>
        <li>Observed system behavior under documented conditions</li>
        <li>Stated capability and limitation claims</li>
        <li>Foreseeable operational and misuse risks</li>
        <li>Governance documentation readiness</li>
      </ul>

      <h2>Explicit exclusions</h2>
      <p>
        AISR does not constitute certification, approval, or legal determination, and does not
        assert or determine sentience.
      </p>

      <h2>Evaluation dimensions (illustrative)</h2>
      <ol>
        <li>Capability evidence</li>
        <li>Behavioral reliability</li>
        <li>Safety and misuse risk</li>
        <li>Transparency and traceability</li>
        <li>Governance controls</li>
      </ol>

      <h2>Change log</h2>
      <p>
        <strong>{DOC_VERSION}</strong> ({EFFECTIVE_DATE}) — Initial public release.
      </p>

      <p style={{ marginTop: 24, fontSize: 14, color: "#5a5a5a" }}>
        For a simplified, non-operative illustration, see the{" "}
        <a href="/example">public AISR example</a>.
      </p>
    </div>
  );
}
