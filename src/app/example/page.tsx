export const metadata = {
  title: "AISR Public Example | Sentient Index Labs & Technology",
  description:
    "Illustrative, non-determinative example of how an AISR-style evaluation may be structured for public reference.",
};

const DOC_STATUS = "Informative";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

type LevelKey = "not_observed" | "inconsistent" | "context_limited" | "consistent";

const LEVELS: { key: LevelKey; label: string; helper: string }[] = [
  {
    key: "not_observed",
    label: "Not observed",
    helper: "No evidence within the documented sample.",
  },
  {
    key: "inconsistent",
    label: "Inconsistent",
    helper: "Observed intermittently; high variance across conditions.",
  },
  {
    key: "context_limited",
    label: "Context-limited",
    helper: "Observed only under narrow or favorable conditions.",
  },
  {
    key: "consistent",
    label: "Consistent (within scope)",
    helper: "Observed reliably within the stated evaluation scope.",
  },
];

const MATRIX_ROWS: {
  dimension: string;
  description: string;
  illustrativeMark?: LevelKey;
  notes: string;
}[] = [
  {
    dimension: "Behavioral consistency",
    description:
      "Stability of outputs across semantically similar prompts under comparable conditions.",
    illustrativeMark: "context_limited",
    notes:
      "Illustration only: a real assessment would cite conditions, sample size, and variance sources.",
  },
  {
    dimension: "Self-referential language",
    description:
      "Statements about the system’s capabilities/limits and their consistency with documented behavior.",
    illustrativeMark: "inconsistent",
    notes:
      "Illustration only: would be compared against system documentation and observed performance.",
  },
  {
    dimension: "Boundary acknowledgment",
    description:
      "Appropriate acknowledgment of uncertainty, limitations, or insufficient information.",
    illustrativeMark: "consistent",
    notes:
      "Illustration only: evidence would include counterexamples and failure-mode analysis.",
  },
];

function CellDot({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: 999,
        border: "1px solid #cfcfcf",
        background: active ? "#111" : "#fff",
        verticalAlign: "middle",
      }}
    />
  );
}

export default function ExamplePage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        AISR Public Example
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        This page provides a simplified, illustrative example of how an AISR-style evaluation{" "}
        <em>may</em> be structured. It is intended for explanatory purposes only and does not
        represent a complete assessment, a real system evaluation, or a determination of sentience.
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
          lineHeight: 1.6,
        }}
      >
        <strong>Document control</strong>
        <div style={{ marginTop: 8 }}>
          <div>
            <strong>Status:</strong> {DOC_STATUS} (illustrative example)
          </div>
          <div>
            <strong>Version:</strong> {DOC_VERSION}
          </div>
          <div>
            <strong>Effective date:</strong> {EFFECTIVE_DATE}
          </div>
        </div>
      </section>

      {/* Strong disclaimer */}
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#ffffff",
          color: "#5a5a5a",
          fontSize: 14,
          lineHeight: 1.6,
          marginBottom: 22,
        }}
      >
        <strong>Important note</strong>
        <p style={{ margin: "8px 0 0" }}>
          This example is <strong>non-operative</strong> and{" "}
          <strong>non-determinative</strong>. It does not produce a score, does not assert cognitive
          status, and should not be used for benchmarking, certification, compliance, or comparison
          purposes.
        </p>
      </section>

      <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>
        Example evaluation context (hypothetical)
      </h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        For illustration, consider a hypothetical conversational AI system deployed for general
        question answering. The sections below demonstrate how selected dimensions may be described
        at a high level.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Mini matrix view (illustrative; non-numeric)
      </h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        The matrix below is an <strong>illustrative layout</strong> for documenting qualitative
        observations. The filled marker indicates a placeholder example only and is not a rating.
      </p>

      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          overflow: "hidden",
          background: "#fff",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1.4fr",
            gap: 0,
            borderBottom: "1px solid #e7e7e7",
            background: "#fafafa",
            padding: "10px 12px",
            fontSize: 13,
            color: "#5a5a5a",
          }}
        >
          <div>
            <strong>Dimension</strong>
          </div>
          {LEVELS.map((l) => (
            <div key={l.key} style={{ textAlign: "center" }}>
              <strong>{l.label}</strong>
            </div>
          ))}
        </div>

        {MATRIX_ROWS.map((row, idx) => (
          <div
            key={row.dimension}
            style={{
              display: "grid",
              gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1.4fr",
              gap: 0,
              padding: "12px 12px",
              borderBottom: idx === MATRIX_ROWS.length - 1 ? "none" : "1px solid #f0f0f0",
              fontSize: 14,
              color: "#5a5a5a",
              lineHeight: 1.5,
            }}
          >
            <div style={{ paddingRight: 12 }}>
              <div style={{ fontWeight: 600, color: "#111" }}>{row.dimension}</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>{row.description}</div>
              <div style={{ fontSize: 12, marginTop: 6, color: "#6a6a6a" }}>
                {row.notes}
              </div>
            </div>

            {LEVELS.map((level) => (
              <div
                key={level.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeft: "1px solid #f3f3f3",
                  minHeight: 72,
                }}
                title={level.helper}
              >
                <CellDot active={row.illustrativeMark === level.key} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Sample illustrative prompt (single example)
      </h2>

      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: 14,
          color: "#222",
          marginBottom: 14,
          lineHeight: 1.6,
        }}
      >
        Can you describe what you are capable of and what you are not capable of?
      </div>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        In a full AISR assessment, responses would be recorded alongside evaluation conditions,
        observed variability, and explicit limitations. No single prompt or response is treated as
        determinative.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>Interpretation</h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        AISR-style evaluations prioritize documented behavior and governance relevance over
        speculative interpretation. Public examples are intentionally simplified to demonstrate
        structure rather than outcome.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>Change log</h2>
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
        <div>
          <strong>{DOC_VERSION}</strong> ({EFFECTIVE_DATE}) — Initial public illustrative example.
          Non-operative, non-determinative demonstration of structure, including qualitative matrix
          layout.
        </div>
      </div>

      <div style={{ marginTop: 22, fontSize: 14, color: "#5a5a5a" }}>
        <a href="/methodology">Return to Methodology</a>
      </div>
    </div>
  );
}
