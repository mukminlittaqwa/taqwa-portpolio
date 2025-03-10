import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <section className="py-16 px-6">
      <h1 className="mb-12 text-center text-4xl font-bold text-white neon-text">
        Projects & Professional Works
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="group relative rounded-2xl bg-neutral-900/80 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="mt-4">
              <h6 className="text-lg font-semibold text-white">{project.title}</h6>
              <p className="mt-2 text-sm text-neutral-400">{project.description}</p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-1 text-xs font-medium text-white shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .neon-text {
            text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff;
            animation: neon-flicker 1.5s infinite alternate;
          }

          @keyframes neon-flicker {
            0%, 100% {
              text-shadow: 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 15px #ff00ff;
            }
            50% {
              text-shadow: 0 0 2px #fff, 0 0 5px #ff00ff, 0 0 7px #ff00ff;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Project;
