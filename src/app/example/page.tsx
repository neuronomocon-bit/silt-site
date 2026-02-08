export const metadata = {
  title: "AISR Public Example | Sentient Index Labs & Technology",
  description:
    "Illustrative, non-determinative example of how an AISR-style evaluation may be structured for public reference.",
};

const DOC_STATUS = "Informative";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

type LevelKey =
  | "not_observed"
  | "inconsistent"
  | "context_limited"
  | "consistent";

const LEVELS = [
  "Not observed",
  "Inconsistent",
  "Context-limited",
  "Consistent (within scope)",
];

export default function ExamplePage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        AISR Public Example
      </h1>
           <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: "12px 14px",
          background: "#fafafa",
          color: "#5a5a5a",
          fontSize: 14,
          lineHeight: 1.6,
          marginBottom: 18,
        }}
      >
        <strong>Status:</strong> Informative example (non-normative)
        <br />
        This page is provided for illustrative purposes only. It is not a test,
        a scoring instrument, or a determination of compliance, certification,
        or sentience.
      </div>
 

      <p style={{ color: "#5a5a5a", lineHeight: 1.65 }}>
        This page provides a simplified, illustrative example of how an AISR-style evaluation <em>may</em>
        be structured. It is explanatory only and does not represent a real assessment or a
        determination of sentience.
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

      {/* Intended audience */}
      <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>
        Intended audience
      </h2>
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
          <strong>Policy and governance professionals:</strong> Illustrates a possible framing of
          evaluation dimensions without normative or comparative claims.
        </li>
      </ul>

      {/* Disclaimer */}
      <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 16,
          background: "#ffffff",
          color: "#5a5a5a",
          fontSize: 14,
          marginBottom: 22,
        }}
      >
        <strong>Important note</strong>
        <p>
          This example is non-operative and non-determinative. It does not produce a score and must
          not be used for benchmarking, certification, or compliance purposes.
        </p>
      </section>
            <section
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#ffffff",
          color: "#5a5a5a",
          fontSize: 14,
          lineHeight: 1.6,
          margin: "22px 0",
        }}
      >
        <strong>Non-compliance and non-certification statement</strong>
        <p style={{ marginTop: 8 }}>
          This material does not constitute a conformity assessment, certification, or determination
          of compliance under the EU Artificial Intelligence Act, the NIST AI Risk Management Framework,
          or any other regulatory, legal, or standards regime.
        </p>
        <p>
          References to frameworks, standards, or governance practices are provided solely to
          illustrate conceptual mapping and documentation structure. Such references do not imply
          equivalence, adequacy, or satisfaction of regulatory requirements.
        </p>
        <p>
          Responsibility for regulatory compliance, legal interpretation, and risk acceptance
          remains solely with the deploying or operating entity.
        </p>
      </section>


      <h2>Mini matrix view (qualitative; illustrative)</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
          marginBottom: 22,
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #e7e7e7" }}>
              Dimension
            </th>
            {LEVELS.map((l) => (
              <th
                key={l}
                style={{ textAlign: "center", borderBottom: "1px solid #e7e7e7" }}
              >
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Behavioral consistency</td>
            <td />
            <td />
            <td style={{ textAlign: "center" }}>●</td>
            <td />
          </tr>
          <tr>
            <td>Self-referential language</td>
            <td />
            <td style={{ textAlign: "center" }}>●</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>Boundary acknowledgment</td>
            <td />
            <td />
            <td />
            <td style={{ textAlign: "center" }}>●</td>
          </tr>
        </tbody>
      </table>

      <h2>Change log</h2>
      <p>
        <strong>{DOC_VERSION}</strong> ({EFFECTIVE_DATE}) — Initial public illustrative example with
        qualitative matrix layout.
      </p>

      <p style={{ marginTop: 24, fontSize: 14 }}>
        <a href="/methodology">Return to Methodology</a>
      </p>
    </div>
  );
}
