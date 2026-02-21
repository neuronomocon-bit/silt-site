import { Callout, H2, MutedP, PageWrap } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Disclaimer | Sentient Index Labs & Technology",
  description:
    "Interpretive limits, non-certification posture, and liability disclaimer for Sentient Index Labs & Technology.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function DisclaimerPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Disclaimer"
        subtitle="Interpretive limits and non-certification posture"
        status="Informative"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This disclaimer applies to all public materials published by Sentient Index Labs & Technology."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It describes interpretive
          limits and does not constitute legal advice.
        </p>
      </Callout>

      <MutedP>
        The materials published on this site are provided for informational purposes only. They are
        intended to support transparent communication of our governance frameworks, oversight models,
        and evaluation practices, and may be cited as public statements of scope and method.
      </MutedP>

      <H2>No certification or compliance determination</H2>
      <MutedP>
        No content on this site constitutes certification, approval, conformity assessment, or a
        determination of compliance with any law, regulation, or standard. Any references to
        governance frameworks — including the EU Artificial Intelligence Act, the NIST AI Risk
        Management Framework, ISO/IEC standards, or similar — are provided for contextual mapping
        and explanation only.
      </MutedP>

      <H2>No legal advice</H2>
      <MutedP>
        Nothing on this site is legal advice. You should consult qualified counsel for legal and
        regulatory interpretation, compliance planning, or conformity assessment.
      </MutedP>

      <H2>Reliance and responsibility</H2>
      <MutedP>
        Users remain solely responsible for decisions made based on these materials. Operators and
        deploying entities retain full responsibility for system safety, governance, deployment
        decisions, and regulatory compliance.
      </MutedP>

      <H2>Limitations of published materials</H2>
      <MutedP>
        Frameworks, models, and examples published on this site are descriptive and informational.
        They must not be used as the basis for certification, compliance claims, or comparative
        scoring without independent qualified assessment.
      </MutedP>

      <H2>Changes</H2>
      <MutedP>
        This disclaimer may be updated over time. Current version and effective date are shown in
        the document header.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong style={{ color: "#111" }}>v0.1</strong> (2026-02-07): Initial public disclaimer.
        </li>
        <li>
          <strong style={{ color: "#111" }}>v0.2</strong> (2026-02-20): Updated to reflect
          company-wide scope; removed S.E.B.-specific language.
        </li>
      </ul>
    </PageWrap>
  );
}
