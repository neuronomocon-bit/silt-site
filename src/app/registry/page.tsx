export const metadata = {
  title: "Document Registry | Sentient Index Labs & Technology",
  description:
    "Public registry of versioned documents published by Sentient Index Labs & Technology.",
};

type RegistryEntry = {
  id: string;
  title: string;
  status: "Informative" | "Normative" | "Planned";
  version: string;
  effectiveDate: string;
  href: string;
};

const REGISTRY: RegistryEntry[] = [
  {
    id: "SILT-SEB-METH-001",
    title: "S.E.B. Methodology",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/methodology",
  },
  {
    id: "SILT-SEB-EX-001",
    title: "S.E.B. Public Example",
    status: "Informative",
    version: "v0.1",
    effectiveDate: "2026-02-07",
    href: "/example",
  },
  {
    id: "SILT-SEB-DASH-001",
    title: "S.E.B. Dashboard",
    status: "Planned",
    version: "—",
    effectiveDate: "—",
    href: "/seb",
  },
];

export default function RegistryPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1>Document Registry</h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.6 }}>
        This registry lists public documents published by Sentient Index Labs &amp;
        Technology. Documents are versioned and intended for reference and citation.
        Inclusion in this registry does not imply certification, compliance
        determination, or a determination of sentience.
      </p>

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
                  style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}
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
    </div>
  );
}
