import SprintEmbed from "@/components/SprintEmbed";
import sprintsData from "@/data/sprints.json";

export default function SprintsPage() {
  const { sprints } = sprintsData;

  return (
    <div className="flex flex-col gap-6 min-h-[80vh]">
      <div>
        <h1 className="text-3xl font-bold text-white">Sprint Tracker</h1>
        <p className="text-slate-400 mt-1">
          Live view of the support team&apos;s sprint activity from Google Sheets.
        </p>
      </div>

      <SprintEmbed sprints={sprints} />
    </div>
  );
}
