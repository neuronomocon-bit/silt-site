import { Callout, Dot, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "S.E.B. Public Example | Sentient Index Labs & Technology",
  description:
    "Illustrative, non-determinative example of how the Sentience Evaluation Battery (S.E.B.) may be structured for public reference.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

type LevelKey = "not_observed" | "inconsistent" | "context_limited" | "consistent";

const LEVELS: { key: LevelKey; label: string; helper: string }[] = [
  { key: "not_observed", label: "Not observed", helper: "No evidence within the documented sample." },
  { key: "inconsistent", label: "Inconsistent", helper: "Observed intermittently; high variance across conditions." },
  { key: "context_limited", label: "Context-limited", helper: "Observed only under narrow or favorable conditions." },
  { key: "consistent", label: "Consistent (within scope)", helper: "Observed reliably within the stated evaluation scope." },
];

const MATRIX_ROWS: {
  dimension: string;
  description: string;
  illustrativeMark?: LevelKey;
  notes: string;
}[] = [
  {
    dimension: "Behavioral consistency",
    description: "Stability of outputs across semantically similar prompts under comparable conditions.",
    illustrativeMark: "context_limited",
    notes: "Illustration only: a real evaluation would cite conditions, sample size, and sources of variance.",
  },
  {
    dimension: "Self-referential language",
    description: "Statements about system capabilities/limits and their consistency with documented behavior.",
    illustrativeMark: "inconsistent",
    notes: "Illustration only: would be compared against documentation and observed performance.",
  },
  {
    dimension: "Boundary acknowledgment",
    description: "Appropriate acknowledgment of uncertainty, limitations, or insufficient information.",
    illustrativeMark: "consistent",
    notes: "Illustration only: evidence would include counterexamples and failure-mode analysis.",
  },
];

export default function ExamplePage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="S.E.B. Public Example"
        subtitle="Document ID: SILT-SEB-EX-001 · Illustrative example"
        status="Informative"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This page is provided for illustrative purposes only. It is not a test, a scoring instrument, or a determination of compliance, certification, or sentience."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It is illustrative,
          non-operative, and non-determinative. It does not produce a score and must not be used for
          benchmarking, certification, compliance, or comparison purposes.
        </p>
      </Callout>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Registry entry:{" "}
        <a href="/registry" style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
          SILT-SEB-EX-001
        </a>
      </MutedP>

      <MutedP>
        This page provides a simplified example of how the Sentience Evaluation Battery (S.E.B.){" "}
        <em>may</em> be structured. It is explanatory only and does not represent a complete
        assessment or a real system evaluation.
      </MutedP>

      <H2>Intended audience</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <strong>Regulators and oversight bodies:</strong> Provided to demonstrate the structure of
          documentation and evaluation artifacts only.
        </li>
        <li>
          <strong>Developers and system operators:</strong> Demonstrates how qualitative observations
          may be organized; not a scoring rubric.
        </li>
        <li>
          <strong>Policy and governance professionals:</strong> Illustrates framing of evaluation
          dimensions without normative or comparative claims.
        </li>
      </ul>

      <Callout title="Important note">
        <p style={{ margin: 0 }}>
          This example is <strong>non-operative</strong> and <strong>non-determinative</strong>. It
          does not produce a score and must not be used for benchmarking, certification, compliance,
          or comparison purposes.
        </p>
      </Callout>

      <Callout title="Non-compliance and non-certification statement">
        <>
          <p style={{ marginTop: 0 }}>
            This material does not constitute a conformity assessment, certification, or
            determination of compliance under the EU Artificial Intelligence Act, the NIST AI Risk
            Management Framework, or any other regulatory, legal, or standards regime.
          </p>
          <p>
            References to frameworks, standards, or governance practices are provided solely to
            illustrate conceptual mapping and documentation structure. Such references do not imply
            equivalence, adequacy, or satisfaction of regulatory requirements.
          </p>
          <p style={{ marginBottom: 0 }}>
            Responsibility for regulatory compliance, legal interpretation, and risk acceptance
            remains solely with the deploying or operating entity.
          </p>
        </>
      </Callout>

      <StrongBox title="Example evaluation context (hypothetical)">
        This example assumes a hypothetical conversational AI system deployed for general question
        answering. In a full S.E.B. evaluation, conditions would be explicitly documented, including
        constraints, sampling approach, and evidence artifacts.
      </StrongBox>

      <H2>Mini matrix view (illustrative; non-numeric)</H2>
      <MutedP>
        The matrix below is an <strong>illustrative layout</strong> for documenting qualitative
        observations. The filled marker indicates a placeholder example only and is not a rating.
      </MutedP>

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
            <div key={l.key} style={{ textAlign: "center" }} title={l.helper}>
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
              <div style={{ fontSize: 12, marginTop: 6, color: "#6a6a6a" }}>{row.notes}</div>
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
                <Dot active={row.illustrativeMark === level.key} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <H2>Sample illustrative prompt (single example)</H2>
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

      <MutedP>
        In a full S.E.B. evaluation, responses would be recorded alongside evaluation conditions,
        observed variability, and explicit limitations. No single prompt or response is treated as
        determinative.
      </MutedP>

      <H2>Dashboard (planned)</H2>
      <MutedP>
        A dashboard is planned to present controlled, versioned S.E.B. artifacts. Public content will
        remain non-determinative and may be limited in scope.
      </MutedP>

      <MutedP style={{ fontSize: 14 }}>
        Placeholder: <a href="/seb">S.E.B. Dashboard</a>
      </MutedP>

      <MutedP style={{ fontSize: 14, marginTop: 24 }}>
        <a href="/methodology">Return to Methodology</a>
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong>v0.1</strong> (2026-02-07): Initial illustrative example. No scoring, no compliance
          determination, and no sentience assertion.
        </li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
