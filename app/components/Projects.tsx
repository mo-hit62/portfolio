const projects = [
  {
    title: "Loan Approval Prediction Web Application",
    stack: ["Flask", "JWT", "Redis", "RabbitMQ", "Docker"],
    points: [
      "Built a backend system using Flask to serve machine learning predictions via REST APIs.",
      "Implemented JWT-based authentication for secure access to prediction endpoints.",
      "Integrated Redis caching to reduce repeated computation and improve API response time.",
      "Designed asynchronous background tasks using message queues to log prediction activity.",
      "Containerized the application using Docker for consistent local and deployment environments.",
    ],
  },
  {
    title: "Face Attendance Management System",
    stack: ["Python", "OpenCV", "REST APIs", "MySQL", "CSV"],
    points: [
      "Developed a backend service to record and manage attendance using OpenCV-based face recognition.",
      "Built APIs to store attendance data with timestamps in a relational database.",
      "Implemented search and filtering functionality for attendance records.",
      "Generated automated reports in CSV format for administrative use.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col gap-4"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
