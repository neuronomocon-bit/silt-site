import React from "react";

export function PageWrap({
  children,
  maxWidth = 880,
}: {
  children: React.ReactNode;
  maxWidth?: number;
}) {
  return <div style={{ maxWidth }}>{children}</div>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, margin: "22px 0 8px" }}>{children}</h2>;
}

export function MutedP({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p style={{ color: "#5a5a5a", lineHeight: 1.65, marginTop: 0, ...style }}>
      {children}
    </p>
  );
}

export function StrongBox({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid #e7e7e7",
        borderRadius: 14,
        padding: 16,
        background: "#fafafa",
        margin: "22px 0",
        color: "#5a5a5a",
        lineHeight: 1.6,
      }}
    >
      <strong>{title}</strong>
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
}

export function Callout({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        border: "1px solid #e7e7e7",
        borderRadius: 14,
        padding: 14,
        background: "#ffffff",
        color: "#5a5a5a",
        fontSize: 14,
        lineHeight: 1.6,
        margin: "22px 0",
      }}
    >
      <strong>{title}</strong>
      <div style={{ marginTop: 8 }}>{children}</div>
    </section>
  );
}

export function Dot({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: 999,
        border: "1px solid #cfcfcf",
        background: active ? "#111" : "#fff",
        verticalAlign: "middle",
      }}
    />
  );
}
