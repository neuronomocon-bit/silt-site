import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Resources | Sentient Index Labs & Technology",
  description:
    "Public resources and placeholders for versioned documents supporting the Sentience Evaluation Battery (S.E.B.).",
};

const DOC_VERSION = "v0.1.1";
const EFFECTIVE_DATE = "2026-02-08";

export default function ResourcesPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Resources"
        subtitle="Document ID: SILT-RES-001 · Public references and versioned materials"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This page lists public materials and placeholders for future versioned publications. Listing does not imply endorsement or regulatory adequacy."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It is provided for reference
          and citation and does not constitute certification, compliance determination, or a
          determination of sentience.
        </p>
      </Callout>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Registry entry:{" "}
        <a href="/registry" style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
          SILT-RES-001
        </a>
      </MutedP>

      <MutedP>
        This page provides a controlled public index of resources related to the Sentience
        Evaluation Battery (S.E.B.). Items listed here may include explanatory documents, mapping
        summaries, and (later) versioned PDFs. Where placeholders are present, they indicate
        planned publications and do not represent currently released materials.
      </MutedP>

      <StrongBox title="Citation note (recommended)">
        Cite individual documents using the Document Registry when available (Document ID, version,
        effective date, URL, accessed date). If a resource is later replaced by a versioned PDF,
        the PDF shall become the preferred citable artifact.
      </StrongBox>

      <H2>Public documents</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <a href="/methodology">S.E.B. Methodology</a> — Informative overview (web document)
        </li>
        <li>
          <a href="/example">S.E.B. Public Example</a> — Illustrative example (web document)
        </li>
        <li>
          <a href="/registry">Document Registry</a> — Version index and change logs
        </li>
        <li>
          <a href="/disclaimer">Disclaimer</a> — Interpretive limits and non-certification posture
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a> — Data handling and site analytics posture
        </li>
        <li>
          <a href="/terms">Terms of Use</a> — Website use terms and limitations
        </li>
      </ul>

      <H2>Planned publications (placeholders)</H2>
      <MutedP>
        The following items are planned. They are listed to indicate intent and future structure.
        Availability, content, and versioning will be reflected in the Document Registry upon
        release.
      </MutedP>

      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>
          <strong>S.E.B. Overview (PDF)</strong> — Planned: short public brief describing scope and
          exclusions
        </li>
        <li>
          <strong>Governance mapping summary (PDF)</strong> — Planned: conceptual mapping to common
          governance frameworks (informative)
        </li>
        <li>
          <strong>Change log digest (PDF)</strong> — Planned: periodic consolidated change summary
        </li>
      </ul>

      <H2>External references (informative)</H2>
      <MutedP>
        External references may be added here as links in the future. Inclusion does not imply
        endorsement, adequacy, or compliance.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong>v0.1</strong> (2026-02-07): Initial public resources page with placeholders for
          versioned publications and supporting materials.
        </li>
        <li>
          <strong>v0.1.1</strong> (2026-02-08): Added Privacy Policy and Terms of Use to listed public
          documents. No changes to scope or interpretive posture.
        </li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
