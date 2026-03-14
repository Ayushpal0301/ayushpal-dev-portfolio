type NavItem = {
  label: string;
  active?: boolean;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Theme", path: "M12 3c-1 1.2-1.6 2.7-1.6 4.4A6.6 6.6 0 0 0 17 14c1.7 0 3.2-.6 4.4-1.6A9 9 0 1 1 12 3Z" },
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

export default function RightsideMenu() {
  return (
    <aside className="relative flex flex-col items-center">
      <div className="absolute inset-y-0 right-0  " aria-hidden />
      <div className="z-10 h-328.75 flex flex-col items-center gap-4 w-20 bg-white px-3 py-5 shadow-sm border border-[#ececf3]">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              className={`grid h-12 w-12 place-items-center rounded-full border transition shadow-sm ${
                item.active
                  ? "border-[#f3c96b] bg-[#f3b321] text-white"
                  : "border-transparent bg-[#f4f4fb] text-[#7c7c8d] hover:bg-[#ececf6]"
              }`}
              aria-label={item.label}
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 ${item.active ? "fill-white" : "fill-[#7c7c8d]"}`}
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
