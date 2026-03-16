"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";

type NavItem = {
  label: string;
  id: string;
  path: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    id: "home",
    path: "M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-8.5Z",
  },
  {
    label: "Services",
    id: "services",
    path: "M11.983 2.25c-.355 0-.707.018-1.056.053a.75.75 0 0 0-.659.621l-.3 1.8a7.49 7.49 0 0 0-1.63.94l-1.67-.7a.75.75 0 0 0-.908.217 9.044 9.044 0 0 0-1.5 2.598.75.75 0 0 0 .377.966l1.6.8a7.52 7.52 0 0 0 0 1.88l-1.6.8a.75.75 0 0 0-.377.966 9.04 9.04 0 0 0 1.5 2.598.75.75 0 0 0 .908.217l1.67-.7a7.49 7.49 0 0 0 1.63.94l.3 1.8a.75.75 0 0 0 .659.621c.695.07 1.4.07 2.095 0a.75.75 0 0 0 .659-.62l.3-1.8a7.49 7.49 0 0 0 1.63-.94l1.67.7a.75.75 0 0 0 .908-.217 9.05 9.05 0 0 0 1.5-2.598.75.75 0 0 0-.377-.966l-1.6-.8a7.52 7.52 0 0 0 0-1.88l1.6-.8a.75.75 0 0 0 .377-.966 9.04 9.04 0 0 0-1.5-2.598.75.75 0 0 0-.908-.217l-1.67.7a7.49 7.49 0 0 0-1.63-.94l-.3-1.8a.75.75 0 0 0-.659-.621 12.09 12.09 0 0 0-2.095 0ZM12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z",
  },
  {
    label: "Recommendations",
    id: "recommendations",
    path: "M12 2 14.09 8.26 21 8.27l-5.52 3.87 2.09 6.26L12 14.53l-5.57 3.87 2.09-6.26L3 8.27l6.91-.01L12 2Z",
  },
  {
    label: "Education",
    id: "education",
    path: "M12 3 2 9l10 6 10-6-10-6Zm6 5.6v3.9l-6 3.6-6-3.6V8.6l6 3.6 6-3.6Z",
  },
  {
    label: "Portfolio",
    id: "portfolio",
    path: "M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h5Zm2 0a1 1 0 0 0-1 1h4a1 1 0 0 0-1-1h-2Zm8 4H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm-6 3h2v2h-2v-2Z",
  },
  {
    label: "Blogs",
    id: "blogs",
    path: "M4 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v10h14V7H4Zm2 2h6v2H6V9Zm0 4h6v2H6v-2Zm10-4h2v6h-2V9Z",
  },
];

const moonPath = "M12 3c-1 1.2-1.6 2.7-1.6 4.4A6.6 6.6 0 0 0 17 14c1.7 0 3.2-.6 4.4-1.6A9 9 0 1 1 12 3Z";
const sunPath =
  "M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm0-5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm10.95-5.95a1 1 0 0 1 0 1.4l-.7.71a1 1 0 0 1-1.41-1.42l.71-.7a1 1 0 0 1 1.4 0ZM8.46 17.54a1 1 0 0 1 0 1.4l-.71.71a1 1 0 0 1-1.41-1.42l.71-.7a1 1 0 0 1 1.4 0ZM18.95 15.54a1 1 0 0 1-1.4 0l-.71-.71a1 1 0 0 1 1.42-1.41l.7.71a1 1 0 0 1 0 1.4ZM7.46 8.46a1 1 0 0 1-1.4 0l-.71-.71A1 1 0 0 1 6.77 6.34l.7.71a1 1 0 0 1 0 1.41Z";

export default function RightsideMenu() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      let closestId = navItems[0]?.id ?? "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120); // offset to account for top padding/header
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = item.id;
        }
      });

      setActiveId(closestId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item: NavItem) => {
    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(item.id);
    }
  };

  return (
    <aside className="relative h-328.75 flex flex-col items-center bg-[var(--card)] ">
      <div className="  inset-y-0 right-0 w-20 " aria-hidden />

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="mb-4 mt-4 grid h-11 w-11 place-items-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-[var(--text-strong)] shadow-sm hover:bg-[var(--muted)] cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-[var(--text-strong)]"
        >
          <path d={theme === "light" ? moonPath : sunPath} />
        </svg>
      </button>

      <div className="z-10 flex flex-col items-center mt-30 gap-4 w-20 bg-[var(--card)] px-3 py-5  border-[var(--card-border)]">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              onClick={() => handleClick(item)}
              className={`grid h-12 w-12 place-items-center rounded-full border transition shadow-sm cursor-pointer ${
                item.id === activeId
                  ? "border-[#f2aa41] bg-[#f2aa41] text-white"
                  : "border-transparent bg-[var(--muted)] text-[var(--text-subtle)] hover:bg-[var(--card-border)]/30"
              }`}
              aria-label={item.label}
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 ${item.id === activeId ? "fill-white" : "fill-[var(--text-subtle)]"}`}
              >
                <path d={item.path} />
              </svg>
            </button>
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full whitespace-nowrap rounded-md border border-[var(--card-border)] bg-[var(--card)] px-2 py-1 text-xs font-medium text-[var(--text-strong)] shadow-md opacity-0 group-hover:opacity-100 transition duration-150">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
