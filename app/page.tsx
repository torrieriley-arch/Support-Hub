import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Chowly Support Hub</h1>
        <p className="text-slate-400 mt-2 text-lg">Your central home for training and team sprints.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link
          href="/training"
          className="group bg-slate-800 border border-slate-700 hover:border-orange-500 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-orange-500/10"
        >
          <div className="text-4xl">📚</div>
          <div>
            <h2 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
              Training Hub
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              New hire resources — training slides, Confluence SOPs, videos, and PDFs organized by topic.
            </p>
          </div>
          <span className="text-orange-500 text-sm font-medium mt-auto">
            Go to Training Hub →
          </span>
        </Link>

        <Link
          href="/sprints"
          className="group bg-slate-800 border border-slate-700 hover:border-orange-500 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-orange-500/10"
        >
          <div className="text-4xl">🏃</div>
          <div>
            <h2 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
              Sprint Tracker
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              View the support team&apos;s active and past sprints, embedded live from Google Sheets.
            </p>
          </div>
          <span className="text-orange-500 text-sm font-medium mt-auto">
            Go to Sprint Tracker →
          </span>
        </Link>
      </div>
    </div>
  );
}
