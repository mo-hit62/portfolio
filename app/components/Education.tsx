export default function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Education</h2>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex items-start justify-between">
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">MIT ADT University, Pune</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">CGPA: 7.6 / 10</p>
          </div>
          <span className="text-xs text-zinc-400 shrink-0 ml-4">2022 – 2026</span>
        </div>
      </div>
    </section>
  );
}
