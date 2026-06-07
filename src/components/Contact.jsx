import {
  Mail,
  GitBranch,
  Download,
  Globe
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-[#B4B534] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Let's Connect
        </h2>

        <p className="text-center text-white text-lg mb-14">
          Feel free to reach out for opportunities, collaborations or conversations.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <div
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <Mail size={40} className="mx-auto text-[#E36888] mb-4" />

            <h3 className="font-bold text-xl mb-2 cursor-pointer">
              Email
            </h3>

            <p className="text-gray-600 text-sm break-all">
              khushilimbu681@gmail.com
            </p>

          </div>

          <a
            href="https://github.com/cyan1co"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <GitBranch size={40} className="mx-auto text-[#6698CC] mb-4" />

            <h3 className="font-bold text-xl mb-2">
              GitHub
            </h3>

            <p className="text-gray-600">
              View Projects
            </p>

          </a>

          <a
            href="https://www.linkedin.com/in/khushi-limbu-707hachiko/"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <Globe size={40} className="mx-auto text-[#F08C21] mb-4" />

            <h3 className="font-bold text-xl mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-600">
              Professional Profile
            </p>

          </a>

          <a
            href="\public\frontend-cv.pdf"
            download
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <Download size={40} className="mx-auto text-[#F08C21] mb-4" />
          
            <h3 className="font-bold text-xl mb-2">
              Frontend CV
            </h3>
          
            <p className="text-gray-600">
              Download Resume
            </p>
          </a>

          <a href="\data-analytics-cv.pdf" 
             download 
             className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <Download size={40} className="mx-auto text-[#F08C21] mb-4" />
          
            <h3 className="font-bold text-xl mb-2">
              Data Analytics CV
            </h3>
          
            <p className="text-gray-600">
              Download Resume
            </p>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;