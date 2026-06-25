"use client";

import { useState, useEffect } from "react";

type TrainingModule = {
  id: string;
  title: string;
  category: string;
  description: string;
  slides: string | null;
  sop: string | null;
  video: string | null;
  pdf: string | null;
  pptx?: string | null;
};

export default function TrainingCard({ module: m }: { module: TrainingModule }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const links = [
    { label: "Slides", href: m.slides, icon: "🖼️" },
    { label: "SOP", href: m.sop, icon: "📋" },
    { label: "Video", href: m.video, icon: "▶️" },
    { label: "PDF", href: m.pdf, icon: "📄" },
  ].filter((l) => l.href);

  const hasAnyLink = links.length > 0 || !!m.pptx;

  return (
    <>
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

          {hasAnyLink ? (
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {m.pptx && (
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#f0f3fa] text-[#1B51A4] hover:bg-[#1B51A4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>🖼️</span>
                  Slides
                </button>
              )}
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

      {modalOpen && m.pptx && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ width: "min(96vw, 1100px)", height: "min(90vh, 680px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e8f0] shrink-0">
              <span className="text-sm font-semibold text-[#0a2540]" style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}>
                {m.title}
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#6b7a99] hover:text-[#0a2540] text-xl leading-none px-1 cursor-pointer"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <iframe
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(m.pptx)}`}
              className="flex-1 w-full border-0"
              title={m.title}
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
}
