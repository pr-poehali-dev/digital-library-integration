import { useState } from "react";
import Icon from "@/components/ui/icon";

interface GridItem {
  label: string;
  desc: string;
}

interface TimelineItem {
  year: string;
  event: string;
}

interface StatItem {
  country: string;
  rank: string;
  detail: string;
}

interface SlideMeta {
  student: string;
  teacher: string;
}

interface Slide {
  id: number;
  type: "cover" | "intro" | "grid" | "timeline" | "stats" | "final";
  title: string;
  subtitle?: string;
  content?: string;
  meta?: SlideMeta;
  items?: GridItem[];
  timeline?: TimelineItem[];
  stats?: StatItem[];
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Smart Materials",
    type: "cover",
    meta: {
      student: "Student: Trofimenko P.A., Group 6203",
      teacher: "",
    },
  },
  {
    id: 2,
    title: "What are Smart Materials?",
    subtitle: "Materials that respond to the environment",
    content:
      "Smart materials are engineered substances that change their properties in response to external stimuli such as temperature, pressure, electric or magnetic fields. They form the foundation of next-generation technologies across medicine, aerospace, and construction.",
    type: "intro",
  },
  {
    id: 3,
    title: "Types of Smart Materials",
    subtitle: "Classification by response mechanism",
    content: "Smart materials are grouped by the type of stimulus they respond to. Each class has unique characteristics and a wide range of applications in modern engineering.",
    items: [
      { label: "Shape Memory Alloys", desc: "Return to original shape after deformation when heated" },
      { label: "Piezoelectric Materials", desc: "Generate electricity under mechanical stress" },
      { label: "Magnetostrictive Materials", desc: "Change shape in response to a magnetic field" },
      { label: "Chromogenic Materials", desc: "Alter color or transparency under stimuli" },
    ],
    type: "grid",
  },
  {
    id: 4,
    title: "History of Smart Materials",
    subtitle: "From discovery to modern applications",
    content: "The development of smart materials spans several decades, driven by advances in materials science and engineering. Each milestone opened new possibilities for adaptive technologies.",
    timeline: [
      { year: "1932", event: "Shape memory effect discovered in Au-Cd alloy" },
      { year: "1962", event: "Nitinol (NiTi) shape memory alloy developed at U.S. Navy" },
      { year: "1980s", event: "Piezoelectric actuators adopted in aerospace industry" },
      { year: "2000s", event: "Smart materials enter biomedical implants" },
      { year: "2020s", event: "4D printing with smart polymers becomes reality" },
    ],
    type: "timeline",
  },
  {
    id: 5,
    title: "Shape Memory Alloys",
    subtitle: "The most widely used smart material",
    content:
      "Shape Memory Alloys (SMAs) like Nitinol can be deformed at low temperatures and return to their original shape when heated. They are used in medical stents, robotics, aerospace actuators, and eyeglass frames due to their durability and biocompatibility.",
    type: "intro",
  },
  {
    id: 6,
    title: "Applications in Medicine",
    subtitle: "Smart materials saving lives",
    content: "Biomedical engineering relies heavily on smart materials for minimally invasive devices and adaptive implants. Their unique properties enable treatments that were impossible with conventional materials.",
    items: [
      { label: "Cardiovascular Stents", desc: "Self-expanding NiTi stents open blocked arteries" },
      { label: "Orthopedic Implants", desc: "Adaptive bone fixation with shape memory properties" },
      { label: "Drug Delivery", desc: "Thermally triggered capsules release drugs on demand" },
      { label: "Dental Wires", desc: "SMA braces apply constant gentle force to teeth" },
    ],
    type: "grid",
  },
  {
    id: 7,
    title: "Piezoelectric Technology",
    subtitle: "Turning force into electricity",
    content:
      "Piezoelectric materials generate an electric charge when mechanically stressed. They power sensors, ultrasound devices, energy harvesters in footwear, and precision actuators in hard drives and cameras — bridging the gap between mechanical and electrical worlds.",
    type: "intro",
  },
  {
    id: 8,
    title: "Challenges & Limitations",
    subtitle: "Barriers to wider adoption",
    content: "Despite their enormous potential, smart materials face significant challenges that slow down commercialization and large-scale industrial adoption.",
    items: [
      { label: "High Production Cost", desc: "Complex synthesis raises the price significantly" },
      { label: "Fatigue & Durability", desc: "Repeated cycles degrade performance over time" },
      { label: "Limited Temperature Range", desc: "Many materials operate only in narrow conditions" },
      { label: "Scalability", desc: "Difficult to manufacture at industrial volumes" },
    ],
    type: "grid",
  },
  {
    id: 9,
    title: "Global Research Leaders",
    subtitle: "Countries driving innovation in smart materials",
    content: "Research into smart materials is concentrated in countries with strong engineering and materials science programs. Global collaboration is accelerating breakthrough discoveries.",
    stats: [
      { country: "🇺🇸 USA", rank: "#1", detail: "MIT, NASA, DARPA programs" },
      { country: "🇯🇵 Japan", rank: "#2", detail: "Robotics & biomedical integration" },
      { country: "🇩🇪 Germany", rank: "#3", detail: "Automotive & aerospace actuators" },
      { country: "🇨🇳 China", rank: "#4", detail: "Large-scale manufacturing & 4D printing" },
    ],
    type: "stats",
  },
  {
    id: 10,
    title: "Thank You for Your Attention",
    type: "final",
  },
];

// ── Palette ──────────────────────────────────────────────
const C = {
  bg: "#0B1120",
  surface: "rgba(255,255,255,0.05)",
  border: "rgba(99,210,255,0.15)",
  accent: "#63D2FF",
  accentDim: "rgba(99,210,255,0.55)",
  text: "#E8F4FF",
  textMid: "rgba(232,244,255,0.65)",
  textDim: "rgba(232,244,255,0.40)",
};

function SlideGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {items.map((item, i) => (
        <div
          key={i}
          style={{ borderLeft: `3px solid ${C.accent}` }}
          className="flex items-center gap-4 pl-4 py-3"
        >
          <div
            style={{ color: C.bg, background: C.accent }}
            className="w-7 h-7 rounded-sm flex items-center justify-center font-mono font-bold text-sm shrink-0"
          >
            {i + 1}
          </div>
          <div className="flex flex-col gap-0.5">
            <div style={{ color: C.text }} className="font-semibold text-sm font-sans">
              {item.label}
            </div>
            <div style={{ color: C.textMid }} className="text-xs font-sans leading-5">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideTimeline({ timeline }: { timeline: TimelineItem[] }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xl">
      {timeline.map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <div style={{ color: C.accent }} className="w-14 text-right font-mono font-semibold text-sm shrink-0">
            {item.year}
          </div>
          <div style={{ background: C.accent }} className="w-2 h-2 rounded-full shrink-0 opacity-70" />
          <div style={{ color: C.textMid }} className="text-sm font-sans">
            {item.event}
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {stats.map((s, i) => (
        <div
          key={i}
          style={{ background: C.surface, border: `1px solid ${C.border}` }}
          className="flex items-center gap-4 rounded-lg px-4 py-3 backdrop-blur-sm"
        >
          <div
            style={{ color: C.accent, borderColor: C.accentDim }}
            className="w-10 text-center font-mono font-bold text-lg shrink-0 border-r pr-4"
          >
            {s.rank}
          </div>
          <div style={{ color: C.text }} className="font-semibold text-sm font-sans flex-1">
            {s.country}
          </div>
          <div style={{ color: C.textMid }} className="text-xs font-sans text-right">
            {s.detail}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div
      style={{ background: C.bg }}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Декоративный градиент */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,210,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(99,210,255,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Прогресс-точки */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              background: i === current ? C.accent : C.textDim,
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8" : "w-1.5"}`}
          />
        ))}
      </div>

      {/* Слайд */}
      <div className="relative z-10 w-full max-w-3xl min-h-[460px] flex flex-col items-center justify-center py-16">

        {/* COVER */}
        {slide.type === "cover" && (
          <div className="flex flex-col items-center gap-8 text-center">
            <div
              style={{ color: C.accent, fontFamily: "monospace", letterSpacing: "0.04em" }}
              className="text-[72px] sm:text-[90px] leading-none font-bold"
            >
              {slide.title}
            </div>
            <div style={{ background: C.accentDim }} className="w-16 h-[1px]" />
            {slide.meta && (
              <div className="flex flex-col gap-1">
                <div style={{ color: C.textMid }} className="font-sans text-sm">
                  {slide.meta.student}
                </div>
              </div>
            )}
          </div>
        )}

        {/* INTRO */}
        {slide.type === "intro" && (
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <div
                style={{ color: C.text }}
                className="font-sans font-bold text-[40px] sm:text-[52px] leading-tight"
              >
                {slide.title}
              </div>
              <div style={{ color: C.accentDim }} className="font-sans text-base">
                {slide.subtitle}
              </div>
            </div>
            <div style={{ color: C.textMid }} className="font-sans text-base leading-7 w-full max-w-xl">
              {slide.content}
            </div>
          </div>
        )}

        {/* GRID */}
        {slide.type === "grid" && slide.items && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div style={{ color: C.text }} className="font-sans font-bold text-[36px] sm:text-[44px] leading-tight">
                {slide.title}
              </div>
              <div style={{ color: C.accentDim }} className="font-sans text-sm">
                {slide.subtitle}
              </div>
            </div>
            {slide.content && (
              <div style={{ color: C.textMid }} className="w-full max-w-xl text-center font-sans text-sm leading-6">
                {slide.content}
              </div>
            )}
            <SlideGrid items={slide.items} />
          </div>
        )}

        {/* TIMELINE */}
        {slide.type === "timeline" && slide.timeline && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div style={{ color: C.text }} className="font-sans font-bold text-[36px] sm:text-[44px] leading-tight">
                {slide.title}
              </div>
              <div style={{ color: C.accentDim }} className="font-sans text-sm">
                {slide.subtitle}
              </div>
            </div>
            {slide.content && (
              <div style={{ color: C.textMid }} className="w-full max-w-xl text-center font-sans text-sm leading-6">
                {slide.content}
              </div>
            )}
            <SlideTimeline timeline={slide.timeline} />
          </div>
        )}

        {/* STATS */}
        {slide.type === "stats" && slide.stats && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div style={{ color: C.text }} className="font-sans font-bold text-[36px] sm:text-[44px] leading-tight">
                {slide.title}
              </div>
              <div style={{ color: C.accentDim }} className="font-sans text-sm">
                {slide.subtitle}
              </div>
            </div>
            {slide.content && (
              <div style={{ color: C.textMid }} className="w-full max-w-xl text-center font-sans text-sm leading-6">
                {slide.content}
              </div>
            )}
            <SlideStats stats={slide.stats} />
          </div>
        )}

        {/* FINAL */}
        {slide.type === "final" && (
          <div className="flex flex-col items-center gap-6 text-center">
            <div
              style={{ color: C.accent, fontFamily: "monospace" }}
              className="font-bold text-[36px] sm:text-[52px] leading-tight"
            >
              {slide.title}
            </div>
          </div>
        )}
      </div>

      {/* Навигация */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          disabled={current === 0}
          style={{ background: C.surface, border: `1px solid ${C.border}` }}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 hover:opacity-80 transition-opacity backdrop-blur-sm"
        >
          <Icon name="ChevronLeft" size={18} style={{ color: C.accent }} />
        </button>

        <div
          style={{ background: C.surface, border: `1px solid ${C.border}` }}
          className="px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          <span style={{ color: C.textMid }} className="font-sans text-sm font-medium">
            {current + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          style={{ background: C.surface, border: `1px solid ${C.border}` }}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 hover:opacity-80 transition-opacity backdrop-blur-sm"
        >
          <Icon name="ChevronRight" size={18} style={{ color: C.accent }} />
        </button>
      </div>
    </div>
  );
}