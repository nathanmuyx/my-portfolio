export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 md:px-12 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
        <div className="flex gap-6">
          <a href="mailto:nathanmuyx@gmail.com" className="text-xs text-white/30 hover:text-white/50 transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/nathaniel-muyco-903422272/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/50 transition-colors">LinkedIn</a>
          <a href="https://nathanmuyx.framer.website" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/50 transition-colors inline-flex items-center gap-1.5">
            Previous version made by
            <svg className="w-3.5 h-3.5" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32,21.3h21.7V0h-43v0.2L32,21.3z" fill="#67DBFF"/>
              <path d="M32,21.3H10.3v21.3h43v-0.2L32,21.3L32,21.3z" fill="#01A3FF"/>
              <path d="M10.3,42.5h21.5V64L10.3,42.5z" fill="#0162FF"/>
            </svg>
            Framer
          </a>
        </div>
      </div>
    </footer>
  );
}
