"use client";

import { AboutSection } from "@/components/AboutSection";
import {
  DesktopSidebar,
  MobileNavigation,
  useActiveSection,
} from "@/components/Navigation";
import { ProjectSection } from "@/components/ProjectSection";
import { NAV_ITEMS, PROJECTS } from "@/lib/content";
import { useCallback, useState } from "react";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Exhibition() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

  const navProps = {
    activeSection,
    onNavigate: handleNavigate,
    mobileOpen,
    onMobileToggle: () => setMobileOpen((prev) => !prev),
    onMobileClose: () => setMobileOpen(false),
  };

  return (
    <>
      <MobileNavigation {...navProps} />
      <DesktopSidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="exhibition-scroll w-full">
        {PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
        <AboutSection />
      </main>
    </>
  );
}
