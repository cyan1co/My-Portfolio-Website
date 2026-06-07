function About() {
  return (
    <section
      id="about"
      className="bg-[#F2D88F] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-[#E36888] mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-lg leading-8 text-gray-700">
              I'm a BSc (Hons) Computing student with a growing passion for frontend development and data analytics.
            </p>

            <p className="text-lg leading-8 text-gray-700 mt-6">
              I enjoy creating responsive web applications using React and Tailwind CSS while also exploring data visualization through Power BI and analytical tools.
            </p>

            <p className="text-lg leading-8 text-gray-700 mt-6">
              My goal is to become a Frontend Developer and Data Analyst who creates meaningful, user-friendly and data-driven solutions.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-[#E36888] font-bold text-xl">
                Education
              </h3>

              <p className="mt-3 text-gray-600">
                BSc (Hons) Computing
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-[#F08C21] font-bold text-xl">
                Focus
              </h3>

              <p className="mt-3 text-gray-600">
                Frontend Development
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-[#6698CC] font-bold text-xl">
                Interest
              </h3>

              <p className="mt-3 text-gray-600">
                Data Analytics
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-[#B4B534] font-bold text-xl">
                Goal
              </h3>

              <p className="mt-3 text-gray-600">
                Build impactful solutions
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;