"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import mainImage from "../../public/assets/mainimage.png";
import branding1 from "../../public/assets/branding1.png";
import branding2 from "../../public/assets/branding2.png";
import branding3 from "../../public/assets/branding3.png";
import branding4 from "../../public/assets/branding4.png";
import branding5 from "../../public/assets/branding5.png";
import branding6 from "../../public/assets/branding6.png";
import branding7 from "../../public/assets/branding7.png";
import uiDesign from "../../public/assets/uiDesign.png";
import webTemplete from "../../public/assets/webTemplete.png";



type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  cta?: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    desc: "Building responsive and modern websites using React and Next.js.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14 stroke-current" fill="none" strokeWidth="1.4">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M9 20h6M12 16v4" />
        <path d="M10 9 8 11l2 2M14 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Designing attractive and user-friendly interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14 stroke-current" fill="none" strokeWidth="1.4">
        <rect x="4" y="4" width="16" height="12" rx="1.5" />
        <path d="M8 8h5M8 11h8M15.5 16.5 18 19M11 16.5l-2.5 2.5" />
        <path d="m13.5 16 4-4" />
      </svg>
    ),
  },
  {
    title: "Frontend Development",
    desc: "Creating clean UI designs with fast performance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14 stroke-current" fill="none" strokeWidth="1.4">
        <path d="M9 7a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0V7Z" />
        <path d="M5 11c0 3.3 2.7 6 6 6h2a6 6 0 0 0 6-6" />
        <path d="M12 17v3M9 20h6" />
      </svg>
    ),
  },
  ];

const recommendations = [
  {
    quoteTitle: "Great Quality!",
    quote:
      "Ayush delivered a clean and responsive website with modern design. His attention to detail and problem-solving skills made the project smooth and successful.",
    name: "James Gouse",
    role: "Graphic Designer",
    avatar:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' fill='none'%3E%3Crect width='96' height='96' rx='48' fill='%23f2aa41'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23ffffff' font-size='36' font-family='Arial' dy='.35em'%3EJ%3C/text%3E%3C/svg%3E",
  },
  {
    quoteTitle: "Amazing Work!",
    quote:
      "Ayush is a passionate developer who focuses on creating professional UI designs and smooth user experiences. Highly recommended for web development projects.",
    name: "Tiana Philips",
    role: "Photographer",
    avatar:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' fill='none'%3E%3Crect width='96' height='96' rx='48' fill='%23f88451'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23ffffff' font-size='36' font-family='Arial' dy='.35em'%3ET%3C/text%3E%3C/svg%3E",
  },
  {
    quoteTitle: "Great Quality!",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet.",
    name: "Talan Westervelt",
    role: "Business Man",
    avatar:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' fill='none'%3E%3Crect width='96' height='96' rx='48' fill='%2364cc5a'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23ffffff' font-size='36' font-family='Arial' dy='.35em'%3EW%3C/text%3E%3C/svg%3E",
  },
];

const education = [
  {
    title: "Rajiv Gandhi Prodyogiki Vishwavidyalaya",
    subtitle: "Bachelor of Technology (B.Tech) – Computer Science",
    role: "Student",
    timeframe: "Jun 2021 - Jun 2025",
    desc: "Studied core subjects related to computer science including web development, database management, and programming fundamentals. Worked on several practical projects such as e-commerce websites and web applications.",
  },
  {
    title: "Madhya Pradesh Board of Secondary Education",
    subtitle: "Higher Secondary Certificate",
    role: "Student",
    timeframe: "Jun 2020 - May 2021",
    desc: "Completed higher secondary education with a focus on science subjects, which helped build a strong foundation in mathematics and logical thinking.",
  },
  {
    title: "Madhya Pradesh Board of Secondary Education",
    subtitle: "High School Certificate",
    role: "Student",
    timeframe: "Jun 2018 - May 2019",
    desc: "Completed secondary education while developing an early interest in computers and technology.",
  },
];

type Work = {
  title: string;
  category: "All" | "UI Design" | "Web Templates" | "Logo" | "Branding";
  image: StaticImageData;
};

const works: Work[] = [
  { title: "School Website Landing Page", category: "UI Design", image: uiDesign },
  { title: "Youtube Banner", category: "Branding", image: branding1 },
  { title: "Letter Head", category: "Branding", image: branding2 },
  { title: "Birthday Invitation", category: "Branding", image: webTemplete },
  { title: "Letter Head", category: "Branding", image: branding3 },
  { title: "Visiting Card", category: "Branding", image: branding4 },
  { title: "Visiting Card", category: "Branding", image: branding5 },
  { title: "Banner", category: "Branding", image: branding7 },
  { title: "Calender", category: "Branding", image: branding6 },
];

export default function MainMenu() {
  const titles = ["Front-end Developer", "React.js Developer", "Next.js Developer", "MERN Stack Learner"];
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"All" | "UI Design" | "Web Templates" | "Logo" | "Branding">("All");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const whatsappNumber = "YOUR_NUMBER_WITH_COUNTRY_CODE"; // e.g., 919876543210
  const whatsappLink =
    whatsappNumber === "YOUR_NUMBER_WITH_COUNTRY_CODE"
      ? "https://wa.me"
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hi Ayush, I just visited your portfolio and would love to chat!"
        )}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <main className="flex-1 bg-[var(--page-bg)]">
      <section className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-8 bg-[var(--card)] rounded-2xl shadow-sm border border-[var(--card-border)] p-10 relative overflow-hidden">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-subtle)]">
              Creative Frontend
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--text-strong)]">
              I&apos;m Ayush Pal <br />
              <span className="text-[var(--accent)]">{titles[index]}</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-subtle)] max-w-2xl">
              I build responsive, modern web apps with React, Next.js, HTML, CSS, and JavaScript. Currently learning the MERN stack while shipping clean UI and reliable front-end foundations.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-5">
              <button className="rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--text-strong)] shadow hover:brightness-105 transition">
                Hire Me
              </button>
            </div>
            <div className="flex items-center gap-5 pt-2 text-sm text-[var(--text-subtle)]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#64cc5a]" />
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                <span>Remote friendly</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="absolute" />
            <div className="relative">
              <Image
                src={mainImage}
                alt="hero"
                className="h-[400px] w-[260px] object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute -left-8 top-10 h-16 w-16 rounded-full border-[18px] border-[color:rgba(242,170,65,0.35)]" />
        <div className="absolute right-16 bottom-10 h-10 w-10 rounded-full border-[12px] border-[color:rgba(100,204,90,0.5)]" />
        <div className="absolute right-10 top-8 h-12 w-12 rotate-6 border-[8px] border-[color:rgba(248,132,81,0.4)] rounded-2xl" />
      </section>

      <section className="mt-12 p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[var(--text-strong)]">My Services</h2>
          <p className="mt-3 text-sm text-[var(--text-subtle)] max-w-xl mx-auto">
            Tailor-made interfaces, design systems, and product narratives that help brands launch quickly and stand out online.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center gap-4"
            >
              <div className="text-[var(--accent)]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-strong)]">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-subtle)] leading-relaxed max-w-[240px]">
                {service.desc}
              </p>
              {service.cta && (
                <button className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                  {service.cta} →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 px-6 py-14 bg-[var(--muted)] rounded-2xl border border-[var(--card-border)]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[var(--text-strong)]">Recommendations</h2>
          <p className="mt-3 text-sm text-[var(--text-subtle)] max-w-2xl mx-auto leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. Lorem ipsum.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((item, idx) => (
            <article
              key={item.name + idx}
              className="rounded-xl bg-[var(--card)] border border-[var(--card-border)] p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex gap-1 text-[var(--accent)] text-xl" aria-label="rating">
                {"★ ★ ★ ★ ★"}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{item.quoteTitle}</h3>
                <p className="text-sm text-[var(--text-subtle)] leading-relaxed">{item.quote}</p>
              </div>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-[var(--muted)]">
                  <Image src={item.avatar} alt={item.name} width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-strong)]">{item.name}</div>
                  <div className="text-xs text-[var(--text-subtle)]">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-2.5 w-2.5 rounded-full ${
                dot === 0 ? "bg-[var(--accent)]" : "bg-[var(--card-border)]"
              }`}
            />
          ))}
        </div>
      </section>

     

      <section className="mt-12 px-6 py-14 bg-[var(--card)] rounded-2xl border border-[var(--card-border)]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[var(--text-strong)]">Education</h2>
          <p className="mt-3 text-sm text-[var(--text-subtle)] max-w-2xl mx-auto leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. Lorem ipsum.
          </p>
        </div>
        <div className="divide-y divide-[var(--card-border)]">
          {education.map((item, idx) => (
            <div
              key={item.title + idx}
              className="grid grid-cols-2  px-5 py-6 "
            >
              <div className="space-y-3">
                <div className="text-base font-semibold text-[var(--text-strong)]">{item.title}</div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-subtle)]">
                  <span className="font-medium text-[var(--text-strong)]">{item.role}</span>
                  <span className="rounded-sm bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold text-[var(--text-strong)] uppercase">
                    {item.timeframe}
                  </span>
                </div>
              </div>
              <div className="space-y-3 ">
                <div className="text-base font-semibold text-[var(--text-strong)]">{item.subtitle}</div>
                <p className="text-sm text-[var(--text-subtle)] leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section className="mt-12 px-6 py-14 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--text-strong)]">Portfolio</h2>
          <p className="mt-3 text-sm text-[var(--text-subtle)] max-w-xl mx-auto leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. Lorem ipsum.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-[var(--text-subtle)]">
          {["All", "UI Design", "Web Templates", "Logo", "Branding"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-3 py-1 transition ${
                activeCategory === cat
                  ? "text-[var(--accent)]"
                  : "hover:text-[var(--text-strong)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works
            .filter((item) => activeCategory === "All" || item.category === activeCategory)
            .map((item, idx) => (
              <button
                key={item.title + idx}
                onClick={() => setSelectedWork(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedWork(item);
                  }
                }}
                className="group relative overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card)] shadow-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    priority={idx < 3}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent opacity-0 transition group-hover:opacity-100">
                  <div className="p-4 text-white">
                    <div className="text-xs uppercase tracking-[0.12em] font-semibold opacity-90">{item.category}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </section>

      {selectedWork && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(0,0,0,0.55)] backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[rgba(255,255,255,0.08)] backdrop-blur-lg shadow-2xl">
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-[rgba(0,0,0,0.55)] px-3 py-1 text-sm font-semibold text-white hover:bg-[rgba(0,0,0,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Close
            </button>
            <div className="relative h-[70vh] w-full sm:h-[80vh] bg-white/10 backdrop-blur-lg">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                fill
                className="object-contain"
                sizes="(min-width:1024px) 900px, 100vw"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[var(--text-subtle)]">{selectedWork.category}</div>
                <div className="text-lg font-semibold text-[var(--text-strong)]">{selectedWork.title}</div>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="rounded-md border border-[var(--card-border)] px-3 py-2 text-sm font-semibold text-[var(--text-strong)] hover:bg-[var(--muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[rgba(0,0,0,0.25)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] animate-bounce motion-reduce:animate-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M16.004 3c-6.627 0-12 5.373-12 12 0 2.116.553 4.085 1.52 5.79L4 29l8.387-1.52A11.93 11.93 0 0 0 16.004 27c6.627 0 12-5.373 12-12s-5.373-12-12-12Zm0 2.4c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6a9.52 9.52 0 0 1-4.807-1.287l-.343-.207-4.966.9.934-4.897-.223-.367A9.54 9.54 0 0 1 6.404 15c0-5.3 4.3-9.6 9.6-9.6Zm-4.104 5.08-.418.013c-.131.004-.328.047-.5.242-.173.195-.656.64-.656 1.56 0 .92.671 1.807.764 1.932.092.125 1.3 2.08 3.208 2.898 1.581.66 1.9.529 2.243.497.343-.033 1.1-.45 1.256-.884.156-.434.156-.806.109-.884-.047-.078-.173-.125-.364-.22-.19-.094-1.125-.553-1.301-.616-.173-.066-.299-.1-.425.094-.125.195-.487.616-.597.742-.109.125-.217.14-.406.047-.19-.094-.8-.294-1.525-.934-.563-.5-.942-1.117-1.052-1.304-.109-.186-.012-.287.082-.38.084-.083.19-.217.284-.325.094-.109.125-.186.19-.311.063-.125.03-.234-.016-.327-.047-.093-.421-1.01-.577-1.386-.153-.367-.309-.317-.425-.322Z" />
        </svg>
      </a>
    </main>
  );
}
