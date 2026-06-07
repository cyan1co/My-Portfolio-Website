import { Code2, BarChart3, Database, Wrench, FileCode, Palette, Route, FileSpreadsheet, Coffee, Terminal, GitBranch } from "lucide-react";

function Skills() {

const skillCategories = [
{
title: "Frontend Development",
icon: Code2,
skills: [
{ name: "React", icon: Code2 },
{ name: "JavaScript", icon: FileCode },
{ name: "HTML5", icon: FileCode },
{ name: "CSS3", icon: Palette },
{ name: "Tailwind CSS", icon: Palette },
{ name: "React Router", icon: Route }
]
},

{
  title: "Data Analytics",
  icon: BarChart3,
  skills: [
    { name: "Power BI", icon: BarChart3 },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "Data Visualization", icon: BarChart3 }
  ]
},

{
  title: "Programming & Databases",
  icon: Database,
  skills: [
    { name: "Java", icon: Coffee },
    { name: "Python", icon: Terminal },
    { name: "MySQL", icon: Database }
  ]
},

{
  title: "Tools",
  icon: Wrench,
  skills: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "VS Code", icon: Wrench }
  ]
}

];

return ( <section id="skills" className="bg-[#E36888] py-24">


  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-white text-center mb-4">
      Skills
    </h2>

    <p className="text-center text-pink-100 text-lg mb-14">
      Technologies, tools and platforms I use.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {skillCategories.map((category) => {

        const CategoryIcon = category.icon;

        return (
          <div data-aos="zoom-in">
            <div key={category.title} className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out h-full flex flex-col">

              <div className="flex items-center gap-3 mb-6">

                <CategoryIcon size={28} className="text-[#E36888]" />

                <h3 className="text-2xl font-bold text-[#E36888]">
                  {category.title}
                </h3>

              </div>

              <div className="space-y-4">

                {category.skills.map((skill) => {

                  const SkillIcon = skill.icon;

                  return (
                    <div key={skill.name} className="flex items-center gap-3 bg-pink-50 p-4 rounded-2xl">

                      <SkillIcon size={20} className="text-[#E36888]" />

                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>

                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        );
      })}

    </div>

  </div>

</section>


);
}

export default Skills;
