import { Callout, H2, MutedP, PageWrap, StrongBox } from "@/components/ui";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Privacy Policy | Sentient Index Labs & Technology",
  description:
    "Privacy policy describing data handling for the Sentient Index Labs & Technology public website.",
};

const DOC_VERSION = "v0.1";
const EFFECTIVE_DATE = "2026-02-08";

export default function PrivacyPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Privacy Policy"
        subtitle="Document ID: SILT-PRIV-001 · Website data handling statement"
        status="Informative (non-normative)"
        version={DOC_VERSION}
        effectiveDate={EFFECTIVE_DATE}
        note="This policy describes data handling for this website only. It does not address third-party services outside this site."
      />

      <Callout title="Informative document">
        <p style={{ margin: 0 }}>
          This page is an <strong>informative</strong> public document. It describes general privacy
          practices for this website and does not provide legal advice.
        </p>
      </Callout>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Registry entry:{" "}
        <a href="/registry" style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
          SILT-PRIV-001
        </a>
      </MutedP>

      <MutedP>
        Sentient Index Labs &amp; Technology (“SILT,” “we,” “us”) operates this website to publish
        public documentation related to the Sentience Evaluation Battery (S.E.B.). This Privacy
        Policy explains what information we collect on this site, how we use it, and the choices
        available to you.
      </MutedP>

      <H2>Information we collect</H2>
      <StrongBox title="Site usage data (if enabled)">
        We may collect limited technical information about visits to this website (for example:
        browser type, approximate location at a city/region level, referring page, and pages viewed)
        for security and basic analytics. This information is used to operate and improve the site
        and is not intended to identify you personally.
      </StrongBox>

      <StrongBox title="Information you submit">
        If you use a contact form or email address provided on the site, we will receive the
        information you choose to send (for example: name, email address, organization, and message
        content). Do not submit confidential or sensitive information unless specifically requested
        through a secure channel.
      </StrongBox>

      <H2>How we use information</H2>
      <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
        <li>Operate, maintain, and secure the website</li>
        <li>Respond to inquiries and communications you initiate</li>
        <li>Improve content quality and usability</li>
        <li>Detect abuse, fraud, or security incidents</li>
      </ul>

      <H2>Cookies and tracking</H2>
      <MutedP>
        We aim to keep tracking minimal. If analytics are enabled, they may use cookies or similar
        technologies. You can control cookies through your browser settings. Where applicable, we
        will implement settings intended to reduce collection and retention.
      </MutedP>

      <H2>Data sharing</H2>
      <MutedP>
        We do not sell personal information. We may share information with service providers that
        help operate the website (for example: hosting, security, or analytics providers) only as
        necessary to provide those services. We may also disclose information if required by law or
        to protect the security and integrity of the site.
      </MutedP>

      <H2>Data retention</H2>
      <MutedP>
        We retain information only as long as necessary for the purposes described above, including
        security and operational needs. Messages sent to us may be retained for recordkeeping and
        auditability.
      </MutedP>

      <H2>Security</H2>
      <MutedP>
        We use reasonable administrative and technical safeguards appropriate to a public
        documentation website. No method of transmission or storage is perfectly secure; we cannot
        guarantee absolute security.
      </MutedP>

      <H2>Children</H2>
      <MutedP>
        This website is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13.
      </MutedP>

      <H2>Changes to this policy</H2>
      <MutedP>
        We may update this Privacy Policy over time. The document header shows the current version
        and effective date. Material changes will be reflected in the change log below and in the
        Document Registry.
      </MutedP>

      <hr style={{ margin: "32px 0", borderColor: "#e7e7e7" }} />

      <H2>Change log</H2>
      <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          <strong>v0.1</strong> (2026-02-08): Initial public privacy policy for this website.
        </li>
      </ul>

      <MutedP style={{ fontSize: 14, marginTop: 10 }}>
        Back to <a href="/registry">Document Registry</a>.
      </MutedP>
    </PageWrap>
  );
}
