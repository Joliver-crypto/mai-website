"use client";

import {
  NAV_ITEMS,
  PROJECTS,
  SECTION_PALETTES,
  SITE,
} from "@/lib/content";
import type { ProjectPalette } from "@/lib/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const HOME_SECTION = PROJECTS[0]?.id ?? "photobook";
const HOME_NAV_ID = "mai-nguy";
const DEFAULT_PALETTE = PROJECTS[0]?.palette ?? SECTION_PALETTES.about;

type NavigationProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
  mobileOpen: boolean;
  onMobileToggle: () => void;
  onMobileClose: () => void;
};

function getPaletteBehindPoint(y: number): ProjectPalette {
  const sections = [
    ...PROJECTS.map((p) => ({
      el: document.getElementById(p.id),
      palette: p.palette,
    })),
    {
      el: document.getElementById("about"),
      palette: SECTION_PALETTES.about,
    },
  ].filter((s): s is { el: HTMLElement; palette: ProjectPalette } => !!s.el);

  for (const { el, palette } of sections) {
    const { top, bottom } = el.getBoundingClientRect();
    if (y >= top && y <= bottom) return palette;
  }

  if (sections.length === 0) return DEFAULT_PALETTE;

  const firstTop = sections[0].el.getBoundingClientRect().top;
  const lastBottom =
    sections[sections.length - 1].el.getBoundingClientRect().bottom;

  if (y < firstTop) return sections[0].palette;
  if (y > lastBottom) return sections[sections.length - 1].palette;

  return DEFAULT_PALETTE;
}

function useNavLinkPalettes(linkIds: string[]) {
  const [palettes, setPalettes] = useState<Record<string, ProjectPalette>>(
    () => Object.fromEntries(linkIds.map((id) => [id, DEFAULT_PALETTE]))
  );
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const setRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      refs.current[id] = el;
    },
    []
  );

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const next: Record<string, ProjectPalette> = {};

      for (const id of linkIds) {
        const el = refs.current[id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const y = rect.top + rect.height / 2;
        next[id] = getPaletteBehindPoint(y);
      }

      setPalettes((prev) => {
        const changed = linkIds.some(
          (id) => next[id] && prev[id]?.text !== next[id].text
        );
        if (!changed) return prev;
        return { ...prev, ...next };
      });
    };

    const onUpdate = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    onUpdate();
    window.addEventListener("scroll", onUpdate, { passive: true });
    window.addEventListener("resize", onUpdate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onUpdate);
      window.removeEventListener("resize", onUpdate);
    };
  }, [linkIds]);

  return { palettes, setRef };
}

export function MobileNavigation({
  activeSection,
  onNavigate,
  mobileOpen,
  onMobileToggle,
  onMobileClose,
}: NavigationProps) {
  const workItems = NAV_ITEMS.filter((item) => item.group === "work");
  const infoItems = NAV_ITEMS.filter((item) => item.group === "info");

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        className="fixed top-6 left-6 z-50 flex h-9 w-9 items-center justify-center text-[#1a1816] lg:hidden"
        onClick={onMobileToggle}
      >
        <span className="sr-only">Menu</span>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <path
            d="M0 1h18M0 6h18M0 11h18"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onMobileClose}
        aria-hidden={!mobileOpen}
      />

      <nav
        className={`nav-panel fixed top-0 left-0 z-40 flex h-full w-[min(280px,85vw)] flex-col border-r border-black/10 bg-transparent px-7 py-10 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Exhibition navigation"
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute top-5 right-5 text-black/40"
          onClick={onMobileClose}
        >
          ✕
        </button>
        <SidebarContent
          activeSection={activeSection}
          workItems={workItems}
          infoItems={infoItems}
          onNavigate={onNavigate}
        />
      </nav>
    </>
  );
}

export function DesktopSidebar({
  activeSection,
  onNavigate,
}: Pick<NavigationProps, "activeSection" | "onNavigate">) {
  const workItems = NAV_ITEMS.filter((item) => item.group === "work");
  const infoItems = NAV_ITEMS.filter((item) => item.group === "info");

  const linkIds = useMemo(
    () => [HOME_NAV_ID, ...NAV_ITEMS.map((item) => item.id)],
    []
  );
  const { palettes, setRef } = useNavLinkPalettes(linkIds);

  return (
    <nav
      className="pointer-events-none fixed top-0 left-0 z-40 hidden max-h-screen w-max max-w-[11.5rem] flex-col overflow-y-auto bg-transparent py-10 pl-5 pr-3 lg:flex"
      aria-label="Exhibition navigation"
    >
      <div className="pointer-events-auto">
        <SidebarContent
          activeSection={activeSection}
          workItems={workItems}
          infoItems={infoItems}
          onNavigate={onNavigate}
          linkPalettes={palettes}
          setRef={setRef}
        />
      </div>
    </nav>
  );
}

function SidebarContent({
  activeSection,
  workItems,
  infoItems,
  onNavigate,
  linkPalettes,
  setRef,
}: {
  activeSection: string;
  workItems: typeof NAV_ITEMS;
  infoItems: typeof NAV_ITEMS;
  onNavigate: (id: string) => void;
  linkPalettes?: Record<string, ProjectPalette>;
  setRef?: (id: string) => (el: HTMLElement | null) => void;
}) {
  const adaptive = !!linkPalettes && !!setRef;

  return (
    <>
      <header className="mb-8">
        <button
          type="button"
          ref={adaptive ? setRef(HOME_NAV_ID) : undefined}
          onClick={() => onNavigate(HOME_SECTION)}
          className="text-left transition-opacity duration-150 hover:opacity-70"
        >
          <h1
            className="font-serif text-xl font-light tracking-tight transition-colors duration-200"
            style={
              adaptive
                ? { color: linkPalettes[HOME_NAV_ID]?.text ?? DEFAULT_PALETTE.text }
                : { color: "#1a1816" }
            }
          >
            {SITE.name}
          </h1>
        </button>
      </header>

      <ul className="space-y-1.5">
        {workItems.map((item) => (
          <SidebarLink
            key={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            palette={adaptive ? linkPalettes[item.id] : undefined}
            buttonRef={adaptive ? setRef(item.id) : undefined}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </ul>

      <ul className="mt-6 space-y-1.5">
        {infoItems.map((item) => (
          <SidebarLink
            key={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            palette={adaptive ? linkPalettes[item.id] : undefined}
            buttonRef={adaptive ? setRef(item.id) : undefined}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </ul>
    </>
  );
}

function SidebarLink({
  label,
  isActive,
  palette,
  buttonRef,
  onClick,
}: {
  label: string;
  isActive: boolean;
  palette?: ProjectPalette;
  buttonRef?: (el: HTMLElement | null) => void;
  onClick: () => void;
}) {
  if (palette) {
    return (
      <li>
        <button
          type="button"
          ref={buttonRef}
          onClick={onClick}
          className="block w-full py-0.5 text-left text-[12px] leading-snug transition-colors duration-200"
          style={{
            color: isActive ? palette.text : palette.textMuted,
            opacity: isActive ? 1 : 0.7,
          }}
        >
          {label}
        </button>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`block w-full py-0.5 text-left text-[12px] leading-snug ${
          isActive ? "text-[#1a1816]" : "text-black/45 hover:text-black/70"
        }`}
      >
        {label}
      </button>
    </li>
  );
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((item): item is { id: string; el: HTMLElement } => !!item.el);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        if (visible.size === 0) return;

        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        if (best) setActiveSection(best[0]);
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
