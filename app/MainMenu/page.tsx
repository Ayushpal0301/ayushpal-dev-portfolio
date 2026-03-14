"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import mainImage from "../../public/assets/mainimage.png";

const services = [
  {
    title: "Web Development",
    desc: "Blogs and commerce sites built for speed.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Interfaces for mobile and the web.",
    icon: "🎨",
  },
  {
    title: "Advertising",
    desc: "Campaign landing pages that convert.",
    icon: "📣",
    cta: "Order Now",
  },
];

export default function MainMenu() {
  const titles = ["Front-end Developer", "React.js Developer", "Next.js Developer", "MERN Stack Learner"];
  const [index, setIndex] = useState(0);

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
              className="group rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{service.icon}</span>
                <span className="h-10 w-10 rounded-full bg-[var(--muted)] text-[var(--accent)] grid place-items-center font-semibold">
                  &gt;
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text-strong)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-subtle)] leading-relaxed">
                {service.desc}
              </p>
              {service.cta && (
                <button className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  {service.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
