"use client";

import React from "react";
import { usePathname } from "next/navigation";

function NavPill({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 11px",
        borderRadius: 999,
        border: active ? "1px solid #cfcfcf" : "1px solid #e7e7e7",
        textDecoration: "none",
        fontSize: 12.5,
        lineHeight: 1,
        color: active ? "#111" : "#5a5a5a",
        background: active ? "#f6f6f6" : "#fff",
        whiteSpace: "nowrap",
        fontWeight: active ? 600 : 500,
        transition: "background 120ms ease, border-color 120ms ease, color 120ms ease",
      }}
      onMouseEnter={(e) => {
        if (active) return;
        e.currentTarget.style.background = "#fafafa";
        e.currentTarget.style.borderColor = "#dddddd";
        e.currentTarget.style.color = "#333";
      }}
      onMouseLeave={(e) => {
        if (active) return;
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "#e7e7e7";
        e.currentTarget.style.color = "#5a5a5a";
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          border: "1px solid #cfcfcf",
          background: active ? "#111" : "#fff",
          flex: "0 0 auto",
        }}
      />
      {label}
    </a>
  );
}

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <NavPill href="/our-work" label="Our Work" />
      <NavPill href="/services" label="Services" />

      {/* External links to sentienceevaluationbattery.com */}
      <span style={{ width: 1, height: 16, background: "#e0e0e0", flexShrink: 0 }} />
      <NavPill href="https://sentienceevaluationbattery.com/admin" label="S.E.B." />
      <NavPill href="https://sentienceevaluationbattery.com/client" label="Client Portal" />
      <NavPill href="https://sentienceevaluationbattery.com/cream_current.html" label="CREAM" />
    </nav>
  );
}
