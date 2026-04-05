const points = [
  "Developing and testing RESTful APIs using Python-based backend frameworks.",
  "Working with relational databases to design schemas and perform CRUD operations.",
  "Debugging backend issues and improving API reliability and response handling.",
  "Assisting in performance analysis including basic latency measurement and optimization.",
  "Collaborating on backend documentation and API testing using Postman.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Experience</h2>
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Backend Developer Intern</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Current</p>
            </div>
            <span className="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">Active</span>
          </div>
          <ul className="space-y-2">
            {points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
