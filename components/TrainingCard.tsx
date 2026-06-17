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
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-3 hover:border-orange-500/50 transition-colors">
      <div>
        <h3 className="text-white font-semibold text-base">{m.title}</h3>
        <p className="text-slate-400 text-sm mt-1">{m.description}</p>
      </div>

      {links.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-700 hover:bg-orange-500 text-slate-200 hover:text-white text-xs font-medium transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-xs mt-auto pt-2 italic">
          Links coming soon — edit data/training.json to add them.
        </p>
      )}
    </div>
  );
}
