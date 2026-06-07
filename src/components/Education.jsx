import { GraduationCap, Code2, BarChart3 } from "lucide-react";

function Education() {
return ( <section id="education" className="bg-white py-24">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-[#F08C21] mb-14">
      Education
    </h2>

    <div className="bg-[#F2D88F] rounded-3xl p-10 shadow-lg">

      <div className="flex items-center gap-3">

        <GraduationCap size={32} className="text-[#E36888]" />

        <h3 className="text-3xl font-bold text-[#E36888]">
          BSc (Hons) Computing
        </h3>

      </div>

      <p className="text-lg mt-3 text-gray-700">
        Currently in Year 2
      </p>

      <p className="mt-6 text-gray-700 leading-8">
        Studying software development, frontend
        technologies, programming, databases,
        analytics, and business information systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Frontend Focus Section */}
        <div data-aos="fade-right" className="bg-white rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <Code2 size={22} className="text-[#6698CC]" />

            <h4 className="font-bold text-[#6698CC]">
              Technical Focus
            </h4>

          </div>

          <ul className="space-y-2 text-gray-600">
            <li>React Development</li>
            <li>JavaScript</li>
            <li>Database Systems</li>
            <li>Responsive Design</li>
          </ul>

        </div>

        {/* Analytics Focus Section */}
        <div data-aos="fade-left" className="bg-white rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <BarChart3 size={22} className="text-[#B4B534]" />

            <h4 className="font-bold text-[#B4B534]">
              Analytics Focus
            </h4>

          </div>

          <ul className="space-y-2 text-gray-600">
            <li>Power BI</li>
            <li>Excel Analysis</li>
            <li>Data Visualization</li>
            <li>Business Intelligence</li>
          </ul>

        </div>

      </div>

    </div>

  </div>

</section>

);
}

export default Education;
