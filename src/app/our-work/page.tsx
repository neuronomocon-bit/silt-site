import { PageWrap } from "@/components/ui";

export const metadata = {
  title: "Our Work — Sentient Index Labs & Technology",
  description:
    "Structured governance infrastructure for institutional AI deployment: classification frameworks, evaluation environments, and oversight models.",
};

const LAYER_COLOR = "#f4f4f4";
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

export default function OurWorkPage() {
  return (
    <PageWrap>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <div style={{ paddingTop: 40, paddingBottom: 36, borderBottom: `1px solid ${BORDER}`, marginBottom: 48 }}>
        <h1 style={{ fontSize: 38, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
          Our Work
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, margin: 0, maxWidth: 620 }}>
          Structured Governance Infrastructure for Institutional AI
        </p>
      </div>

      {/* ── Section 1: Governance Architecture Model ─────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2 style={LABEL_STYLE}>Governance Architecture Model</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 28px" }}>
          SILT's governance infrastructure is organized across three discrete layers. Each layer
          addresses a distinct institutional requirement — from how a system is characterized,
          to how it is tested, to how it is supervised in production. Together they form a
          coherent governance stack for AI operating in regulated environments.
        </p>

        {/* Architecture diagram */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, maxWidth: 580 }}>
          {[
            { n: "Layer 1", label: "Structural Classification" },
            { n: "Layer 2", label: "Evaluation Environments" },
            { n: "Layer 3", label: "Operational Oversight" },
          ].map(({ n, label }) => (
            <div
              key={n}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 20px",
                background: LAYER_COLOR,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span style={{ fontSize: 11, color: "#9a9a9a", fontWeight: 600, letterSpacing: "0.06em", minWidth: 56 }}>
                {n}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 2: Structural Classification ─────────────────────── */}
      <div style={{ marginBottom: 52, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Structural Classification Frameworks</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 20px" }}>
          Before an AI system can be governed, it must be characterized. SILT's classification
          frameworks provide architecture-level descriptors that translate system properties into
          governance-relevant signals — enabling proportional oversight rather than blanket policy.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            ["Architecture-level descriptors", "Formal characterization of system structure, scope, and capability boundaries."],
            ["Persistence and autonomy characteristics", "Systematic assessment of memory, continuity, and degree of autonomous operation."],
            ["Governance calibration signals", "Derived indicators that inform oversight intensity and reporting requirements."],
            ["Change-trigger definitions", "Criteria that prompt reclassification when system behavior or deployment context shifts."],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                display: "flex",
                gap: 20,
                padding: "14px 0",
                borderBottom: `1px solid ${BORDER}`,
                alignItems: "baseline",
              }}
            >
              <div style={{ minWidth: 260, fontWeight: 600, fontSize: 13.5, color: "#111", flexShrink: 0 }}>
                {title}
              </div>
              <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginTop: 20 }}>
          Example application: Autonomy &amp; Continuity classification models for persistent AI agents
          operating across sessions in professional workflows.
        </p>
      </div>

      {/* ── Section 3: Evaluation Environments ───────────────────────── */}
      <div style={{ marginBottom: 52, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Evaluation Environments</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 20px" }}>
          Structured evaluation requires controlled conditions — not ad hoc testing. SILT designs
          and operates assessment environments that produce reproducible, auditable evidence about
          AI system behavior under defined conditions.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            ["Multi-domain assessment structures", "Evaluation frameworks spanning the operational domains relevant to the deployment context."],
            ["Adversarial stress testing", "Systematic exposure to edge cases, boundary conditions, and failure-mode scenarios."],
            ["Blind scoring methodologies", "Separation of evidence collection from interpretation to prevent evaluator bias."],
            ["Version-controlled evaluation criteria", "Criterion sets maintained under version control with audit trails for change management."],
            ["Transcript preservation", "Full retention of evaluation sessions for downstream review, dispute resolution, and reassessment."],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                display: "flex",
                gap: 20,
                padding: "14px 0",
                borderBottom: `1px solid ${BORDER}`,
                alignItems: "baseline",
              }}
            >
              <div style={{ minWidth: 260, fontWeight: 600, fontSize: 13.5, color: "#111", flexShrink: 0 }}>
                {title}
              </div>
              <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, marginTop: 20 }}>
          The Sentience Evaluation Battery (S.E.B.) is one environment within this layer —
          a structured assessment infrastructure for AI systems exhibiting high-continuity or
          autonomy characteristics. It is designed as governance infrastructure, not as a
          philosophical determination.
        </p>
      </div>

      {/* ── Section 4: Oversight & Supervision Models ────────────────── */}
      <div style={{ marginBottom: 52, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Oversight &amp; Supervision Models</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 20px" }}>
          Governance does not end at deployment. SILT designs operational supervision layers that
          embed accountability directly into production workflows — enabling ongoing monitoring,
          escalation, and audit without disrupting institutional operations.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            ["Output monitoring layers", "Continuous review of AI outputs against policy-defined acceptability criteria."],
            ["Policy-sensitive flagging", "Detection of outputs that require human review based on domain-specific risk parameters."],
            ["Audit logging systems", "Immutable records of AI decisions, actions, and escalations for regulatory and internal review."],
            ["Escalation protocols", "Defined routing for flagged outputs — to human reviewers, compliance teams, or automated holds."],
            ["Workflow integration", "Supervision architecture embedded within existing institutional processes, not bolted on."],
          ].map(([title, body]) => (
            <div
              key={title}
              style={{
                display: "flex",
                gap: 20,
                padding: "14px 0",
                borderBottom: `1px solid ${BORDER}`,
                alignItems: "baseline",
              }}
            >
              <div style={{ minWidth: 260, fontWeight: 600, fontSize: 13.5, color: "#111", flexShrink: 0 }}>
                {title}
              </div>
              <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 5: Standards Alignment ───────────────────────────── */}
      <div style={{ marginBottom: 52, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Standards Alignment</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 24px" }}>
          SILT's frameworks are designed to operationalize governance intent embedded in
          emerging international standards — translating regulatory requirements into
          institutional infrastructure that can be implemented, audited, and maintained.
        </p>

        <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
          {[
            ["EU AI Act", "Risk-based classification and high-risk system obligations."],
            ["NIST AI RMF", "Govern, Map, Measure, Manage functions across the AI lifecycle."],
            ["ISO AI Management Systems", "Organizational frameworks for responsible AI development and deployment."],
          ].map(([standard, desc]) => (
            <div
              key={standard}
              style={{
                flex: "1 1 200px",
                padding: "18px 20px",
                borderRight: `1px solid ${BORDER}`,
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 6, color: "#111" }}>
                {standard}
              </div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 6: Institutional Deployment Model ────────────────── */}
      <div style={{ marginBottom: 52, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
        <h2 style={LABEL_STYLE}>Institutional Deployment Model</h2>

        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#111", maxWidth: 700, margin: "0 0 28px" }}>
          SILT applies its governance stack across a structured institutional lifecycle.
          Each phase produces documented outputs that feed into the next, creating
          a continuous and auditable governance record.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[
            ["01", "System Inventory", "Cataloguing all AI systems in scope with their operational contexts."],
            ["02", "Classification", "Applying structural classification frameworks to each system."],
            ["03", "Baseline Evaluation", "Running controlled evaluation environments to establish a documented behavioral baseline."],
            ["04", "Oversight Calibration", "Designing and deploying supervision layers proportional to classification outputs."],
            ["05", "Reassessment", "Scheduled and trigger-based re-evaluation as systems or contexts evolve."],
          ].map(([n, title, body]) => (
            <div
              key={n}
              style={{
                flex: "1 1 150px",
                padding: "18px 16px",
                border: `1px solid ${BORDER}`,
                background: LAYER_COLOR,
              }}
            >
              <div style={{ fontSize: 11, color: "#9a9a9a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 8 }}>
                {n}
              </div>
              <div style={{ fontWeight: 600, fontSize: 13.5, color: "#111", marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

    </PageWrap>
  );
}
