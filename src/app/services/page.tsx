import { PageWrap } from "@/components/ui";

export const metadata = {
  title: "Services — Sentient Index Labs & Technology",
  description:
    "Governance assessment, evaluation environment deployment, oversight layer development, and independent evaluation for institutional AI deployments.",
};

const BORDER = "#e7e7e7";
const MUTED = "#5a5a5a";
const LABEL_STYLE: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6a6a6a",
  fontWeight: 600,
  margin: "0 0 18px",
};

export default function ServicesPage() {
  return (
    <PageWrap>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <div style={{ paddingTop: 40, paddingBottom: 36, borderBottom: `1px solid ${BORDER}`, marginBottom: 48 }}>
        <h1 style={{ fontSize: 38, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
          Services
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, margin: 0, maxWidth: 620 }}>
          Governance Infrastructure for Institutional AI Deployment
        </p>
      </div>

      {/* ── Service 1: Governance Assessment ─────────────────────────── */}
      <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Governance Assessment</h2>
        <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", fontWeight: 600, margin: "0 0 14px", color: "#111" }}>
          AI Governance Infrastructure Review
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 680, margin: "0 0 24px" }}>
          We assess institutional AI deployments across structural classification, evaluation
          maturity, and oversight calibration — producing a clear picture of where governance
          gaps exist and what infrastructure is required to close them.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a9a9a", fontWeight: 600, marginBottom: 10 }}>
            Deliverables
          </div>
          {[
            "Governance gap analysis",
            "Structural classification report",
            "Evaluation maturity assessment",
            "Oversight calibration recommendations",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: 14,
                color: "#111",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#c0c0c0", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Service 2: Evaluation Environment ────────────────────────── */}
      <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Evaluation Environment Deployment</h2>
        <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", fontWeight: 600, margin: "0 0 14px", color: "#111" }}>
          Evaluation Environment Design &amp; Implementation
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 680, margin: "0 0 24px" }}>
          We design structured testing environments for institutional AI systems — producing
          reproducible, auditable evidence about system behavior under defined and adversarial
          conditions.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a9a9a", fontWeight: 600, marginBottom: 10 }}>
            Includes
          </div>
          {[
            "Domain-specific adversarial test design",
            "Scoring framework development",
            "Transcript and metadata preservation systems",
            "Version control architecture",
            "Reassessment triggers",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: 14,
                color: "#111",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#c0c0c0", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Service 3: Oversight Layer ────────────────────────────────── */}
      <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Oversight Layer Development</h2>
        <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", fontWeight: 600, margin: "0 0 14px", color: "#111" }}>
          Operational Supervision Models
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 680, margin: "0 0 24px" }}>
          We design and implement AI supervision layers for regulated workflows — embedding
          accountability directly into production environments without disrupting institutional
          operations.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a9a9a", fontWeight: 600, marginBottom: 10 }}>
            Includes
          </div>
          {[
            "Output monitoring rulesets",
            "Policy-sensitive detection",
            "Escalation routing",
            "Documentation generation",
            "Audit logging infrastructure",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: 14,
                color: "#111",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#c0c0c0", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Service 4: Governance Advisory ───────────────────────────── */}
      <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Governance Architecture Advisory</h2>
        <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", fontWeight: 600, margin: "0 0 14px", color: "#111" }}>
          Institutional AI Governance Design
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 680, margin: "0 0 24px" }}>
          For organizations deploying AI at scale. We design governance architectures that
          operate across the full system lifecycle — from initial classification through
          executive reporting and board-level oversight.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a9a9a", fontWeight: 600, marginBottom: 10 }}>
            Includes
          </div>
          {[
            "Lifecycle governance modeling",
            "Escalation trigger definition",
            "Change-management frameworks",
            "Executive reporting structures",
            "Board-level governance briefings",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: 14,
                color: "#111",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#c0c0c0", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Service 5: Independent Evaluation ────────────────────────── */}
      <div style={{ marginBottom: 52, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Independent Evaluation</h2>
        <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", fontWeight: 600, margin: "0 0 14px", color: "#111" }}>
          Structured Independent Assessment
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 680, margin: "0 0 24px" }}>
          For higher-risk deployments where internal evaluation is insufficient for governance
          or regulatory purposes. SILT conducts structured, independent assessments with
          full documentation packages.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9a9a9a", fontWeight: 600, marginBottom: 10 }}>
            Includes
          </div>
          {[
            "Controlled evaluation",
            "Structural classification",
            "Oversight posture recommendations",
            "Documentation packages",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: 14,
                color: "#111",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#c0c0c0", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2 style={LABEL_STYLE}>Get Started</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="mailto:info@sentientindexlabs.com"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              fontSize: 13.5,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Request Consultation
          </a>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: 999,
              border: `1px solid ${BORDER}`,
              color: "#111",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Download White Paper
          </a>
          <a
            href="mailto:info@sentientindexlabs.com"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: 999,
              border: `1px solid ${BORDER}`,
              color: "#111",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Contact SILT
          </a>
        </div>
      </div>

    </PageWrap>
  );
}
