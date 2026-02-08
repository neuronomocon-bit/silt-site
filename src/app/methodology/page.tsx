import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Methodology | Sentient Index Labs & Technology",
  description:
    "Regulator-safe overview of the AISR methodology, including scope, intended use, limitations, and governance alignment.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function MethodologyPage() {
  return (
    <PageWrap>
      {/* Formal document header */}
      <DocumentHeader
        title="Methodology"
        subtitle="AISR — AI System Risk evaluation framework"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This document describes methodology structure and intent. It is not a standard, certification, or compliance instrument."
      />

      {/* Intro */}
      <MutedP>
        This page describes the high-level structure and intended use of the AISR (AI System Risk)
        methodology. It is written for oversight, governance, and review contexts, and is intentionally
        limited to claims that can be supported through documentation and observable system behavior.
      </MutedP>

      {/* Intended audience */}
      <H2>Intended audience</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <strong>Regulators and oversight bodies:</strong> Provided to support understanding of
          evaluation structure, documentation practices, and stated limitations. This material does
          not determine compliance or approval status.
        </li>
        <li>
          <strong>Developers and system operators:</strong> May inform internal review and governance
          preparation. It does not prescribe implementation details and must be adapted to system
          context and risk.
        </li>
        <li>
          <strong>Policy and governance professionals:</strong> Intended to support conceptual
          analysis and communication of evaluation approaches without asserting normative
          requirements beyond stated scope.
        </li>
      </ul>

      {/* Normative language */}
      <Callout title="Normative language note">
        <>
          <p style={{ marginTop: 8 }}>
            This document uses normative language in a limited and intentional manner. The terms{" "}
            <strong>SHALL</strong>, <strong>SHOULD</strong>, and <strong>MAY</strong>, when used, are
            interpreted as follows:
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
          <p>
            All other language is descriptive and non-normative. Use of normative terms does not
            imply certification, compliance determination, or legal obligation.
          </p>
        </>
      </Callout>

      {/* Explicit non-compliance */}
      <Callout title="Non-compliance and non-certification statement">
        <>
          <p style={{ marginTop: 8 }}>
            This material does not constitute a conformity assessment, certification, or
            determination of compliance under the EU Artificial Intelligence Act, the NIST AI Risk
            Management Framework, or any other regulatory, legal, or standards regime.
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
        </>
      </Callout>

      {/* Summary */}
      <StrongBox title="Methodology summary">
        AISR is a structured evaluation and documentation framework designed to support the
        assessment of advanced AI system behavior, stated capability claims, and associated
        operational risks under defined conditions. Outputs are reviewable artifacts intended to
        inform governance, oversight, and external communication.
      </StrongBox>

      {/* Scope */}
      <H2>Intended scope</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Observed system behavior under documented conditions</li>
        <li>Stated capability and limitation claims</li>
        <li>Foreseeable operational and misuse risks</li>
        <li>Governance documentation readiness</li>
      </ul>

      {/* Exclusions */}
      <H2>Explicit exclusions</H2>
      <MutedP>
        AISR does not constitute certification, approval, or legal determination and does not assert
        or determine sentience. References to cognition or agency are operational descriptors only.
      </MutedP>

      {/* Dimensions */}
      <H2>Evaluation dimensions (illustrative)</H2>
      <ol style={{ color: "#5a5a5a", lineHeight: 1.75, paddingLeft: 18 }}>
        <li>Capability evidence</li>
        <li>Behavioral reliability</li>
        <li>Safety and misuse risk</li>
        <li>Transparency and traceability</li>
        <li>Governance controls</li>
      </ol>

      {/* Evidence */}
      <H2>Evidence and reporting practices</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Defined evaluation conditions and constraints</li>
        <li>Clear distinction between observation and interpretation</li>
        <li>Documentation of uncertainty and limitations</li>
        <li>Artifacts suitable for non-technical review</li>
      </ul>

      {/* Standards */}
      <H2>Standards and governance alignment</H2>
      <MutedP>
        AISR is designed to support alignment with common risk management and governance frameworks.
        Mapping to specific standards is provided via supplementary materials and does not imply
        equivalence or certification.
      </MutedP>

      {/* Changelog */}
      <H2>Change log</H2>
      <MutedP>
        <strong>{DOC_VERSION}</strong> ({EFFECTIVE_DATE}) — Initial public release with scoped,
        non-determinative framing and governance-oriented structure.
      </MutedP>

      {/* Cross-link */}
      <MutedP style={{ fontSize: 14, marginTop: 24 }}>
        For a simplified, non-operative illustration, see the{" "}
        <a href="/example">public AISR example</a>.
      </MutedP>
    </PageWrap>
  );
}
