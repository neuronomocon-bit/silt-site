"use client";

import React from "react";
import { usePathname } from "next/navigation";

function NavPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        padding: "7px 10px",
        borderRadius: 999,
        border: "1px solid #e7e7e7",
        textDecoration: "none",
        fontSize: 13,
        lineHeight: 1,
        color: active ? "#111" : "#5a5a5a",
        background: active ? "#f3f3f3" : "#fff",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
}

export function SiteNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

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
      <NavPill href="/methodology" label="Methodology" active={isActive("/methodology")} />
      <NavPill href="/example" label="S.E.B. public example" active={isActive("/example")} />
      <NavPill href="/seb" label="Dashboard (planned)" active={isActive("/seb")} />
      <NavPill href="/resources" label="Resources" active={isActive("/resources")} />
      <NavPill href="/disclaimer" label="Disclaimer" active={isActive("/disclaimer")} />
    </nav>
  );
}
