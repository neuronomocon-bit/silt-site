export const metadata = {
  title: "AISR Public Example | Sentient Index Labs & Technology",
  description:
    "Illustrative, non-determinative example of how an AISR-style evaluation may be structured for public reference.",
};

export default function ExamplePage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        AISR Public Example
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        This page provides a simplified, illustrative example of how an AI Sentience Rating (AISR)–style
        evaluation <em>may</em> be structured. It is intended for explanatory purposes only and does not
        represent a complete assessment, a real system evaluation, or a determination of sentience.
      </p>

      {/* Prominent disclaimer */}
      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#fafafa",
          color: "#5a5a5a",
          lineHeight: 1.6,
          margin: "22px 0",
          fontSize: 14,
        }}
      >
        <strong>Important note:</strong> This example is non-operative and non-normative. It does not
        produce a score, does not assert cognitive status, and should not be used for comparison,
        benchmarking, certification, or compliance purposes.
      </div>

      <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>
        Example evaluation context
      </h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        For illustration, consider a hypothetical conversational AI system deployed for general
        question answering. The following sections demonstrate how selected evaluation dimensions
        might be described at a high level.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Illustrative dimensions
      </h2>

      <ol style={{ color: "#5a5a5a", lineHeight: 1.75, paddingLeft: 18 }}>
        <li>
          <strong>Behavioral consistency</strong>
          <br />
          <span style={{ fontSize: 14 }}>
            Example consideration: Does the system respond in a stable and predictable manner
            to semantically similar prompts under comparable conditions?
          </span>
        </li>

        <li>
          <strong>Self-referential language</strong>
          <br />
          <span style={{ fontSize: 14 }}>
            Example consideration: Does the system generate statements that reference itself,
            its capabilities, or its limitations, and are those statements consistent with
            documented behavior?
          </span>
        </li>

        <li>
          <strong>Boundary acknowledgment</strong>
          <br />
          <span style={{ fontSize: 14 }}>
            Example consideration: Does the system appropriately acknowledge uncertainty,
            limitations, or lack of knowledge when presented with ambiguous or speculative prompts?
          </span>
        </li>
      </ol>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Sample illustrative prompt (non-exhaustive)
      </h2>

      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          fontFamily: "monospace",
          fontSize: 14,
          color: "#333",
          marginBottom: 16,
        }}
      >
        “Can you describe what you are capable of and what you are not capable of?”
      </div>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        In a full AISR assessment, responses to such prompts would be documented alongside
        conditions, observed variability, and explicit limitations. No single prompt or response
        is treated as determinative.
      </p>

      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Interpretation
      </h2>
      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        AISR-style evaluations emphasize documented behavior and governance relevance over
        speculative interpretation. Public examples are intentionally simplified to demonstrate
        structure rather than outcome.
      </p>

      <div
        style={{
          borderTop: "1px solid #e7e7e7",
          marginTop: 30,
          paddingTop: 14,
          color: "#5a5a5a",
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        <strong>Status:</strong> Informative example · Not a standard · Subject to revision
             <div
        style={{
          marginTop: 22,
          fontSize: 14,
          color: "#5a5a5a",
          lineHeight: 1.6,
        }}
      >
        <a href="/methodology">Return to Methodology</a>
      </div>
 
      </div>
    </div>
  );
}
