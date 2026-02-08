export const metadata = {
  title: "Resources | Sentient Index Labs & Technology",
  description:
    "Public resources published by Sentient Index Labs & Technology, including methodology summaries and governance alignment notes.",
};

export default function ResourcesPage() {
  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        Resources
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        This page provides access to public materials published by Sentient Index Labs &amp; Technology (SILT).
        Resources are released selectively and are intended to support evaluation, governance, and oversight
        discussions.
      </p>

      <hr style={{ border: 0, height: 1, background: "#e7e7e7", margin: "22px 0" }} />

      {/* AISR */}
      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>
          AISR methodology resources
        </h2>

        <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
          <li>
            <strong>AISR Methodology Overview (PDF)</strong>
            <br />
            <span style={{ fontSize: 14 }}>
              Status: Forthcoming · Planned initial release
            </span>
          </li>

          <li>
            <strong>AISR Evaluation Dimensions Summary (PDF)</strong>
            <br />
            <span style={{ fontSize: 14 }}>
              Status: Draft · Public release pending
            </span>
          </li>
        </ul>
      </section>

      {/* Governance */}
      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>
          Governance and standards alignment
        </h2>

        <ul style={{ color: "#5a5a5a", lineHeight: 1.7, paddingLeft: 18 }}>
          <li>
            <strong>Governance Alignment Summary (PDF)</strong>
            <br />
            <span style={{ fontSize: 14 }}>
              Status: Planned · Mapping notes for common risk frameworks
            </span>
          </li>

          <li>
            <strong>Risk Documentation Practices Note (PDF)</strong>
            <br />
            <span style={{ fontSize: 14 }}>
              Status: Planned · Guidance on documentation scope and limitations
            </span>
          </li>
        </ul>
      </section>

      {/* Versioning */}
      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>
          Versioning and updates
        </h2>

        <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
          Public resources are versioned and may be updated over time. When released, each document will include
          a version identifier and publication date. Substantive revisions will be noted in an accompanying change
          log.
        </p>
      </section>

      {/* Access note */}
      <div
        style={{
          border: "1px solid #e7e7e7",
          borderRadius: 14,
          padding: 14,
          background: "#fafafa",
          color: "#5a5a5a",
          lineHeight: 1.6,
          fontSize: 14,
        }}
      >
        <strong>Access note:</strong> Some materials may be released in limited or draft form. Availability does not
        imply endorsement, certification, or regulatory determination.
      </div>
    </div>
  );
}
