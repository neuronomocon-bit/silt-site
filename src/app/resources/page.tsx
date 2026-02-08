import { H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Resources | Sentient Index Labs & Technology",
  description:
    "Public resources related to the Sentience Evaluation Battery (S.E.B.), including placeholder documents and versioning notes.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function ResourcesPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Resources"
        subtitle="S.E.B. — public materials and versioned references"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="Resources are provided for informational purposes only. They do not constitute certification, compliance determination, or a sentience conclusion."
      />

      <MutedP>
        This page hosts public-facing references related to the Sentience Evaluation Battery (S.E.B.).
        Materials may be updated over time and should be cited using the version and effective date
        shown on each document.
      </MutedP>

      <StrongBox title="Document availability (current)">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>
            <strong>S.E.B. overview (PDF)</strong> — placeholder (coming soon)
          </li>
          <li>
            <strong>Methodology summary (PDF)</strong> — placeholder (coming soon)
          </li>
          <li>
            <strong>Governance mapping note (EU AI Act / NIST AI RMF)</strong> — placeholder (coming soon)
          </li>
        </ul>
      </StrongBox>

      <H2>Versioning and citation</H2>
      <MutedP>
        Public materials are intended to be cited as versioned documents. When referencing SILT
        materials, include:
      </MutedP>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Document title</li>
        <li>Version (e.g., v0.1)</li>
        <li>Effective date</li>
        <li>URL and access date</li>
      </ul>

      <H2>Scope note</H2>
      <MutedP>
        S.E.B. materials describe evaluation and documentation structure. They are not a conformity
        assessment, certification, or legal determination of compliance, and they do not assert or
        determine sentience.
      </MutedP>

      <MutedP style={{ fontSize: 14, marginTop: 24 }}>
        Related: <a href="/methodology">Methodology</a> · <a href="/example">S.E.B. public example</a> ·{" "}
        <a href="/seb">S.E.B. dashboard (planned)</a>
      </MutedP>
    </PageWrap>
  );
}
