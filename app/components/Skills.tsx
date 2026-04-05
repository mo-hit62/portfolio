const skills = [
  { category: "Languages", items: ["Python", "SQL"] },
  { category: "Backend", items: ["Flask", "Django REST Framework", "REST APIs", "JSON", "JWT Authentication"] },
  { category: "Databases", items: ["MySQL", "SQLite", "Redis"] },
  { category: "Async & Messaging", items: ["RabbitMQ", "Background Task Processing"] },
  { category: "DevOps", items: ["Docker", "Git", "GitHub"] },
  { category: "Tools & Foundations", items: ["Postman", "Data Structures", "API Design", "Backend Architecture"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
