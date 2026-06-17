type TrainingModule = {
  id: string;
  title: string;
  category: string;
  description: string;
  slides: string | null;
  sop: string | null;
  video: string | null;
  pdf: string | null;
};

export default function TrainingCard({ module: m }: { module: TrainingModule }) {
  const links = [
    { label: "Slides", href: m.slides, icon: "🖼️" },
    { label: "SOP", href: m.sop, icon: "📋" },
    { label: "Video", href: m.video, icon: "▶️" },
    { label: "PDF", href: m.pdf, icon: "📄" },
  ].filter((l) => l.href);

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:border-[#1B51A4]/40">
      <div
        className="h-1 shrink-0"
        style={{ background: "linear-gradient(135deg, #1B51A4, #3B82F6, #06B6D4)" }}
      />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3
            className="font-bold text-[0.95rem] leading-snug text-[#0a2540]"
            style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
          >
            {m.title}
          </h3>
          <p className="text-[13px] mt-1.5 leading-relaxed text-[#6b7a99]">
            {m.description}
          </p>
        </div>

        {links.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-auto pt-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#f0f3fa] text-[#1B51A4] hover:bg-[#1B51A4] hover:text-white transition-colors"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-[12px] mt-auto pt-1 italic text-[#8b95ad]">
            Links coming soon — edit data/training.json to add them.
          </p>
        )}
      </div>
    </div>
  );
}
