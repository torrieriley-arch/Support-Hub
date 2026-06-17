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
      <div className="flex items-center justify-center h-64 text-slate-400">
        No sprints configured. Add one to data/sprints.json.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      {sprints.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {sprints.map((sprint) => (
            <button
              key={sprint.id}
              onClick={() => setSelected(sprint.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selected === sprint.id
                  ? "bg-orange-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {sprint.title}
              {sprint.active && (
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-green-400 align-middle" />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-white font-semibold text-lg">{currentSprint.title}</h2>
          {currentSprint.active && (
            <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
          )}
        </div>
        {currentSprint.description && (
          <p className="text-slate-400 text-sm">{currentSprint.description}</p>
        )}
      </div>

      <div className="flex-1 rounded-xl overflow-hidden border border-slate-700 bg-white min-h-[600px]">
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
