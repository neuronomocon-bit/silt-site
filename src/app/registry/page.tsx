import React from "react";
import { DocumentHeader } from "@/components/document-header";

export const metadata = {
  title: "Document Registry | Sentient Index Labs & Technology",
  description:
    "Public registry of SILT documents, including versions and change logs for the Sentience Evaluation Battery (S.E.B.).",
};

type Status = "Informative" | "Planned" | "Normative";

type Change = {
  version: string;
  date: string; // YYYY-MM-DD
  summary: string;
};

type Doc = {
  id: string;
  title: string;
  status: Status;
  version: string;
  effectiveDate: string; // YYYY-MM-DD or "—"
  href: string;
  scopeNote: string;
  changeLog: Change[];
};

const REG_VERSION = "v0.1";
const REG_EFFECTIVE = "2026-02-09";

const DOCS: Doc[] = [
  {
    id: "SILT-SEB-METH-001",
    title: "S.E.B. Methodology",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/methodology",
    scopeNote:
      "High-level descriptive overview of the Sentience Evaluation Battery (S.E.B.). Non-normative; does not define requirements or determinations.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial publication of the methodology overview.",
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
      "Illustrative example only. Not a scoring instrument, certification, compliance determination, or determination of sentience.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial illustrative example and non-numeric matrix view placeholder.",
      },
    ],
  },
  {
    id: "SILT-STATUS-001",
    title: "Status of the Framework",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-09",
    href: "/status",
    scopeNote:
      "Current maturity, intended audience, and scope exclusions for the SILT framework and S.E.B. Informative only.",
    changeLog: [
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
    scopeNote: "Public index of resources and placeholders for planned publications. Informative only.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary: "Initial resources listing and placeholder publications.",
      },
      {
        version: "v0.1.1",
        date: "2026-02-08",
        summary: "Updated registry cross-references for Privacy and Terms. No scope change.",
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
    scopeNote: "Privacy and data handling posture for this website. Informative only.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial publication.",
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
    scopeNote: "Website terms and limitations. Informative only.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary: "Initial publication.",
      },
    ],
  },
  {
    id: "SILT-LEGAL-DISC-001",
    title: "Disclaimer",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/disclaimer",
    scopeNote: "Interpretive limits and non-certification posture. Informative only.",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary: "Initial publication.",
      },
    ],
  },
];

function StatusPill({ status }: { status: Status }) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 10px",
    borderRadius: 999,
    border: "1px solid var(--border)",
    fontSize: 12,
    color: "var(--text-muted)",
    background: "var(--panel)",
    whiteSpace: "nowrap",
  };

  return <span style={base}>{status}</span>;
}

export default function RegistryPage() {
  return (
    <article>
      <DocumentHeader
        title="Document Registry"
        subtitle="Public registry of SILT documents and version history"
        status="Informative"
        version={REG_VERSION}
        effectiveDate={REG_EFFECTIVE}
        note="This registry is provided for transparency and citation. Inclusion does not imply certification, compliance determination, or a determination of sentience."
      />

      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: "0 0 8px" }}>Legend</h2>
        <ul style={{ marginTop: 10, paddingLeft: 18, color: "var(--text-muted)", lineHeight: 1.6 }}>
          <li>
            <strong>Informative</strong>: reference material only; does not define requirements,
            certify compliance, or determine sentience.
          </li>
          <li>
            <strong>Planned</strong>: announced but not released; content and scope may change prior
            to publication.
          </li>
          <li>
            <strong>Normative</strong>: reserved for requirements language; not currently used for
            public SILT materials.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={{ margin: "0 0 10px" }}>Published documents</h2>

        <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: 10 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.03)" }}>
                <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>
                  Document
                </th>
                <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>
                  Status
                </th>
                <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>
                  Version
                </th>
                <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>
                  Effective
                </th>
                <th style={{ textAlign: "left", padding: 12, borderBottom: "1px solid var(--border)" }}>
                  Link
                </th>
              </tr>
            </thead>

            <tbody>
              {DOCS.map((doc) => (
                <tr key={doc.id}>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--border)",
                      verticalAlign: "top",
                    }}
                  >
                    <div style={{ fontWeight: 650, color: "var(--text)" }}>{doc.title}</div>
                    <div style={{ marginTop: 2, color: "var(--text-muted)", fontSize: 13 }}>{doc.id}</div>
                    <div
                      style={{
                        marginTop: 8,
                        color: "var(--text-muted)",
                        fontSize: 13,
                        lineHeight: 1.55,
                      }}
                    >
                      {doc.scopeNote}
                    </div>
                  </td>

                  <td style={{ padding: 12, borderBottom: "1px solid var(--border)", verticalAlign: "top" }}>
                    <StatusPill status={doc.status} />
                  </td>

                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      verticalAlign: "top",
                    }}
                  >
                    {doc.version}
                  </td>

                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      verticalAlign: "top",
                    }}
                  >
                    {doc.effectiveDate}
                  </td>

                  <td style={{ padding: 12, borderBottom: "1px solid var(--border)", verticalAlign: "top" }}>
                    <a href={doc.href} style={{ textDecoration: "none", fontWeight: 600 }}>
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ margin: "0 0 8px" }}>Change logs (per document)</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, marginTop: 0 }}>
          For citation, include document ID, version, effective date, and accessed date. This section
          lists document-specific change summaries.
        </p>

        {DOCS.map((doc) => (
          <section key={`${doc.id}-changelog`} style={{ marginTop: 18 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "baseline" }}>
              <div style={{ fontWeight: 650, color: "var(--text)" }}>{doc.title}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{doc.id}</div>
              <div style={{ marginLeft: "auto" }}>
                <a href={doc.href} style={{ fontSize: 13, textDecoration: "none", fontWeight: 600 }}>
                  View document
                </a>
              </div>
            </div>

            <ul style={{ marginTop: 8, paddingLeft: 18, color: "var(--text-muted)", lineHeight: 1.6 }}>
              {doc.changeLog.map((c) => (
                <li key={`${doc.id}-${c.version}-${c.date}`}>
                  <strong style={{ color: "var(--text)" }}>{c.version}</strong> ({c.date}): {c.summary}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </article>
  );
}
