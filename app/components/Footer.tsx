export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-zinc-400">
        <span>© 2026 Mohit Jhajharia</span>
        <div className="flex gap-4">
          <a href="mailto:mohitrj1818@gmail.com" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
