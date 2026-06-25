"use client";

import { useState } from "react";
import errorsData from "@/data/errors.json";

type PosError = {
  pos: string;
  error: string;
  meaning: string;
  steps: string[];
  client: string;
};

const { errors } = errorsData as { errors: PosError[] };

const POS_SYSTEMS = ["All POS", "Toast", "Square", "Omnivore", "Revel", "Brink", "Speedline", "Micros"];

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  Toast:     { bg: "#fef3c7", color: "#92400e" },
  Square:    { bg: "#dbeafe", color: "#1e3a8a" },
  Omnivore:  { bg: "#ede9fe", color: "#4c1d95" },
  Revel:     { bg: "#dcfce7", color: "#14532d" },
  Brink:     { bg: "#fee2e2", color: "#7f1d1d" },
  Speedline: { bg: "#fce7f3", color: "#831843" },
  Micros:    { bg: "#f3f4f6", color: "#374151" },
};

export default function ErrorsPage() {
  const [activeFilter, setActiveFilter] = useState("All POS");
  const [search, setSearch] = useState("");

  const filtered = errors.filter((e) => {
    const posMatch = activeFilter === "All POS" || e.pos === activeFilter;
    const q = search.toLowerCase();
    const textMatch =
      !q ||
      [e.pos, e.error, e.meaning, e.steps.join(" "), e.client]
        .join(" ")
        .toLowerCase()
        .includes(q);
    return posMatch && textMatch;
  });

  return (
    <div
      className="rounded-3xl px-8 py-10"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Header */}
      <div className="mb-6">
        <p
          className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2"
          style={{ color: "#3B82F6" }}
        >
          Support Tools
        </p>
        <h1
          className="text-[2rem] font-black text-white leading-tight mb-1"
          style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
        >
          POS Error Reference
        </h1>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Defined POS errors and resolutions — sourced from Chowly Confluence SOP
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-4">
        {POS_SYSTEMS.map((pos) => {
          const isActive = activeFilter === pos;
          return (
            <button
              key={pos}
              onClick={() => setActiveFilter(pos)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 cursor-pointer"
              style={{
                background: isActive ? "#1B51A4" : "rgba(255,255,255,0.06)",
                color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                borderColor: isActive ? "#3B82F6" : "rgba(255,255,255,0.12)",
              }}
            >
              {pos}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search errors, symptoms, or steps…"
          className="w-full max-w-[480px] px-3 py-2 text-sm rounded-lg border outline-none"
          style={{
            background: "rgba(255,255,255,0.07)",
            borderColor: "rgba(255,255,255,0.15)",
            color: "#fff",
          }}
        />
      </div>

      {/* Count */}
      {filtered.length > 0 && (
        <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
          {filtered.length} error{filtered.length !== 1 ? "s" : ""} shown
        </p>
      )}

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-12" style={{ color: "rgba(255,255,255,0.4)" }}>
          No matching errors found.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
          <table className="w-full border-collapse text-sm" style={{ minWidth: "800px", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "9%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "24%" }} />
            </colgroup>
            <thead>
              <tr>
                {["POS", "Error / filter string", "What it means", "Internal next steps", "Client-facing language"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-3 py-2.5 text-left text-xs font-medium border-b border-r last:border-r-0"
                      style={{ background: "#f9f9f7", color: "#666", borderColor: "#ddd", position: "sticky", top: 0, zIndex: 2 }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((e, i) => {
                const badge = BADGE_STYLES[e.pos] ?? { bg: "#f3f4f6", color: "#374151" };
                return (
                  <tr key={i} className="border-b last:border-b-0" style={{ borderColor: "#eee" }}>
                    <td className="px-3 py-2.5 align-top border-r" style={{ borderColor: "#eee" }}>
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"
                        style={{ background: badge.bg, color: badge.color }}
                      >
                        {e.pos}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 align-top border-r" style={{ borderColor: "#eee" }}>
                      <code
                        className="text-xs rounded px-1.5 py-0.5 break-all"
                        style={{ background: "#f3f4f6", color: "#1a1a1a", fontFamily: "\"SF Mono\", \"Fira Mono\", Consolas, monospace" }}
                      >
                        {e.error}
                      </code>
                    </td>
                    <td className="px-3 py-2.5 align-top text-xs leading-relaxed border-r" style={{ borderColor: "#eee", color: "#374151" }}>
                      {e.meaning}
                    </td>
                    <td className="px-3 py-2.5 align-top text-xs leading-relaxed border-r" style={{ borderColor: "#eee", color: "#374151" }}>
                      {e.steps.length > 1 ? (
                        <ol className="list-decimal pl-4 space-y-1">
                          {e.steps.map((s, si) => (
                            <li key={si}>{s}</li>
                          ))}
                        </ol>
                      ) : (
                        e.steps[0]
                      )}
                    </td>
                    <td className="px-3 py-2.5 align-top text-xs leading-relaxed" style={{ color: "#374151" }}>
                      {e.client}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
