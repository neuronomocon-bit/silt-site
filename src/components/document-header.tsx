type DocumentHeaderProps = {
  title: string;
  subtitle: string;
  status: "Informative" | "Planned" | "Normative";
  version: string;
  effectiveDate: string;
  note?: string;
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      style={{
        marginLeft: 10,
        padding: "2px 8px",
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "#444",
        background: "#f1f1f1",
        border: "1px solid #ddd",
        borderRadius: 999,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

export function DocumentHeader({
  title,
  subtitle,
  status,
  version,
  effectiveDate,
  note,
}: DocumentHeaderProps) {
  return (
    <header style={{ marginBottom: 28 }}>
      <div style={{ marginBottom: 6 }}>
        <h1
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {title}
          <StatusBadge status={status} />
        </h1>
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#5a5a5a",
          lineHeight: 1.6,
          marginBottom: 8,
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          fontSize: 13,
          color: "#6a6a6a",
          marginBottom: note ? 10 : 0,
        }}
      >
        Version {version} · Effective {effectiveDate}
      </div>

      {note && (
        <div
          style={{
            fontSize: 13,
            color: "#6a6a6a",
            background: "#fafafa",
            border: "1px solid #e7e7e7",
            padding: "8px 12px",
            borderRadius: 6,
          }}
        >
          {note}
        </div>
      )}
    </header>
  );
}
