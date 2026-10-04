"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-bar">
        <a href="#top" className="brand">
          <span className="logo logo-sm">
            <Image src="/logo.jpeg" alt="Level Up MMA Academy" width={44} height={44} />
          </span>
          <span className="brand-text">
            <span className="brand-name">LEVEL UP</span>
            <span className="brand-sub">MMA ACADEMY</span>
          </span>
        </a>
        <nav className="nav-wide">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#trial" className="btn btn-gold header-cta">
          Free trial
        </a>
        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <nav className="nav-narrow" onClick={() => setMenuOpen(false)}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
