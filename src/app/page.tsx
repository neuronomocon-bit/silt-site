import { PageWrap } from "@/components/ui";

export const metadata = {
  title: "Sentient Index Labs & Technology",
  description:
    "Sentient Index Labs & Technology develops governance frameworks and oversight models for emerging AI systems operating within regulated professional environments.",
};

const BORDER = "#e7e7e7";

export default function HomePage() {
  return (
    <PageWrap>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div
        style={{
          paddingTop: 48,
          paddingBottom: 52,
          borderBottom: `1px solid ${BORDER}`,
          marginBottom: 52,
        }}
      >
        <h1
          style={{
            fontSize: 42,
            lineHeight: 1.18,
            letterSpacing: "-0.03em",
            maxWidth: 680,
            margin: "0 0 20px",
          }}
        >
          Governance Infrastructure for AI in Regulated Professional Contexts
        </h1>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: "#5a5a5a",
            maxWidth: 620,
            margin: 0,
          }}
        >
          Sentient Index Labs &amp; Technology develops structured governance frameworks,
          oversight models, and evaluation environments for institutional AI deployment.
        </p>
      </div>

      {/* ── Section 1: The Institutional Challenge ───────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6a6a6a",
            fontWeight: 600,
            margin: "0 0 18px",
          }}
        >
          The Institutional Challenge
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#111",
            maxWidth: 720,
            margin: "0 0 32px",
          }}
        >
          AI systems are increasingly embedded in environments where accountability
          matters — healthcare, finance, law, real estate, government, and enterprise
          operations. Responsible deployment requires more than safety controls. It
          requires structured governance infrastructure.
        </p>

        <div style={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {[
            "Structural Classification",
            "Evaluation Environments",
            "Oversight Models",
          ].map((label) => (
            <div
              key={label}
              style={{
                flex: "1 1 200px",
                padding: "18px 20px",
                border: `1px solid ${BORDER}`,
                fontSize: 13.5,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#111",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 2: What We Build ──────────────────────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6a6a6a",
            fontWeight: 600,
            margin: "0 0 18px",
          }}
        >
          What We Build
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#111",
            maxWidth: 720,
            margin: "0 0 24px",
          }}
        >
          SILT develops infrastructure that enables institutions to deploy AI systems
          with traceability, proportional oversight, and audit readiness.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            {
              title: "Structural Classification Frameworks",
              body: "Measurable descriptors for AI system characteristics.",
            },
            {
              title: "Evaluation Environments",
              body: "Controlled assessment systems producing reproducible evidence.",
            },
            {
              title: "Operational Oversight Models",
              body: "Embedded supervision layers for regulated workflows.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                padding: "16px 0",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  minWidth: 280,
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  color: "#111",
                  flexShrink: 0,
                }}
              >
                {title}
              </div>
              <div style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.6 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 3: Core Principles ───────────────────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6a6a6a",
            fontWeight: 600,
            margin: "0 0 24px",
          }}
        >
          Core Principles
        </h2>

        <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
          {[
            {
              title: "Traceability",
              body: "Every claim is anchored to documented evidence and reviewable artifacts.",
            },
            {
              title: "Evidence-Based Reporting",
              body: "Outputs are grounded in structured observation, not inference alone.",
            },
            {
              title: "Separation of Observation and Interpretation",
              body: "Raw findings are kept distinct from analytical conclusions.",
            },
            {
              title: "Proportional Oversight",
              body: "Supervision scales to the risk profile of the deployment context.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                flex: "1 1 180px",
                padding: "20px",
                borderRight: `1px solid ${BORDER}`,
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13.5,
                  letterSpacing: "-0.01em",
                  marginBottom: 8,
                  color: "#111",
                }}
              >
                {title}
              </div>
              <div style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.6 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 4: Who This Is For ───────────────────────────────── */}
      <div style={{ marginBottom: 52 }}>
        <h2
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6a6a6a",
            fontWeight: 600,
            margin: "0 0 18px",
          }}
        >
          Who This Is For
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 28px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            "Healthcare institutions",
            "Financial organizations",
            "Legal service providers",
            "Government agencies",
            "Enterprise AI deployments",
          ].map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14.5,
                color: "#111",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#c0c0c0",
                  flexShrink: 0,
                }}
              />
              {item}
            </li>
          ))}
        </ul>

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
          Contact Us
        </a>
      </div>

    </PageWrap>
  );
}
