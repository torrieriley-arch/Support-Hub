import TrainingCard from "@/components/TrainingCard";
import trainingData from "@/data/training.json";

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

export default function TrainingPage() {
  const { modules } = trainingData as { modules: TrainingModule[] };

  const categories = [...new Set(modules.map((m) => m.category))];

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-bold text-white">Training Hub</h1>
        <p className="text-slate-400 mt-1">
          Resources for new hires and ongoing learning. Click any card to access slides, SOPs, videos, and PDFs.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="text-lg font-semibold text-orange-400 mb-4 border-b border-slate-700 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules
              .filter((m) => m.category === category)
              .map((module) => (
                <TrainingCard key={module.id} module={module} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
