export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Mohit Jhajharia
        </span>
        <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
          <a href="#education" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Education</a>
        </div>
      </div>
    </nav>
  );
}
