import { useState } from "react";
import Icon from "@/components/ui/icon";

interface GridItem {
  icon: string;
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
  icon?: string;
  cta?: string;
  meta?: SlideMeta;
  items?: GridItem[];
  timeline?: TimelineItem[];
  stats?: StatItem[];
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Innovation",
    type: "cover",
    meta: {
      student: "Student: John Smith",
      teacher: "Teacher: Prof. Maria Johnson",
    },
  },
  {
    id: 2,
    title: "What is Innovation?",
    subtitle: "Turning ideas into value",
    content:
      "Innovation is the process of creating new solutions, products, or methods that deliver real value. It combines creativity, technology, and strategy to solve problems in ways the world has never seen before.",
    icon: "Lightbulb",
    type: "intro",
  },
  {
    id: 3,
    title: "Types of Innovation",
    subtitle: "Different paths to change",
    items: [
      { icon: "Layers", label: "Product Innovation", desc: "New goods or services" },
      { icon: "Settings", label: "Process Innovation", desc: "Better ways of working" },
      { icon: "Globe", label: "Business Model Innovation", desc: "New value delivery" },
      { icon: "Users", label: "Social Innovation", desc: "Solutions for society" },
    ],
    type: "grid",
  },
  {
    id: 4,
    title: "History of Innovation",
    subtitle: "Key milestones that changed the world",
    timeline: [
      { year: "1440", event: "Printing Press — Gutenberg" },
      { year: "1769", event: "Steam Engine — James Watt" },
      { year: "1876", event: "Telephone — Alexander Bell" },
      { year: "1991", event: "World Wide Web — Tim Berners-Lee" },
      { year: "2007", event: "Smartphone Era — Apple iPhone" },
    ],
    type: "timeline",
  },
  {
    id: 5,
    title: "Drivers of Innovation",
    subtitle: "What pushes innovation forward",
    content:
      "Innovation is driven by market demand, technological progress, global competition, and human curiosity. Organizations that invest in research and foster a culture of experimentation stay ahead of the curve.",
    icon: "Zap",
    type: "intro",
  },
  {
    id: 6,
    title: "Innovation in Business",
    subtitle: "How companies grow through innovation",
    items: [
      { icon: "TrendingUp", label: "Competitive Advantage", desc: "Stay ahead of rivals" },
      { icon: "DollarSign", label: "Revenue Growth", desc: "New markets & products" },
      { icon: "Shield", label: "Risk Reduction", desc: "Diversified solutions" },
      { icon: "Star", label: "Brand Value", desc: "Reputation for excellence" },
    ],
    type: "grid",
  },
  {
    id: 7,
    title: "Technology & Innovation",
    subtitle: "Digital transformation of our era",
    content:
      "Artificial Intelligence, Blockchain, IoT, and Cloud Computing are redefining industries. These technologies enable faster, smarter, and more scalable innovations across every sector of the global economy.",
    icon: "Cpu",
    type: "intro",
  },
  {
    id: 8,
    title: "Barriers to Innovation",
    subtitle: "Challenges on the path to progress",
    items: [
      { icon: "AlertTriangle", label: "Fear of Failure", desc: "Risk aversion culture" },
      { icon: "Banknote", label: "Limited Funding", desc: "Lack of investment" },
      { icon: "Lock", label: "Bureaucracy", desc: "Slow decision-making" },
      { icon: "UserX", label: "Talent Gap", desc: "Missing skills and expertise" },
    ],
    type: "grid",
  },
  {
    id: 9,
    title: "Global Innovation Leaders",
    subtitle: "Countries shaping the future",
    stats: [
      { country: "🇺🇸 USA", rank: "#1", detail: "Silicon Valley & Big Tech" },
      { country: "🇨🇳 China", rank: "#2", detail: "Manufacturing & AI" },
      { country: "🇩🇪 Germany", rank: "#3", detail: "Engineering & Industry 4.0" },
      { country: "🇰🇷 South Korea", rank: "#4", detail: "Electronics & Mobility" },
    ],
    type: "stats",
  },
  {
    id: 10,
    title: "The Future of Innovation",
    subtitle: "What lies ahead",
    content:
      "The next wave of innovation will be driven by sustainability, human-AI collaboration, and decentralized technologies. Those who embrace change, learn continuously, and think boldly will shape tomorrow's world.",
    icon: "Rocket",
    cta: "The best way to predict the future is to create it.",
    type: "final",
  },
];

function SlideGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(55,50,47,0.08)] border border-[rgba(55,50,47,0.08)] flex flex-col gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F7F5F3] flex items-center justify-center">
            <Icon name={item.icon} size={20} className="text-[#37322F]" />
          </div>
          <div className="text-[#37322F] font-semibold text-sm font-sans">{item.label}</div>
          <div className="text-[rgba(55,50,47,0.65)] text-xs font-sans leading-5">{item.desc}</div>
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
          <div className="w-14 text-right text-[#37322F] font-serif font-normal text-lg shrink-0">
            {item.year}
          </div>
          <div className="w-3 h-3 rounded-full bg-[#37322F] shrink-0 relative">
            {i < timeline.length - 1 && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[rgba(55,50,47,0.2)]" />
            )}
          </div>
          <div className="text-[rgba(55,50,47,0.80)] text-sm font-sans">{item.event}</div>
        </div>
      ))}
    </div>
  );
}

function SlideStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(55,50,47,0.08)] border border-[rgba(55,50,47,0.08)] flex flex-col gap-1"
        >
          <div className="flex items-center justify-between">
            <div className="text-[#37322F] font-semibold text-sm font-sans">{s.country}</div>
            <div className="text-[#37322F] font-serif text-xl">{s.rank}</div>
          </div>
          <div className="text-[rgba(55,50,47,0.65)] text-xs font-sans">{s.detail}</div>
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
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Декоративные линии */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[rgba(55,50,47,0.06)]" />
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-[rgba(55,50,47,0.06)]" />
        <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-[rgba(55,50,47,0.06)]" />
        <div className="absolute bottom-[10%] left-0 right-0 h-[1px] bg-[rgba(55,50,47,0.06)]" />
      </div>

      {/* Прогресс-точки */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#37322F]" : "w-1.5 bg-[rgba(55,50,47,0.25)]"
            }`}
          />
        ))}
      </div>

      {/* Слайд */}
      <div className="relative z-10 w-full max-w-3xl min-h-[460px] flex flex-col items-center justify-center py-16">

        {/* COVER */}
        {slide.type === "cover" && (
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_24px_rgba(55,50,47,0.12)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center">
              <Icon name="Lightbulb" size={28} className="text-[#37322F]" />
            </div>
            <div className="text-[#37322F] font-serif text-[72px] sm:text-[96px] leading-none font-normal">
              {slide.title}
            </div>
            <div className="w-16 h-[1px] bg-[rgba(55,50,47,0.2)]" />
            {slide.meta && (
              <div className="flex flex-col gap-2">
                <div className="text-[rgba(55,50,47,0.70)] font-sans text-base">{slide.meta.student}</div>
                <div className="text-[rgba(55,50,47,0.70)] font-sans text-base">{slide.meta.teacher}</div>
              </div>
            )}
          </div>
        )}

        {/* INTRO */}
        {slide.type === "intro" && (
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-white shadow-[0_2px_16px_rgba(55,50,47,0.10)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center">
              <Icon name={slide.icon || "Star"} size={22} className="text-[#37322F]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#37322F] font-serif text-[48px] sm:text-[56px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.55)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <div className="w-full max-w-xl text-[rgba(55,50,47,0.80)] font-sans text-lg leading-8">
              {slide.content}
            </div>
          </div>
        )}

        {/* GRID */}
        {slide.type === "grid" && slide.items && (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div className="text-[#37322F] font-serif text-[44px] sm:text-[52px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.55)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <SlideGrid items={slide.items} />
          </div>
        )}

        {/* TIMELINE */}
        {slide.type === "timeline" && slide.timeline && (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div className="text-[#37322F] font-serif text-[44px] sm:text-[52px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.55)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <SlideTimeline timeline={slide.timeline} />
          </div>
        )}

        {/* STATS */}
        {slide.type === "stats" && slide.stats && (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div className="text-[#37322F] font-serif text-[44px] sm:text-[52px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.55)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <SlideStats stats={slide.stats} />
          </div>
        )}

        {/* FINAL */}
        {slide.type === "final" && (
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-white shadow-[0_2px_16px_rgba(55,50,47,0.10)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center">
              <Icon name={slide.icon || "Rocket"} size={22} className="text-[#37322F]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#37322F] font-serif text-[48px] sm:text-[56px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.55)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <div className="w-full max-w-xl text-[rgba(55,50,47,0.80)] font-sans text-lg leading-8">
              {slide.content}
            </div>
            {slide.cta && (
              <div className="mt-2 px-6 py-4 bg-white rounded-2xl shadow-[0_2px_16px_rgba(55,50,47,0.08)] border border-[rgba(55,50,47,0.08)] max-w-md">
                <div className="text-[#37322F] font-serif text-lg italic">&ldquo;{slide.cta}&rdquo;</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Навигация */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(55,50,47,0.12)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center disabled:opacity-30 hover:shadow-[0_4px_20px_rgba(55,50,47,0.16)] transition-shadow"
        >
          <Icon name="ChevronLeft" size={18} className="text-[#37322F]" />
        </button>

        <div className="px-4 py-1.5 bg-white rounded-full shadow-[0_2px_12px_rgba(55,50,47,0.08)] border border-[rgba(55,50,47,0.08)]">
          <span className="text-[#37322F] font-sans text-sm font-medium">
            {current + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(55,50,47,0.12)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center disabled:opacity-30 hover:shadow-[0_4px_20px_rgba(55,50,47,0.16)] transition-shadow"
        >
          <Icon name="ChevronRight" size={18} className="text-[#37322F]" />
        </button>
      </div>
    </div>
  );
}
