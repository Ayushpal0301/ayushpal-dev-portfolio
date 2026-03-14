"use client";

import { useTheme } from "../theme-provider";

type NavItem = {
  label: string;
  active?: boolean;
  path: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    active: true,
    path: "M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-8.5Z",
  },
  { label: "Gallery", path: "M4 6h16v12H4V6Zm3 2v6h10V8H7Zm2 1h3v3H9V9Z" },
  { label: "Users", path: "M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-6.5 6a4.5 4.5 0 0 1 9 0H5.5Zm9 0a4.5 4.5 0 0 1 6-4.2v1c0 1.5-.8 2.8-2 3.6H14.5Z" },
  { label: "Projects", path: "M5 6h14v12H5V6Zm2 2v8h10V8H7Zm2 1h3v3H9V9Z" },
  { label: "Blog", path: "M7 5h10v14H7V5Zm2 2v2h6V7H9Zm0 4v2h6v-2H9Zm0 4v2h6v-2H9Z" },
  { label: "Contact", path: "M4 7h16v10H4V7Zm2 2v6h12V9H6Zm1.5 1.5 3.5 2.5 3.5-2.5" },
];

const moonPath = "M12 3c-1 1.2-1.6 2.7-1.6 4.4A6.6 6.6 0 0 0 17 14c1.7 0 3.2-.6 4.4-1.6A9 9 0 1 1 12 3Z";
const sunPath =
  "M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm0-5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm10.95-5.95a1 1 0 0 1 0 1.4l-.7.71a1 1 0 0 1-1.41-1.42l.71-.7a1 1 0 0 1 1.4 0ZM8.46 17.54a1 1 0 0 1 0 1.4l-.71.71a1 1 0 0 1-1.41-1.42l.71-.7a1 1 0 0 1 1.4 0ZM18.95 15.54a1 1 0 0 1-1.4 0l-.71-.71a1 1 0 0 1 1.42-1.41l.7.71a1 1 0 0 1 0 1.4ZM7.46 8.46a1 1 0 0 1-1.4 0l-.71-.71A1 1 0 0 1 6.77 6.34l.7.71a1 1 0 0 1 0 1.41Z";

export default function RightsideMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="relative h-328.75 flex flex-col items-center bg-[var(--card)] ">
      <div className="  inset-y-0 right-0 w-20 " aria-hidden />

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="mb-4 mt-4 grid h-11 w-11 place-items-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-[var(--text-strong)] shadow-sm hover:bg-[var(--muted)]"
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
          <div key={item.label}>
            <button
              className={`grid h-12 w-12 place-items-center rounded-full border transition shadow-sm ${
                item.active
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-transparent bg-[var(--muted)] text-[var(--text-subtle)] hover:bg-[var(--card-border)]/30"
              }`}
              aria-label={item.label}
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 ${item.active ? "fill-white" : "fill-[var(--text-subtle)]"}`}
              >
                <path d={item.path} />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
