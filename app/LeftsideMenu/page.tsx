import Image from "next/image";
import avatar from "../../public/assets/avatar.png";

const socialIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-pal-518b0326a/",
    path: "M4 9h3v12H4V9Zm1.5-4a2 2 0 1 1 0 4a2 2 0 0 1 0-4ZM9 9h3v1.6h.1A3.3 3.3 0 0 1 15 9c3 0 3.6 2 3.6 4.7V21h-3v-6.2c0-1.5 0-3.3-2-3.3s-2.2 1.6-2.2 3.2V21H9V9Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/iamayush_.1?utm_source=qr&igsh=anByZ2Q1YmpkeWNy",
    path: "M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm11 .5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 8.5A3.5 3.5 0 1 1 8.5 12A3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Z",
  },
  {
    label: "Call",
    href: "tel:+916269366139",
    path: "M6.6 4.1c.2-.2.5-.3.8-.3h2c.5 0 .9.3 1 .8l.6 2.6c0 .3 0 .6-.2.8l-1.3 1.4a8 8 0 0 0 3.6 3.6l1.4-1.3c.2-.2.5-.3.8-.2l2.6.6c.5.1.8.5.8 1v2c0 .3-.1.6-.3.8l-1.4 1.4c-.4.4-1 .6-1.5.5c-2.3-.5-4.5-1.7-6.4-3.6c-1.9-1.9-3.1-4.1-3.6-6.4c-.1-.5 0-1 .5-1.5l1.4-1.4Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/916269366139",
    path: "M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 6.1 10.4l-.2.3a1 1 0 0 1-.6.4l-1.6.4l-1.5.4a1 1 0 0 1-.9-.3l-.9-1a1 1 0 0 1 .1-1.4l.8-.8c.2-.2.3-.5.2-.8c-.2-.4-1-1.1-1.4-1.3c-.3-.2-.6-.2-.8 0l-.9.6a1 1 0 0 1-1.2-.1l-.6-.6l-.6-.6a1 1 0 0 1-.1-1.2l.6-.9c.2-.3.2-.6 0-.9c-.2-.4-.9-1.2-1.3-1.4c-.3-.1-.6 0-.8.2l-.8.8a1 1 0 0 1-1.4.1l-1-1a1 1 0 0 1-.3-.9l.4-1.5l.4-1.6a1 1 0 0 1 .4-.6l.3-.2A7 7 0 0 1 12 5Z",
  },
];

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full h-2 rounded-full bg-[var(--muted)]">
    <div
      className="h-full rounded-full bg-[var(--accent)]"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default function LeftsideMenu() {
  return (
    <aside className="w-[320px] h-328.75 bg-[var(--card)] border border-[var(--card-border)] px-8 py-10 flex flex-col gap-8 shadow-sm">
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
        <div className="font-semibold text-xl tracking-tight text-[var(--text-strong)]">
          Ayush Pal
        </div>
        <div className="text-sm font-medium text-[var(--text-subtle)]">
          Web Developer
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full border border-[var(--card-border)] bg-[var(--card)] text-[var(--accent)] shadow-sm grid place-items-center hover:-translate-y-0.5 transition"
              aria-label={icon.label}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-3 text-sm text-[var(--text-subtle)]">
        {[
          ["Age:", "22"],
          ["Residence:", "India"],
          ["Freelance:", "Available"],
          ["Address:", "Indore, India"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-center rounded-[8px] border border-[var(--muted)] px-3 py-2 bg-[var(--muted)]"
          >
            <span className="font-semibold text-[var(--accent)]">{label}</span>
            <span
              className={`justify-self-end font-semibold ${
                label === "Freelance:"
                  ? "text-[#64cc5a]"
                  : "text-[var(--text-strong)]"
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        <div>
          <div className="font-semibold text-sm text-[var(--text-strong)] uppercase tracking-[0.08em]">
            Languages
          </div>
          <div className="mt-3 grid gap-3">
            {[
              ["English", 90],
              ["Hindi", 85],
            ].map(([name, value]) => (
              <div key={name}>
                <div className="mb-1 flex items-center justify-between text-xs text-[var(--text-subtle)]">
                  <span>{name}</span>
                  <span className="font-semibold text-[var(--text-strong)]">
                    {value}%
                  </span>
                </div>
                <ProgressBar value={value as number} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold text-sm text-[var(--text-strong)] uppercase tracking-[0.08em]">
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
                <div className="mb-1 flex items-center justify-between text-xs text-[var(--text-subtle)]">
                  <span>{name}</span>
                  <span className="font-semibold text-[var(--text-strong)]">
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
        <div className="font-semibold text-sm text-[var(--text-strong)] uppercase tracking-[0.08em]">
          Extra Skills
        </div>
        <div className="grid gap-2 text-[var(--text-subtle)]">
          {[
            "Bootstrap, Materialize",
            "Vercel, Netlify",
            "GitHub",
            "Git knowledge",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-[var(--accent)] text-[var(--accent)] text-[10px] font-bold">
                *
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <button className="mt-3 flex items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:bg-transparent hover:text-[var(--accent)]">
          Download CV
        </button>
      </div>
    </aside>
  );
}
