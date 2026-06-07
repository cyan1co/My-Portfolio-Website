import kristysnailz from "../assets/kristysnails.png";
import expensetracker from "../assets/expensetracker.png";
import powerbi from "../assets/powerbi.png";

function Projects() {

  const projects = [
    {
      title: "Kristy's Nailz",
      image: kristysnailz,
      description:
        "A responsive nail salon appointment booking and management system built with React and Tailwind CSS.",
      tech: ["React", "React Router", "Tailwind CSS", "Local Storage"],
      github: "https://github.com/cyan1co/Nail-Appointment-System",
      demo: "https://nail-appointment-system-liard.vercel.app",
    },

    {
      title: "Expense Tracker",
      image: expensetracker,
      description:
        "An expense management dashboard with categories, charts and analytics.",
      tech: ["React", "Tailwind CSS", "Recharts"],
      github: "https://github.com/cyan1co/Expense-Tracker",
      demo: "https://react-expense-tracker-phi-beryl.vercel.app"
    },

    {
      title: "Power BI Dashboard",
      image: powerbi,
      description:
        "Interactive business intelligence dashboard featuring data visualization and insights.",
      tech: ["Power BI", "Excel", "Analytics"],
      github: "https://github.com/cyan1co/Sales-Analytics-Dashboard.git",
      demo: ""
    }
  ];

  return (
    <section
      id="projects"
      className="bg-[#6698CC] py-24"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-blue-100 mb-14 text-lg">
            Featured projects showcasing my frontend development and analytics skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8"> 

          {projects.map((project) => (

            <div data-aos="fade-up">

              <div
                key={project.title}
                className=" bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ease-out h-full flex flex-col"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-56
                    w-full
                    object-cover
                  "
                />

                <div className="p-6 flex flex-col grow">

                  <h3 className="text-2xl font-bold text-[#6698CC]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className=" bg-blue-100 text-[#6698CC] px-4 py-2 rounded-xl hover:bg-blue-700 hover:text-white transition "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="flex gap-3 mt-auto pt-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className=" bg-[#E36888] text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition ">
                      GitHub
                    </a>

                      {project.demo && (
                          <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className=" bg-[#F08C21] text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition ">
                          Live Demo
                          </a>
                      )} 

                  </div>

                </div>

              </div>
            </div>          
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;