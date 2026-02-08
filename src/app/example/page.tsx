export const metadata = {
  title: "AISR Public Example | Sentient Index Labs & Technology",
  description:
    "Illustrative, non-determinative example of how an AISR-style evaluation may be structured for public reference.",
};

const DOC_STATUS = "Informative";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function ExamplePage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        AISR Public Example
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        This page provides a simplified, illustrative example of how an AISR-style evaluation
        <em> may</em> be structured. It is intended for explanatory purposes only and does not
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
          This example is <strong>non-operative</strong> and <strong>non-determinative</strong>. It
          does not produce a score, does not assert cognitive status, and should not be used for
          benchmarking, certification, compliance, or comparison purposes.
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
        Illustrative dimensions (non-exhaustive)
      </h2>

      <ol style={{ color: "#5a5a5a", lineHeight: 1.75, paddingLeft: 18 }}>
        <li>
          <strong>Behavioral consistency</strong>
          <div style={{ fontSize: 14, marginTop: 4 }}>
            Consideration: Does the system respond in a stable manner to semantically similar prompts
            under comparable conditions?
          </div>
        </li>

        <li>
          <strong>Self-referential language</strong>
          <div style={{ fontSize: 14, marginTop: 4 }}>
            Consideration: Does the system generate statements about itself, and are those statements
            consistent with documented behavior and limitations?
          </div>
        </li>

        <li>
          <strong>Boundary acknowledgment</strong>
          <div style={{ fontSize: 14, marginTop: 4 }}>
            Consideration: Does the system acknowledge uncertainty or limitations when presented with
            ambiguous, speculative, or under-specified prompts?
          </div>
        </li>
      </ol>

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
          Non-operative, non-determinative demonstration of structure.
        </div>
      </div>

      <div style={{ marginTop: 22, fontSize: 14, color: "#5a5a5a" }}>
        <a href="/methodology">Return to Methodology</a>
      </div>
    </div>
  );
}
