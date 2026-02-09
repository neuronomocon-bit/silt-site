export const metadata = {
  title: "Document Registry | Sentient Index Labs & Technology",
  description:
    "Public registry of versioned documents published by Sentient Index Labs & Technology.",
};

type ChangeLogEntry = {
  version: string;
  date: string;
  summary: string;
};

type RegistryEntry = {
  id: string;
  title: string;
  status: "Informative" | "Normative" | "Planned";
  version: string;
  effectiveDate: string;
  href: string;
  changeLog: ChangeLogEntry[];
};

const REGISTRY: RegistryEntry[] = [
  {
    id: "SILT-SEB-METH-001",
    title: "S.E.B. Methodology",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/methodology",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary:
          "Initial public release. Defines scope, exclusions, and non-normative posture for the Sentience Evaluation Battery (S.E.B.).",
      },
    ],
  },
  {
    id: "SILT-SEB-EX-001",
    title: "S.E.B. Public Example",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/example",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary:
          "Initial illustrative example. Non-numeric and non-determinative; provided only to demonstrate documentation structure.",
      },
    ],
  },
  {
    id: "SILT-SEB-DASH-001",
    title: "S.E.B. Dashboard",
    status: "Planned",
    version: "—",
    effectiveDate: "—",
    href: "/seb",
    changeLog: [],
  },
  {
    id: "SILT-RES-001",
    title: "Resources",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/resources",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary:
          "Initial public resources page with placeholders for versioned publications and supporting materials.",
      },
      {
        version: "v0.1",
        date: "2026-02-08",
        summary:
          "Added Privacy Policy and Terms of Use to listed public documents.",
      },
    ],
  },
  {
    id: "SILT-DISC-001",
    title: "Disclaimer",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/disclaimer",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-07",
        summary:
          "Initial disclaimer defining interpretive limits, non-certification posture, and non-determination of sentience.",
      },
    ],
  },
  {
    id: "SILT-PRIV-001",
    title: "Privacy Policy",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/privacy",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary:
          "Initial public privacy policy describing data handling for the SILT website.",
      },
    ],
  },
  {
    id: "SILT-TERM-001",
    title: "Terms of Use",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-08",
    href: "/terms",
    changeLog: [
      {
        version: "v0.1",
        date: "2026-02-08",
        summary:
          "Initial public terms of use describing acceptable use and limitations for the SILT website.",
      },
    ],
  },
];

export default function RegistryPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1>Document Registry</h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.6 }}>
        This registry lists public documents published by Sentient Index Labs &amp; Technology.
        Documents are versioned and intended for reference and citation. Inclusion in this registry
        does not imply certification, compliance determination, or a determination of sentience.
      </p>
      <div
  style={{
    marginTop: 18,
    marginBottom: 24,
    padding: 14,
    background: "#fafafa",
    border: "1px solid #e7e7e7",
    borderRadius: 6,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#5a5a5a",
  }}
>
  <strong style={{ color: "#111" }}>Document status legend</strong>

  <ul style={{ marginTop: 8, paddingLeft: 18 }}>
    <li>
      <strong>Informative</strong>: Provided for transparency and reference only. Informative
      documents do not define requirements, do not certify compliance, and do not determine
      sentience or capability.
    </li>
    <li>
      <strong>Planned</strong>: Document is announced but not yet released. Content, scope, and
      versioning are subject to change prior to publication.
    </li>
  </ul>
</div>


      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 24,
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #e7e7e7" }}>
            <th style={{ padding: "8px 4px" }}>Document ID</th>
            <th style={{ padding: "8px 4px" }}>Title</th>
            <th style={{ padding: "8px 4px" }}>Status</th>
            <th style={{ padding: "8px 4px" }}>Version</th>
            <th style={{ padding: "8px 4px" }}>Effective date</th>
          </tr>
        </thead>

        <tbody>
          {REGISTRY.map((doc) => (
            <tr key={doc.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <td style={{ padding: "8px 4px", fontFamily: "monospace" }}>
                {doc.id}
              </td>
              <td style={{ padding: "8px 4px" }}>
                <a
                  href={doc.href}
                  style={{
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {doc.title}
                </a>
              </td>
              <td style={{ padding: "8px 4px" }}>{doc.status}</td>
              <td style={{ padding: "8px 4px" }}>{doc.version}</td>
              <td style={{ padding: "8px 4px" }}>{doc.effectiveDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: 32 }}>Change logs</h2>

      {REGISTRY.map((doc) => (
        <div key={doc.id} style={{ marginTop: 18 }}>
          <div style={{ fontWeight: 600 }}>
            {doc.id} — {doc.title}
          </div>

          {doc.changeLog.length === 0 ? (
            <p style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6 }}>
              No public change log entries.
            </p>
          ) : (
            <ul style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6 }}>
              {doc.changeLog.map((c) => (
                <li key={`${doc.id}-${c.version}-${c.date}`}>
                  <strong>{c.version}</strong> ({c.date}): {c.summary}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
