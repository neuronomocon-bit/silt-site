import React from "react";

/* ---------- Layout ---------- */

export function PageWrap({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 880 }}>{children}</div>;
}

/* ---------- Typography ---------- */

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        marginTop: 28,
        marginBottom: 12,
        fontSize: 20,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

export function MutedP({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        color: "#5a5a5a",
        lineHeight: 1.6,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/* ---------- Containers ---------- */

export function StrongBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #e7e7e7",
        borderRadius: 14,
        padding: 16,
        margin: "20px 0",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div style={{ color: "#5a5a5a", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

/* ---------- Callouts (document status / notices) ---------- */

export function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderLeft: "3px solid #d0d0d0",
        padding: "10px 14px",
        margin: "18px 0",
        background: "#fafafa",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#6a6a6a",
          marginBottom: 6,
          fontWeight: 600,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: "#444",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Indicators ---------- */

export function Dot({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        border: "1px solid #cfcfcf",
        background: active ? "#111" : "#ffffff",
      }}
    />
  );
}
