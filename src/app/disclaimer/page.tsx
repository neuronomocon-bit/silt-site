import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Disclaimer | Sentient Index Labs & Technology",
  description:
    "Interpretive limits, non-certification posture, and non-determination statement for public SILT documents, including S.E.B.",
};

const DOC_ID = "SILT-LEGAL-DISC-001";
const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function DisclaimerPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Disclaimer"
        subtitle={`Document ID: ${DOC_ID} · Interpretive limits and non-certification posture`}
        status="Informative"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This disclaimer applies to public SILT materials, including references to the Sentience Evaluation Battery (S.E.B.)."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It describes interpretive
          limits and does not constitute legal advice.
        </p>
      </Callout>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Registry entry:{" "}
        <a
          href="/registry"
          style={{
            color: "var(--text)",
            textDecoration: "none",
            fontWeight: 650,
          }}
        >
          {DOC_ID}
        </a>
      </MutedP>

      <MutedP>
        The materials published on this site are provided for informational purposes only. They are
        intended to support transparent communication of evaluation and documentation practices, and
        may be cited as public statements of scope and method.
      </MutedP>

      <StrongBox title="Non-determination statement">
        Sentient Index Labs &amp; Technology does not certify sentience. References to “sentience” in
        the Sentience Evaluation Battery (S.E.B.) name are used as a scoped label for a documentation
        and evaluation battery, not as a metaphysical, medical, or legal conclusion.
      </StrongBox>

      <H2>No certification / no compliance determination</H2>
      <MutedP>
        No content on this site constitutes certification, approval, conformity assessment, or a
        determination of compliance with any law, regulation, or standard. Any references to
        governance frameworks (including the EU Artificial Intelligence Act, the NIST AI Risk
        Management Framework, ISO/IEC standards, or similar) are provided for contextual mapping and
        explanation only.
      </MutedP>

      <H2>No legal advice</H2>
      <MutedP>
        Nothing on this site is legal advice. You should consult qualified counsel for legal and
        regulatory interpretation, compliance planning, or conformity assessment.
      </MutedP>

      <H2>Limitations of illustrative materials</H2>
      <MutedP>
        Example content (including the S.E.B. public example) is non-operative and non-determinative.
        It must not be used for benchmarking, certification, compliance, or comparative claims.
        Illustrative layouts are intended only to show how documentation may be structured.
      </MutedP>

      <H2>Reliance and responsibility</H2>
      <MutedP>
        Users remain solely responsible for decisions made based on these materials. Operators and
        deploying entities retain full responsibility for system safety, governance, deployment
        decisions, and regulatory compliance.
      </MutedP>

      <H2>Changes</H2>
      <MutedP>
        This disclaimer may be updated over time. Current version and effective date are shown in the
        document header. Historical changes are recorded in the change log below and referenced in
        the Document Registry.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "var(--border)" }} />

      <H2>Change log</H2>
      <ul style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong style={{ color: "var(--text)" }}>v0.1</strong> (2026-02-07): Initial public
          disclaimer defining interpretive limits, non-certification posture, and non-determination
          statement.
        </li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
