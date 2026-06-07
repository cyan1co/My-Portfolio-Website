import profileImage from "../assets/profileImage.jpg";

function Hero() {
  return (
    <section
      className=" min-h-screen bg-[#F08C21] flex items-center pt-24 pb-10 relative"
    >

      <div
        className=" max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center "
      >

        <div>

          <p className="uppercase tracking-widest text-[#F2D88F] font-semibold mb-4">
            Portfolio 2026
          </p>            

          <p className="text-white text-xl mb-3">
            Hi, I'm
          </p>

          <h1
            className=" text-6xl font-bold text-white leading-tight "
          >
            Khushi
            <br />
            Limbu
          </h1>

          <p
            className=" text-white text-2xl mt-6 font-medium "
          >
            <span className="font-bold">
              Frontend Developer
            </span>
            
            <br />
            
            <span className="font-bold">
              Data Analytics Enthusiast
            </span>
          </p>

          <p
            className=" text-white mt-6 text-lg max-w-lg "
          >
            BSc (Hons) Computing Student passionate about building modern web applications and transforming data into meaningful insights.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className=" bg-[#E36888] text-white px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className=" bg-[#F2D88F] px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              View CV
            </a>

          </div>

          <div className="flex gap-6 mt-8 text-white font-medium">

            <a
              href="https://github.com/cyan1co"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2D88F] transition"
            >
              GitHub
            </a>
          
            <a
              href="https://www.linkedin.com/in/khushi-limbu-707hachiko/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2D88F] transition"
            >
              LinkedIn
            </a>
          
            <a
              href="mailto:khushilimbu681@gmail.com"
              className="hover:text-[#F2D88F] transition"
            >
              Email
            </a>
          
          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={profileImage}
            alt="Khushi"
            className=" w-80 h-80 object-cover rounded-full border-8 border-[#fceccf] shadow-2xl hover:scale-105 transition duration-300 "
          />

        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

        <p className="text-white text-3xl animate-bounce">
          ↓
        </p>
      
      </div>

    </section>
  );
}

export default Hero;