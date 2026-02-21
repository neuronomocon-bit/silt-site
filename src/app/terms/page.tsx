import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Terms of Use | Sentient Index Labs & Technology",
  description:
    "Terms of use describing acceptable use and limitations for the Sentient Index Labs & Technology website.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-08";

export default function TermsPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Terms of Use"
        subtitle="Website terms and limitations"
        status="Informative"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="These Terms apply to use of this website and its public content. They are informative and do not constitute legal advice."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It provides general website
          terms and does not constitute legal advice.
        </p>
      </Callout>

      <MutedP>
        By accessing or using this website, you agree to these Terms of Use. If you do not agree,
        you should not use the website.
      </MutedP>

      <H2>Permitted use</H2>
      <StrongBox title="Reference and citation">
        You may access, read, and cite content on this website for informational purposes. You may
        link to pages using their stable URLs.
      </StrongBox>

      <H2>Prohibited use</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Attempting to disrupt, damage, or gain unauthorized access to the website</li>
        <li>Using the website to transmit malware, spam, or abusive content</li>
        <li>
          Misrepresenting SILT materials as certification, compliance determinations, or legal advice
        </li>
      </ul>

      <H2>Disclaimers and limitations</H2>
      <MutedP>
        The website and its contents are provided "as is" without warranties of any kind. SILT does
        not warrant that the site will be uninterrupted or error-free. To the extent permitted by
        law, SILT disclaims liability for damages arising from use of the site or reliance on its
        contents.
      </MutedP>

      <H2>Non-certification posture</H2>
      <MutedP>
        Nothing on this website constitutes certification, approval, or a compliance determination
        under any law, regulation, or standard. References to frameworks — including the EU AI Act,
        NIST AI RMF, ISO/IEC, or similar — are provided for context only and do not imply adequacy
        or equivalence.
      </MutedP>

      <H2>Intellectual property</H2>
      <MutedP>
        Unless otherwise stated, the website content is owned by SILT or used with permission. You
        may not reproduce or distribute content in a way that misrepresents source, status, or
        version. For permissions beyond normal quotation and citation, contact us.
      </MutedP>

      <H2>Changes to these Terms</H2>
      <MutedP>
        We may update these Terms over time. The document header shows the current version and
        effective date.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong style={{ color: "#111" }}>v0.1</strong> (2026-02-08): Initial public terms of
          use for this website.
        </li>
      </ul>
    </PageWrap>
  );
}
