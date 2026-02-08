import { H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Disclaimer | Sentient Index Labs & Technology",
  description:
    "Legal and interpretive disclaimers for Sentient Index Labs & Technology content, including S.E.B. materials.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-07";

export default function DisclaimerPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Disclaimer"
        subtitle="Interpretive limits and non-certification posture"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This disclaimer applies to all pages and materials on this site unless explicitly stated otherwise."
      />

      <StrongBox title="No certification or compliance determination">
        <MutedP style={{ marginTop: 0 }}>
          Sentient Index Labs &amp; Technology (SILT) does not provide certification, conformity
          assessment, or regulatory compliance determinations.
        </MutedP>
        <MutedP>
          Nothing on this site constitutes a determination of compliance with the EU Artificial
          Intelligence Act, the NIST AI Risk Management Framework, or any other regulatory or
          standards regime.
        </MutedP>
      </StrongBox>

      <H2>S.E.B. scope limitation</H2>
      <MutedP>
        The Sentience Evaluation Battery (S.E.B.) is an evaluation and documentation framework.
        References to S.E.B. on this site describe structure, process, and artifacts. They do not
        constitute a “test result,” a certification outcome, or a compliance determination.
      </MutedP>

      <H2>No determination of sentience</H2>
      <MutedP>
        SILT does not assert or determine sentience or consciousness of any system. The term “sentience”
        appears in the name S.E.B. as a scoped label for the evaluation battery and its documentation
        structure, not as a metaphysical, scientific, or legal conclusion.
      </MutedP>

      <H2>No legal or professional advice</H2>
      <MutedP>
        Content on this site does not constitute legal, regulatory, or professional advice.
        Responsibility for compliance, risk acceptance, and deployment decisions remains with the
        system owner or operator.
      </MutedP>

      <H2>Interpretation responsibility</H2>
      <MutedP>
        Readers are responsible for how they interpret and apply information from this site. SILT
        assumes no responsibility for downstream use, representations, or reliance.
      </MutedP>

      <H2>External references</H2>
      <MutedP>
        References to standards, frameworks, or external materials are informational only and do not
        imply endorsement, equivalence, adequacy, or satisfaction of requirements.
      </MutedP>
    </PageWrap>
  );
}
