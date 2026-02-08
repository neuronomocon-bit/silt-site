export const metadata = {
  title: "Contact | Sentient Index Labs & Technology",
  description:
    "Contact Sentient Index Labs & Technology regarding methodology, review workflows, or governance-aligned evaluation artifacts.",
};

export default function ContactPage() {
  const email = "info@sentientindexlabs.com"; // change later if you choose a different inbox

  return (
    <div style={{ maxWidth: 880 }}>
      <h1 style={{ fontSize: 36, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
        Contact
      </h1>

      <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
        Use this channel for methodology questions, review workflow requests, and governance-oriented collaboration.
        Messages should be scoped and specific. SILT does not provide legal advice and does not issue certifications.
      </p>

      <hr style={{ border: 0, height: 1, background: "#e7e7e7", margin: "22px 0" }} />

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Primary contact</h2>

        <div
          style={{
            border: "1px solid #e7e7e7",
            borderRadius: 14,
            padding: 16,
            background: "#fafafa",
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: 600 }}>Email</div>
            <div style={{ color: "#5a5a5a" }}>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.6 }}>
            To help route your request, include:
            <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.7 }}>
              <li>System type and deployment context (high-level)</li>
              <li>Requested scope (what you want evaluated or documented)</li>
              <li>Timeline constraints (if any)</li>
              <li>Any required governance artifacts (e.g., audit trail, risk memo, mapping notes)</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Controlled intake</h2>
        <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
          SILT may request additional information or propose a scoped review plan prior to engaging. Where appropriate,
          sensitive exchanges can be handled under an NDA-based channel.
        </p>
      </section>

      <section style={{ marginBottom: 0 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>Privacy note</h2>
        <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0 }}>
          Do not send sensitive personal data. Messages may be retained for operational purposes and to support
          governance documentation. See the site Privacy page for general handling practices.
        </p>
      </section>
    </div>
  );
}
