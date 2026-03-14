"use client";

import Image from "next/image";
import mainImage from "../../public/assets/mainimage.png";
import { useEffect, useState } from "react";



const services = [
  {
    title: "Web Development",
    desc: "Blog, E‑Commerce",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Mobile App, Website",
    icon: "🎨",
  },
  {
    title: "Advertising",
    desc: "Campaigns, Landing Pages",
    icon: "📣",
    cta: "Order Now",
  },
];

export default function MainMenu() {

  
    const texts= ["Front-end Developer", "React.js Developer", "Next.js Developer", "MERN Stack Learner"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4000);   

        return () => clearInterval(interval);
    }, []);
  return (
    <main className="flex-1 bg-[#f4f5fb] ">
      <section className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-8 bg-white rounded-2xl shadow-sm border border-[#ececf3] p-10 relative overflow-hidden">
        <div className="flex gap-5">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8b8b9c]">
            Creative Frontend
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#1f1f27]">
            I&apos;m Ayush Pal <br />
            <span className="text-[#f2aa41]">{texts[index]}</span>
          </h1>
          <p className="text-base leading-relaxed text-[#66667a] max-w-2xl">
            I am a passionate Frontend Developer with experience in building responsive and modern web applications using React.js, Next.js, JavaScript, HTML, and CSS. I enjoy creating clean UI designs and solving real-world problems through code. Currently, I am learning the MERN stack and working on full-stack projects to improve my development skills.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-5">
            <button className="rounded-md bg-[#f2aa41] px-6 py-3 text-sm font-semibold text-[#1f1f27] shadow hover:brightness-105 transition">
              Hire Me
            </button>
            
          </div>
          <div className="flex items-center gap-5 pt-2 text-sm text-[#8b8b9c]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#64cc5a]" />
              <span>Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#f2aa41]" />
              <span>Remote friendly</span>
            </div>
          </div>
        
        </div>
          <div className="relative flex items-center ">
          <div className="absolute " />
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
        <div className="absolute -left-8 top-10 h-16 w-16 rounded-full border-[18px] border-[#f2aa41]/40" />
        <div className="absolute right-16 bottom-10 h-10 w-10 rounded-full border-[12px] border-[#64cc5a]/50" />
        <div className="absolute right-10 top-8 h-12 w-12 rotate-6 border-[8px] border-[#f88451]/40 rounded-2xl" />
      </section>

      <section className="mt-30 p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1f1f27]">My Services</h2>
          <p className="mt-3 text-sm text-[#777788] max-w-xl mx-auto">
            Tailor-made interfaces, design systems, and product narratives that help brands
            launch quickly and stand out online.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-[#ececf3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{service.icon}</span>
                <span className="h-10 w-10 rounded-full bg-[#fff4df] text-[#f2aa41] grid place-items-center font-semibold">
                  →
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1f1f27]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#777788] leading-relaxed">
                {service.desc}
              </p>
              {service.cta && (
                <button className="mt-4 text-sm font-semibold text-[#f2aa41]">
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
