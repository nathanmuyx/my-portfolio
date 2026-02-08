export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 md:px-12 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
        <div className="flex gap-6">
          <a href="mailto:nathanmuyx@gmail.com" className="text-xs text-white/30 hover:text-white/50 transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/nathaniel-muyco-903422272/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/50 transition-colors">LinkedIn</a>
          <a href="https://nathanmuyx.framer.website" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/50 transition-colors">Previous version</a>
        </div>
      </div>
    </footer>
  );
}
