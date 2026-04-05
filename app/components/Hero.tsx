export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">Backend Developer</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Mohit Jhajharia
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">Pune, Maharashtra, India</p>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 leading-7 mb-8">
          Backend-focused Computer Science undergraduate with hands-on experience in Python backend development,
          REST APIs, and database-driven applications. Currently working as a Backend Developer Intern,
          contributing to API development, debugging, and performance analysis. Strong interest in building
          scalable backend systems with exposure to authentication, caching, containerization, and asynchronous processing.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="mailto:mohitrj1818@gmail.com"
            className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
