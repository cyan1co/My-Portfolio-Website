import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 w-full bg-white shadow-md z-50">

  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-2xl font-bold text-[#F08C21]">
      Khushi Limbu ≽^• ˕ • ྀི≼
    </h1>

    <div className="hidden md:flex gap-8 font-medium">

      <a href="#about" className="hover:text-[#E36888] transition">
        About
      </a>

      <a href="#skills" className="hover:text-[#E36888] transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-[#E36888] transition">
        Projects
      </a>

      <a href="#education" className="hover:text-[#E36888] transition">
        Education
      </a>

      <a href="#contact" className="hover:text-[#E36888] transition">
        Contact
      </a>

    </div>

    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

  </div>

  {menuOpen && (

    <div className="md:hidden bg-white border-t flex flex-col items-center py-6 gap-6 font-medium">

      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>

      <a href="#skills" onClick={() => setMenuOpen(false)}>
        Skills
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)}>
        Projects
      </a>

      <a href="#education" onClick={() => setMenuOpen(false)}>
        Education
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>

    </div>

  )}

</nav>

);
}

export default Navbar;
