import { GitBranch, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold mb-3">
          Khushi Limbu
        </h3>

        <p className="text-gray-400 mb-6">
          Frontend Developer & Data Analytics Enthusiast
        </p>

        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/cyan1co"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6698CC] transition"
          >
            <GitBranch size={24} />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F08C21] transition"
          >
            <Globe size={24} />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Khushi Limbu ≽^• ˕ • ྀི≼
        </p>

      </div>

    </footer>
  );
}

export default Footer;