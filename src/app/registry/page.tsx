import React from "react";
import { DocumentHeader } from "@/components/document-header";
import { Callout, PageWrap, MutedP, H2 } from "@/components/ui";

type Change = {
  version: string;
  date: string;
  summary: string;
};

type Doc = {
  id: string;
  title: string;
  status: "Informative" | "Planned" | "Normative";
  version: string;
  effectiveDate: string;
  href: string;
  scopeNote: string;
  changes: Change[];
};

const DOCS: Doc[] = [
  {
    id: "SILT-SEB-METH-001",
    title: "S.E.B. Methodology",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/methodology",
    scopeNote:
      "High-level descriptive overview of the Sentience Evaluation Battery (S.E.B.). Non-normative.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial public methodology document.",
      },
    ],
  },
  {
    id: "SILT-SEB-EX-001",
    title: "S.E.B. Public Example",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/example",
    scopeNote:
      "Illustrative example only. Not a scoring instrument, certification, or compliance determination.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial illustrative example and matrix view placeholder.",
      },
    ],
  },

  // ✅ NEW DOCUMENT: Status of the Framework
  {
    id: "SILT-STATUS-001",
    title: "Status of the Framework",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-09",
    href: "/status",
    scopeNote:
      "Current maturity, intended audience, and non-operational posture of the framework and S.E.B. Informative only.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-09",
        summary:
          "Initial status statement describing maturity, scope exclusions, and relationship to regulation/standards.",
      },
    ],
  },

  {
    id: "SILT-RES-001",
    title: "Resources",
    status: "Informative",
    version: "v0.1.1",
    effectiveDate: "2026-02-08",
    href: "/resources",
    scopeNote:
      "Public index of resources and placeholders for planned publications. Informative only.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary:
          "Initial public resources page with placeholders for future versioned publications.",
      },
      {
        version: "v0.1.1",
        date: "2026-02-08",
        summary:
          "Added Privacy Policy and Terms of Use to listed public documents. No scope change.",
      },
    ],
  },
  {
    id: "SILT-LEGAL-PRIV-001",
    title: "Privacy Policy",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/privacy",
    scopeNote:
      "Privacy and data handling posture for this website. Informative only.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial privacy policy publication.",
      },
    ],
  },
  {
    id: "SILT-LEGAL-TERM-001",
    title: "Terms of Use",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/terms",
    scopeNote:
      "Website terms and limitations. Informative only.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial terms of use publication.",
      },
    ],
  },
  {
    id: "SILT-LEGAL-DISC-001",
    title: "Disclaimer",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/disclaimer",
    scopeNote:
      "Non-certification posture and interpretive limits. Informative only.",
    changes: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial disclaimer publication.",
      },
    ],
  },
];

export const metadata = {
  title: "Document Registry | Sentient Index Labs & Technology",
  description:
    "Document Registry for Sentient Index Labs & Technology (SILT), including versioning and change logs for public documents related to the Sentience Evaluation Battery (S.E.B.).",
};

export default function RegistryPage() {
  return (
    <PageWrap>
      <DocumentHeader
        title="Document Registry"
        subtitle="Public registry of SILT documents and version history"
        status="Informative"
        version="v0.1"
        effectiveDate="2026-02-09"
        note="This registry is provided for transparency and citation. Inclusion does not imply certification, compliance determination, or a determination of sentience."
      />

      <Callout title="Document status legend">
        <ul style={{ margin: 0, paddingLeft: 18, color: "#5a5a5a", lineHeight: 1.6 }}>
          <li>
            <strong>Informative</strong>: Provided for transparency and reference only. Does not
            define requirements, certify compliance, or determine sentience/capability.
          </li>
          <li>
            <strong>Planned</strong>: Announced but not yet released. Content and scope may change
            prior to publication.
          </li>
        </ul>
      </Callout>

      <H2>Published documents</H2>
      <div style={{ overflowX: "auto", border: "1px solid #e7e7e7", borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#fafafa" }}>
              <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                Document
              </th>
              <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                Status
              </th>
              <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                Version
              </th>
              <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                Effective date
              </th>
              <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {DOCS.map((doc) => (
              <tr key={doc.id}>
                <td style={{ padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                  <div style={{ fontWeight: 650, color: "#111" }}>{doc.title}</div>
                  <div style={{ color: "#5a5a5a", fontSize: 13, marginTop: 2 }}>{doc.id}</div>
                  <div style={{ color: "#5a5a5a", fontSize: 13, marginTop: 6 }}>{doc.scopeNote}</div>
                </td>
                <td style={{ padding: 12, borderBottom: "1px solid #e7e7e7", color: "#5a5a5a" }}>
                  {doc.status}
                </td>
                <td style={{ padding: 12, borderBottom: "1px solid #e7e7e7", color: "#5a5a5a" }}>
                  {doc.version}
                </td>
                <td style={{ padding: 12, borderBottom: "1px solid #e7e7e7", color: "#5a5a5a" }}>
                  {doc.effectiveDate}
                </td>
                <td style={{ padding: 12, borderBottom: "1px solid #e7e7e7" }}>
                  <a href={doc.href}>View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 style={{ marginTop: 28 }}>Change logs</H2>
      <MutedP>
        Change logs are listed per document. For citation, include document ID, version, effective
        date, and accessed date.
      </MutedP>

      {DOCS.map((doc) => (
        <section key={`${doc.id}-changes`} style={{ marginTop: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "baseline" }}>
            <div style={{ fontWeight: 650 }}>{doc.title}</div>
            <div style={{ color: "#5a5a5a", fontSize: 13 }}>{doc.id}</div>
            <div style={{ marginLeft: "auto" }}>
              <a href={doc.href} style={{ fontSize: 13 }}>
                View document
              </a>
            </div>
          </div>

          <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
            {doc.changes.map((c) => (
              <li key={`${doc.id}-${c.version}-${c.date}`}>
                <strong>{c.version}</strong> ({c.date}): {c.summary}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </PageWrap>
  );
}
