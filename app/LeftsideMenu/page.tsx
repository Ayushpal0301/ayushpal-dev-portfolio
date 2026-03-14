import Image from "next/image";
import avatar from "../../public/assets/avatar.png";

const socialIcons = [
  { label: "facebook", path: "M9 3h4a4 4 0 0 1 4 4v2h-3v9h-4V9H7V6a3 3 0 0 1 3-3Z" },
  { label: "dribbble", path: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm6.6 8.1h-3.2a13 13 0 0 0-.4-1.4a13 13 0 0 0 2.4-2.3A7.1 7.1 0 0 1 18.6 11Zm-3.5-5.4a11 11 0 0 1-2 2.1a17 17 0 0 0-2.7-3.7a7.1 7.1 0 0 1 4.7 1.6ZM10 6.4a16 16 0 0 1 2.4 3.4a22 22 0 0 1-4.6.5a22 22 0 0 1 2.2-3.9Zm-2.8 5.7a20 20 0 0 0 5.8-.7a11 11 0 0 1 .4 2.2H6.5a7.1 7.1 0 0 1 .7-1.5Zm5.6 5.6a7.1 7.1 0 0 1-7-3.2h6.5c0 .6.1 1.2.2 1.8a14 14 0 0 1 .3 1.4Zm1.8-.7a16 16 0 0 0-.3-1.8c-.1-.5-.2-1-.2-1.5h3.1a7.1 7.1 0 0 1-2.6 3.3Z" },
  { label: "behance", path: "M5 7h3.5A2.5 2.5 0 0 1 11 9.5C11 11 10 12 8.3 12C10 12 11 13 11 14.5A2.5 2.5 0 0 1 8.5 17H5V7Zm2.8 3.4c.7 0 1.2-.5 1.2-1.2S8.5 8 7.8 8H6.6v2.4H7.8ZM8.6 15c.8 0 1.3-.5 1.3-1.3c0-.8-.5-1.3-1.3-1.3H6.6V15h2ZM15.2 8.7c1.8 0 3 1.2 3 3.3V12H14c.1 1 .8 1.8 1.9 1.8c.7 0 1.4-.3 1.8-.8l1.1 1c-.7.9-1.7 1.5-3 1.5c-2 0-3.5-1.5-3.5-3.4s1.4-3.4 2.9-3.4Zm1.5 2.6c-.1-.9-.7-1.4-1.5-1.4s-1.4.5-1.6 1.4h3.1ZM14 7h3v1.1h-3V7Z" },
  { label: "linkedin", path: "M4 9h3v12H4V9Zm1.5-4a2 2 0 1 1 0 4a2 2 0 0 1 0-4ZM9 9h3v1.6h.1A3.3 3.3 0 0 1 15 9c3 0 3.6 2 3.6 4.7V21h-3v-6.2c0-1.5 0-3.3-2-3.3s-2.2 1.6-2.2 3.2V21H9V9Z" },
  { label: "github", path: "M12 .5A11.5 11.5 0 0 0 8.3 22.9c.6.1.8-.2.8-.6v-2.1c-3.4.8-4.1-1.6-4.1-1.6c-.6-1.5-1.5-1.9-1.5-1.9c-1.2-.8.1-.8.1-.8c1.3.1 2 .1 2.7 1.4c1.2 2.1 3.2 1.5 4 .9c.1-.9.5-1.5.8-1.9c-2.7-.3-5.5-1.4-5.5-6.1c0-1.3.5-2.4 1.3-3.3c-.2-.3-.6-1.6.1-3.2c0 0 1-.3 3.3 1.3a11.5 11.5 0 0 1 6 0C17.1 4 18 4.3 18 4.3c.7 1.6.3 2.9.1 3.2c.8.9 1.3 2 1.3 3.3c0 4.7-2.8 5.8-5.5 6.1c.5.4.9 1.2.9 2.4v3.5c0 .4.3.7.8.6A11.5 11.5 0 0 0 12 .5Z" },
];

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full h-2 rounded-full bg-[#f1f1f5]">
    <div
      className="h-full rounded-full bg-[#f2aa41]"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default function LeftsideMenu() {
  return (
    <aside className="w-[320px] min-h-screen bg-white border border-[#e9e9f2] px-8 py-10 flex flex-col gap-8 shadow-sm">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-[6px] border-[#f4c15d]/40" />
          <Image
            src={avatar}
            alt="avatar"
            className="relative z-10 h-32 w-32 rounded-full object-cover"
            priority
          />
        </div>
        <div className="font-semibold text-xl tracking-tight text-[#1f1f27]">
          Ayush Pal
        </div>
        <div className="text-sm font-medium text-[#7f7f90]">
          Front-End Developer
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map((icon) => (
            <span
              key={icon.label}
              className="h-10 w-10 rounded-full border border-[#ececf3] bg-white text-[#f2aa41] shadow-sm grid place-items-center hover:-translate-y-0.5 transition"
              aria-label={icon.label}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d={icon.path} />
              </svg>
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 text-sm text-[#4a4a56]">
        {[
          ["Age:", "22"],
          ["Residence:", "India"],
          ["Freelance:", "Available"],
          ["Address:", "Indore, India"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-center rounded-[8px] border border-[#f1f1f5] px-3 py-2 bg-[#fffaf3]"
          >
            <span className="font-semibold text-[#f2aa41]">{label}</span>
            <span className="justify-self-end font-semibold text-[#1f1f27]">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        <div>
          <div className="font-bold text-l text-[#1f1f27] uppercase tracking-[0.08em]">
            Languages
          </div>
          <div className="mt-3 grid gap-3">
            {[
              ["English", 90],
              ["Hindi", 85],
              ].map(([name, value]) => (
              <div key={name}>
                <div className="mb-1 flex items-center justify-between text-xs text-[#6a6a7a]">
                  <span>{name}</span>
                  <span className="font-semibold text-[#1f1f27]">
                    {value}%
                  </span>
                </div>
                <ProgressBar value={value as number} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-bold text-l text-[#1f1f27] uppercase tracking-[0.08em]">
            Skills
          </div>
          <div className="mt-3 grid gap-3">
            {[
              ["HTML", 90],
              ["CSS", 88],
              ["JavaScript", 82],
              ["React", 80],
              ["TypeScript", 75],
              ["Next.js", 78],
            ].map(([name, value]) => (
              <div key={name}>
                <div className="mb-1 flex items-center justify-between text-xs text-[#6a6a7a]">
                  <span>{name}</span>
                  <span className="font-semibold text-[#1f1f27]">
                    {value}%
                  </span>
                </div>
                <ProgressBar value={value as number} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3 text-sm">
        <div className="font-bold text-l text-[#1f1f27] uppercase tracking-[0.08em]">
          Extra Skills
        </div>
        <div className="grid gap-2 text-[#4a4a56]">
          {[
            "Bootstrap, Materialize",
            "Vercel, Netlify",
            "GitHub",
            "Git knowledge",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-[#f2aa41] text-[#f2aa41] text-[10px] font-bold">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center justify-center gap-2 rounded-md border border-[#1f1f27] bg-[#1f1f27] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1f1f27]">
          Download CV
        </button>
      </div>
    </aside>
  );
  
}
