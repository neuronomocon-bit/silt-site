type DocumentHeaderProps = {
  title: string;
  subtitle: string;
  status: "Informative" | "Planned" | "Normative";
  version: string;
  effectiveDate: string;
  note?: string;
};

function StatusBadge({ status }: { status: DocumentHeaderProps["status"] }) {
  const base: React.CSSProperties = {
    marginLeft: 10,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderRadius: 999,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    border: "1px solid var(--border)",
    background: "var(--panel)",
  };

  const variants: Record<typeof status, React.CSSProperties> = {
    Informative: {
      color: "var(--text-muted)",
    },
    Planned: {
      color: "var(--text-muted)",
      borderStyle: "dashed",
    },
    Normative: {
      color: "var(--text)",
      fontWeight: 700,
    },
  };

  return <span style={{ ...base, ...variants[status] }}>{status}</span>;
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
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: 8,
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginBottom: note ? 10 : 0,
        }}
      >
        Version {version} · Effective {effectiveDate}
      </div>

      {note && (
        <div
          style={{
            fontSize: 13,
            color: "var(--text)",
            background: "var(--panel)",
            border: "1px solid var(--border)",
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
