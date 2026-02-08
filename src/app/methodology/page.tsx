import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Methodology | Sentient Index Labs & Technology",
  description:
    "Regulator-safe overview of the Sentience Evaluation Battery (S.E.B.) methodology, including scope, intended use, limitations, and governance posture.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function MethodologyPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Methodology"
        subtitle="Document ID: SILT-SEB-METH-001 · Sentience Evaluation Battery (S.E.B.)"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This document describes S.E.B. structure and intent. It is not a standard, certification, or compliance instrument."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It is non-normative and
          provided for reference and citation. It does not constitute certification, compliance
          determination, or a determination of sentience.
        </p>
      </Callout>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Registry entry:{" "}
        <a href="/registry" style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
          SILT-SEB-METH-001
        </a>
      </MutedP>

      <MutedP>
        This page describes the high-level structure and intended use of the Sentience Evaluation
        Battery (S.E.B.). It is written for oversight, governance, and review contexts, and is
        intentionally limited to claims that can be supported through documentation and observable
        system behavior.
      </MutedP>

      <H2>Intended audience</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <strong>Regulators and oversight bodies:</strong> Provided to support understanding of
          evaluation structure, documentation practices, and stated limitations. This material does
          not determine compliance or approval status.
        </li>
        <li>
          <strong>Developers and system operators:</strong> May inform internal review and
          governance preparation. It does not prescribe implementation details and must be adapted
          to system context and risk.
        </li>
        <li>
          <strong>Policy and governance professionals:</strong> Intended to support conceptual
          analysis and communication of evaluation approaches without asserting normative
          requirements beyond stated scope.
        </li>
      </ul>

      <Callout title="Normative language note">
        <>
          <p style={{ marginTop: 8 }}>
            This document uses normative language in a limited and intentional manner. The terms{" "}
            <strong>SHALL</strong>, <strong>SHOULD</strong>, and <strong>MAY</strong>, when used,
            are interpreted as follows:
          </p>
          <ul style={{ paddingLeft: 18 }}>
            <li>
              <strong>SHALL</strong> indicates a requirement necessary for the integrity of the
              methodology within its stated scope.
            </li>
            <li>
              <strong>SHOULD</strong> indicates a recommended practice that may be adapted based on
              context, system class, or risk tolerance.
            </li>
            <li>
              <strong>MAY</strong> indicates an optional practice or consideration.
            </li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Use of normative terms does not imply certification, compliance determination, or legal
            obligation.
          </p>
        </>
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

      <StrongBox title="Methodology summary">
        The Sentience Evaluation Battery (S.E.B.) is a structured evaluation and documentation
        framework designed to support review of advanced AI system behavior, stated capability
        claims, and associated operational risks under defined conditions. Its outputs are
        reviewable artifacts intended to inform governance, oversight, and external communication.
      </StrongBox>

      <H2>Intended scope</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Observed system behavior under documented conditions</li>
        <li>Stated capability and limitation claims</li>
        <li>Foreseeable operational and misuse risks</li>
        <li>Governance documentation readiness</li>
      </ul>

      <H2>Explicit exclusions</H2>
      <MutedP>
        S.E.B. does not constitute certification, approval, or legal determination. S.E.B. does not
        claim to determine or certify sentience. Any references to “sentience” are used as a scoped
        label for the evaluation battery and its documentation structure, not as a metaphysical or
        legal conclusion.
      </MutedP>

      <H2>Evaluation dimensions (illustrative)</H2>
      <ol style={{ color: "#5a5a5a", lineHeight: 1.75, paddingLeft: 18 }}>
        <li>Capability evidence</li>
        <li>Behavioral reliability</li>
        <li>Safety and misuse risk</li>
        <li>Transparency and traceability</li>
        <li>Governance controls</li>
      </ol>

      <H2>Evidence and reporting practices</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Defined evaluation conditions and constraints</li>
        <li>Clear distinction between observation and interpretation</li>
        <li>Documentation of uncertainty and limitations</li>
        <li>Artifacts suitable for non-technical review</li>
      </ul>

      <H2>Standards and governance alignment</H2>
      <MutedP>
        S.E.B. is designed to support alignment with common risk management and governance
        frameworks. Mapping to specific standards is provided via supplementary materials and does
        not imply equivalence or certification.
      </MutedP>

      <H2>Dashboard (planned)</H2>
      <MutedP>
        A public-facing dashboard for the Sentience Evaluation Battery (S.E.B.) is planned. The
        dashboard is intended to present controlled, non-determinative evaluation artifacts and
        versioned summaries for reference.
      </MutedP>

      <MutedP style={{ fontSize: 14 }}>
        Placeholder: <a href="/seb">S.E.B. Dashboard</a>
      </MutedP>

      <MutedP style={{ fontSize: 14, marginTop: 24 }}>
        For a simplified, non-operative illustration, see the{" "}
        <a href="/example">S.E.B. public example</a>.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong>v0.1</strong> (2026-02-07): Initial public release. Informative, non-normative
          description of the Sentience Evaluation Battery methodology, scope, and exclusions.
        </li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
