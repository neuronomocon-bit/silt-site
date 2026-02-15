import { H2, MutedP, PageWrap, StrongBox } from "@/components/ui";

export const metadata = {
  title: "Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology (SILT) — governance-forward evaluation and documentation for advanced AI systems, including the Sentience Evaluation Battery (S.E.B.).",
};

export default function HomePage() {
  return (
    <PageWrap>
      <div style={{ marginBottom: 24 }}>
        {/* Logo + Title */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
          }}
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


          <div>
            <h1
              style={{
                fontSize: 44,
                letterSpacing: "-0.03em",
                margin: "0 0 10px",
              }}
            >
              Sentient Index Labs &amp; Technology
            </h1>

            <MutedP style={{ fontSize: 16, maxWidth: 760 }}>
              An institute-style, governance-forward approach to evaluating and documenting advanced AI system behavior.
              We maintain the <strong>Sentience Evaluation Battery (S.E.B.)</strong> — a structured framework for evidence,
              traceability, and oversight-oriented reporting.
            </MutedP>
          </div>
        </div>

        <div style={{ marginTop: 16, fontSize: 14, color: "#5a5a5a" }}>
          <a href="/methodology">Read Methodology</a>
          <span style={{ margin: "0 10px" }}>·</span>
          <a href="/example">View Public Example</a>
          <span style={{ margin: "0 10px" }}>·</span>
        </div>
      </div>

      <StrongBox title="Positioning (public)">
        S.E.B. is an evaluation and documentation framework intended to support governance and review. It does not
        constitute certification, conformity assessment, or a determination of compliance or sentience.
      </StrongBox>

      <H2>Focus areas</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <strong>Evaluation structure:</strong> Documented conditions, scoped claims, and reviewable artifacts.
        </li>
        <li>
          <strong>Governance readiness:</strong> Transparency, traceability, and incident/response alignment.
        </li>
        <li>
          <strong>Communication discipline:</strong> Clear separation between observation, interpretation, and limitation.
        </li>
      </ul>

      <H2>Start here</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <a href="/methodology">Methodology</a> — scope, exclusions, and normative language discipline
        </li>
        <li>
          <a href="/example">S.E.B. public example</a> — illustrative, non-numeric matrix and prompt example
        </li>
        <li>
          <a href="/resources">Resources</a> — public documents and versioning/citation notes
        </li>
        <li>
          <a href="/disclaimer">Disclaimer</a> — interpretive limits and non-certification posture
        </li>
      </ul>

      <div style={{ marginTop: 26, fontSize: 14, color: "#5a5a5a" }}>
        Contact: <strong>info@sentientindexlabs.com</strong>
      </div>
    </PageWrap>
  );
}
