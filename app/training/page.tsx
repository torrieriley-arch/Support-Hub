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
    <div
      className="rounded-3xl px-8 py-10"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fc 40%, #f0f3fa 100%)",
      }}
    >
      <div className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#3B82F6] mb-3">
          New Hire Onboarding
        </p>
        <h1
          className="text-[2.25rem] font-bold text-[#001f52] leading-tight"
          style={{ fontFamily: "var(--font-lato), system-ui, sans-serif" }}
        >
          Training Hub
        </h1>
        <p className="text-[1rem] text-[#6b7a99] mt-2 leading-relaxed max-w-[560px]">
          17-day onboarding program. Click any card to access slides, SOPs, videos, and PDFs for that session.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((category) => (
          <section key={category}>
            <div className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#3B82F6] mb-1">
                {category}
              </p>
              <div className="h-px bg-[#e2e8f0]" />
            </div>
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
    </div>
  );
}
