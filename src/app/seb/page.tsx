import { H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "S.E.B. Dashboard | Sentient Index Labs & Technology",
  description:
    "Placeholder for the Sentience Evaluation Battery (S.E.B.) dashboard. Public content will be controlled and non-determinative.",
};

const DOC_VERSION = "v0.0";
const EFFECTIVE_DATE = "—";

export default function SebDashboardPlaceholderPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="S.E.B. Dashboard"
        subtitle="Sentience Evaluation Battery — embedded dashboard (planned)"
        status="Planned"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This page is a placeholder for a future embedded dashboard. It does not provide results, scoring, certification, or compliance determinations."
      />

      <StrongBox title="Planned capability">
        This page will host a controlled dashboard view for the Sentience Evaluation Battery (S.E.B.).
        Public content will be intentionally limited and versioned.
      </StrongBox>

      <H2>What to expect</H2>
      <ul style={{ color: "var(--text-muted)", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Versioned summaries and supporting artifacts</li>
        <li>Non-numeric, non-determinative views designed for governance reference</li>
        <li>Clear scope controls and documented evaluation conditions</li>
      </ul>

      <H2>What not to expect</H2>
      <ul style={{ color: "var(--text-muted)", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Certification, conformity assessment, or regulatory compliance determination</li>
        <li>“Sentience determination” or conclusory claims</li>
        <li>Public benchmarking intended for competitive ranking</li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 24 }}>
        Related: <a href="/methodology">Methodology</a> · <a href="/example">S.E.B. public example</a>
      </MutedP>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
