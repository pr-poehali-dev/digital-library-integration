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
    type: "intro",
  },
  {
    id: 3,
    title: "Types of Innovation",
    subtitle: "Different paths to change",
    content: "There are several types of innovation, each addressing a different aspect of business or society. Understanding these types helps organizations choose the right strategy for growth.",
    items: [
      { label: "Product Innovation", desc: "Creating new or improved goods and services" },
      { label: "Process Innovation", desc: "Finding better, more efficient ways of working" },
      { label: "Business Model Innovation", desc: "Rethinking how value is created and delivered" },
      { label: "Social Innovation", desc: "Developing solutions that benefit society" },
    ],
    type: "grid",
  },
  {
    id: 4,
    title: "History of Innovation",
    subtitle: "Key milestones that changed the world",
    content: "Throughout history, groundbreaking inventions have transformed the way people live and work. Each milestone opened new possibilities and set the stage for future discoveries.",
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
    type: "intro",
  },
  {
    id: 6,
    title: "Innovation in Business",
    subtitle: "How companies grow through innovation",
    content: "Businesses that innovate consistently outperform their competitors and build long-term resilience. Innovation is not just about new products — it reshapes entire industries and markets.",
    items: [
      { label: "Competitive Advantage", desc: "Stay ahead of rivals with unique offerings" },
      { label: "Revenue Growth", desc: "Enter new markets and attract new customers" },
      { label: "Risk Reduction", desc: "Diversify solutions to minimize dependency" },
      { label: "Brand Value", desc: "Build a reputation for excellence and leadership" },
    ],
    type: "grid",
  },
  {
    id: 7,
    title: "Technology & Innovation",
    subtitle: "Digital transformation of our era",
    content:
      "Artificial Intelligence, Blockchain, IoT, and Cloud Computing are redefining industries. These technologies enable faster, smarter, and more scalable innovations across every sector of the global economy.",
    type: "intro",
  },
  {
    id: 8,
    title: "Barriers to Innovation",
    subtitle: "Challenges on the path to progress",
    content: "Even the most forward-thinking organizations face obstacles when trying to innovate. Recognizing these barriers is the first step toward overcoming them.",
    items: [
      { label: "Fear of Failure", desc: "A risk-averse culture discourages new ideas" },
      { label: "Limited Funding", desc: "Lack of investment slows down R&D efforts" },
      { label: "Bureaucracy", desc: "Slow decision-making blocks creative initiatives" },
      { label: "Talent Gap", desc: "Missing skills and expertise limit potential" },
    ],
    type: "grid",
  },
  {
    id: 9,
    title: "Global Innovation Leaders",
    subtitle: "Countries shaping the future",
    content: "Some countries consistently lead the world in innovation due to strong education, investment, and infrastructure. Their ecosystems attract talent and fuel breakthroughs across industries.",
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
    title: "Thank You for Your Attention",
    subtitle: "The future belongs to those who innovate",
    content:
      "Innovation is not a destination — it is a continuous journey of learning, experimenting, and improving. Together, we can build a smarter and better world through bold ideas and decisive action.",
    type: "final",
  },
];

function SlideGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 border border-[rgba(55,50,47,0.10)] flex flex-col gap-1"
        >
          <div className="text-[#37322F] font-semibold text-sm font-sans">{item.label}</div>
          <div className="text-[rgba(55,50,47,0.60)] text-xs font-sans leading-5">{item.desc}</div>
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
          <div className="w-2 h-2 rounded-full bg-[rgba(55,50,47,0.40)] shrink-0" />
          <div className="text-[rgba(55,50,47,0.80)] text-sm font-sans">{item.event}</div>
        </div>
      ))}
    </div>
  );
}

function SlideStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 border border-[rgba(55,50,47,0.10)] flex flex-col gap-1"
        >
          <div className="flex items-center justify-between">
            <div className="text-[#37322F] font-semibold text-sm font-sans">{s.country}</div>
            <div className="text-[#37322F] font-serif text-base">{s.rank}</div>
          </div>
          <div className="text-[rgba(55,50,47,0.60)] text-xs font-sans">{s.detail}</div>
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
            <div className="text-[#37322F] font-serif text-[80px] sm:text-[100px] leading-none font-normal">
              {slide.title}
            </div>
            <div className="w-12 h-[1px] bg-[rgba(55,50,47,0.25)]" />
            {slide.meta && (
              <div className="flex flex-col gap-2">
                <div className="text-[rgba(55,50,47,0.65)] font-sans text-base">{slide.meta.student}</div>
                <div className="text-[rgba(55,50,47,0.65)] font-sans text-base">{slide.meta.teacher}</div>
              </div>
            )}
          </div>
        )}

        {/* INTRO */}
        {slide.type === "intro" && (
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <div className="text-[#37322F] font-serif text-[48px] sm:text-[56px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.50)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <div className="w-full max-w-xl text-[rgba(55,50,47,0.75)] font-sans text-base leading-7">
              {slide.content}
            </div>
          </div>
        )}

        {/* GRID */}
        {slide.type === "grid" && slide.items && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col gap-2 text-center">
              <div className="text-[#37322F] font-serif text-[40px] sm:text-[48px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.50)] font-sans text-sm">{slide.subtitle}</div>
            </div>
            {slide.content && (
              <div className="w-full max-w-xl text-center text-[rgba(55,50,47,0.70)] font-sans text-sm leading-6">
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
              <div className="text-[#37322F] font-serif text-[40px] sm:text-[48px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.50)] font-sans text-sm">{slide.subtitle}</div>
            </div>
            {slide.content && (
              <div className="w-full max-w-xl text-center text-[rgba(55,50,47,0.70)] font-sans text-sm leading-6">
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
              <div className="text-[#37322F] font-serif text-[40px] sm:text-[48px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.50)] font-sans text-sm">{slide.subtitle}</div>
            </div>
            {slide.content && (
              <div className="w-full max-w-xl text-center text-[rgba(55,50,47,0.70)] font-sans text-sm leading-6">
                {slide.content}
              </div>
            )}
            <SlideStats stats={slide.stats} />
          </div>
        )}

        {/* FINAL */}
        {slide.type === "final" && (
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <div className="text-[#37322F] font-serif text-[40px] sm:text-[52px] leading-tight font-normal">
                {slide.title}
              </div>
              <div className="text-[rgba(55,50,47,0.50)] font-sans text-base">{slide.subtitle}</div>
            </div>
            <div className="w-full max-w-xl text-[rgba(55,50,47,0.75)] font-sans text-base leading-7">
              {slide.content}
            </div>
          </div>
        )}
      </div>

      {/* Навигация */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center disabled:opacity-30 hover:bg-[#F0EDEA] transition-colors"
        >
          <Icon name="ChevronLeft" size={18} className="text-[#37322F]" />
        </button>

        <div className="px-4 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)]">
          <span className="text-[#37322F] font-sans text-sm font-medium">
            {current + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center disabled:opacity-30 hover:bg-[#F0EDEA] transition-colors"
        >
          <Icon name="ChevronRight" size={18} className="text-[#37322F]" />
        </button>
      </div>
    </div>
  );
}
