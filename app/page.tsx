import Link from "next/link";

const sections = [
  {
    href: "/training",
    icon: "📚",
    eyebrow: "New Hire Onboarding",
    title: "Training Hub",
    description:
      "17-day onboarding program — training slides, Confluence SOPs, videos, and PDFs organized by phase.",
    cta: "Go to Training Hub",
  },
  {
    href: "/sprints",
    icon: "🏃",
    eyebrow: "Team Velocity",
    title: "Sprint Tracker",
    description:
      "View the support team's active and past sprints, embedded live from Google Sheets.",
    cta: "Go to Sprint Tracker",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[72vh] gap-12 py-16">
      <div className="text-center max-w-[600px]">
        <p
          className="text-[11px] font-bold uppercase tracking-[1.5px] mb-4"
          style={{ color: "#3B82F6" }}
        >
          Support Resources
        </p>
        <h1
          className="text-[3rem] font-black text-white leading-[1.08] tracking-[-0.02em] mb-4"
          style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
        >
          Chowly Support Hub
        </h1>
        <p className="text-[1.05rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          Your central home for new hire training and team sprint tracking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[860px]">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group bg-white rounded-2xl p-8 flex flex-col gap-5 border border-[#e2e8f0] transition-all duration-300 hover:-translate-y-1 hover:border-[#1B51A4] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="text-3xl">{s.icon}</div>
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2"
                style={{ color: "#3B82F6" }}
              >
                {s.eyebrow}
              </p>
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  color: "#0a2540",
                  fontFamily: "var(--font-lato), system-ui, sans-serif",
                }}
              >
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7a99" }}>
                {s.description}
              </p>
            </div>
            <span
              className="text-sm font-semibold mt-auto transition-colors group-hover:text-[#1B51A4]"
              style={{ color: "#1B51A4" }}
            >
              {s.cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
