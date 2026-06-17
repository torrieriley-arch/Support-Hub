"use client";

import { useState } from "react";

type Sprint = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  active: boolean;
};

export default function SprintEmbed({ sprints }: { sprints: Sprint[] }) {
  const activeSprint = sprints.find((s) => s.active) ?? sprints[0];
  const [selected, setSelected] = useState(activeSprint?.id ?? "");

  const currentSprint = sprints.find((s) => s.id === selected) ?? activeSprint;

  if (!currentSprint) {
    return (
      <div
        className="flex items-center justify-center h-64 rounded-2xl"
        style={{ background: "#f0f3fa", color: "#6b7a99" }}
      >
        No sprints configured. Add one to data/sprints.json.
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl px-8 py-10 flex flex-col gap-6"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fc 40%, #f0f3fa 100%)",
      }}
    >
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#3B82F6] mb-3">
          Team Velocity
        </p>
        <h1
          className="text-[2.25rem] font-bold text-[#001f52] leading-tight"
          style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
        >
          Sprint Tracker
        </h1>
        <p className="text-[1rem] text-[#6b7a99] mt-2">
          Live view of the support team&apos;s sprint activity from Google Sheets.
        </p>
      </div>

      {sprints.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {sprints.map((sprint) => (
            <button
              key={sprint.id}
              onClick={() => setSelected(sprint.id)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              style={{
                background: selected === sprint.id ? "#1B51A4" : "#f0f3fa",
                color: selected === sprint.id ? "#ffffff" : "#1B51A4",
              }}
            >
              {sprint.title}
              {sprint.active && (
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-green-400 align-middle" />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        <h2
          className="text-lg font-bold text-[#0a2540]"
          style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
        >
          {currentSprint.title}
        </h2>
        {currentSprint.active && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Active
          </span>
        )}
      </div>

      <div className="rounded-xl overflow-hidden border border-[#e2e8f0] bg-white min-h-[600px]">
        <iframe
          src={currentSprint.embedUrl}
          className="w-full h-full min-h-[600px]"
          frameBorder="0"
          title={currentSprint.title}
        />
      </div>
    </div>
  );
}
