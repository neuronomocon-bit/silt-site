import React from "react";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Status of the Framework | Sentient Index Labs & Technology",
  description:
    "Current maturity, scope, and intended use of the SILT framework and the Sentience Evaluation Battery (S.E.B.).",
};

const DOC_ID = "SILT-STATUS-001";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-09";

export default function StatusPage() {
  return (
    <article style={{ maxWidth: 760 }}>
      <DocumentHeader
        title="Status of the Framework"
        subtitle={`Document ID: ${DOC_ID}`}
        status="Informative"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This document is provided for transparency regarding framework maturity and scope. It is informative only and does not define requirements, certify compliance, or determine sentience."
      />

      <p style={{ marginTop: 12, fontSize: 13, color: "var(--text-muted)" }}>
        Registry entry: <a href="/registry">Document Registry ({DOC_ID})</a>
      </p>

      <section style={{ marginTop: 24 }}>
        <h2>Purpose</h2>
        <p style={{ lineHeight: 1.7 }}>
          This page describes the current development status, intended audience, and scope boundaries
          of the Sentient Index Labs &amp; Technology (SILT) framework, including the Sentience
          Evaluation Battery (S.E.B.). It is intended to reduce ambiguity for readers, reviewers, and
          external stakeholders regarding how published materials should be interpreted at this stage.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Current maturity</h2>
        <p style={{ lineHeight: 1.7 }}>
          As of this release, the SILT framework is in an early research and documentation phase.
          Core terminology, conceptual dimensions, and evaluation intent are being defined and refined.
          No operational standard, certification program, scoring service, or compliance offering is
          currently in effect.
        </p>
        <ul style={{ color: "var(--text-muted)", lineHeight: 1.7, paddingLeft: 18 }}>
          <li>Methodology documents are descriptive and non-normative</li>
          <li>The S.E.B. is presented as a conceptual evaluation instrument</li>
          <li>Public examples are illustrative only</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Intended audience</h2>
        <p style={{ lineHeight: 1.7 }}>
          Materials published under the SILT framework are intended for a professional audience, including:
        </p>
        <ul style={{ color: "var(--text-muted)", lineHeight: 1.7, paddingLeft: 18 }}>
          <li>Regulators and policy analysts</li>
          <li>AI system developers and researchers</li>
          <li>Governance, risk, and compliance practitioners</li>
          <li>Academic and standards-oriented reviewers</li>
        </ul>
        <p style={{ lineHeight: 1.7 }}>
          They are not intended for consumer-facing use, marketing claims, or competitive ranking of systems.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Relationship to regulation and standards</h2>
        <p style={{ lineHeight: 1.7 }}>
          References to external regulatory or standards frameworks (including the EU AI Act, NIST AI Risk
          Management Framework, and related guidance) are provided for contextual alignment only. No claim is
          made that the SILT framework constitutes compliance with, certification under, or endorsement by any
          regulatory or standards body.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Explicit scope exclusions</h2>
        <ul style={{ color: "var(--text-muted)", lineHeight: 1.7, paddingLeft: 18 }}>
          <li>Determination or certification of sentience</li>
          <li>Issuance of scores, rankings, or pass/fail judgments</li>
          <li>Compliance determinations or legal conclusions</li>
          <li>Replacement of regulatory, ethical, or legal review</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Change management</h2>
        <p style={{ lineHeight: 1.7 }}>
          Documents published under the SILT framework are versioned and may change over time. Revisions,
          updates, and scope changes are recorded in the Document Registry and associated change logs.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          Readers are encouraged to consult the registry to ensure they are referencing the most current
          version of any document.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Future development</h2>
        <p style={{ lineHeight: 1.7 }}>
          Future phases may include expanded methodological detail, structured tooling, and controlled
          evaluation workflows. Any transition from research documentation to operational use would be
          announced clearly and accompanied by updated governance and disclosure materials.
        </p>
      </section>

      <hr style={{ margin: "34px 0", borderColor: "var(--border)" }} />

      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
        This document is provided for informational purposes only and does not constitute a standard,
        certification, compliance determination, or regulatory guidance.
      </p>

      <p style={{ fontSize: 13, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </p>
    </article>
  );
}
