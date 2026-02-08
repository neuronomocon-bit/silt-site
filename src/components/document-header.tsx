import React from "react";

export function DocumentHeader({
  title,
  subtitle,
  status,
  version,
  effectiveDate,
  note,
}: {
  title: string;
  subtitle?: string;
  status: string;
  version: string;
  effectiveDate: string;
  note?: string;
}) {
  return (
    <header
      style={{
        borderBottom: "1px solid #e7e7e7",
        paddingBottom: 16,
        marginBottom: 24,
      }}
    >
      <h1
        style={{
          fontSize: 36,
          letterSpacing: "-0.02em",
          margin: "0 0 6px",
        }}
      >
        {title}
      </h1>

      {subtitle ? (
        <div style={{ fontSize: 15, color: "#6a6a6a", marginBottom: 10 }}>
          {subtitle}
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px 24px",
          fontSize: 14,
          color: "#5a5a5a",
        }}
      >
        <div>
          <strong>Status:</strong> {status}
        </div>
        <div>
          <strong>Version:</strong> {version}
        </div>
        <div>
          <strong>Effective date:</strong> {effectiveDate}
        </div>
      </div>

      {note ? (
        <div
          style={{
            marginTop: 14,
            borderLeft: "4px solid #e7e7e7",
            padding: "10px 14px",
            background: "#fafafa",
            color: "#5a5a5a",
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {note}
        </div>
      ) : null}
    </header>
  );
}
