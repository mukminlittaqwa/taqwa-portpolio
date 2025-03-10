import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-16 px-6">
      <h1 className="my-12 text-center text-4xl font-bold text-white neon-text">
        Experience
      </h1>

      <div className="relative mx-auto max-w-4xl border-l-2 border-neutral-800 pl-6">
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index} 
            className="mb-8 relative group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Dot indicator */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-neutral-900 group-hover:scale-125 transition-all"></div>

            <div className="bg-neutral-900/60 p-6 rounded-lg shadow-md border border-neutral-800 backdrop-blur-md">
              <p className="text-sm text-neutral-400">{experience.year}</p>
              <h6 className="mt-2 text-lg font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-purple-300 text-base">{experience.company}</span>
              </h6>
              <p className="mt-2 text-sm text-neutral-300">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-purple-500/20 px-4 py-1 text-xs font-medium text-purple-400 shadow-sm"
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
            text-shadow: 0 0 10px #fff, 0 0 20px #9a4eff, 0 0 30px #9a4eff;
            animation: neon-flicker 1.5s infinite alternate;
          }

          @keyframes neon-flicker {
            0%, 100% {
              text-shadow: 0 0 5px #fff, 0 0 10px #9a4eff;
            }
            50% {
              text-shadow: 0 0 2px #fff, 0 0 5px #9a4eff;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Experience;
