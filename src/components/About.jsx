import AboutImg from "../assets/working.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-16 px-6">
      <h2 className="my-12 text-center text-4xl font-bold text-white neon-text">
        About <span className="text-purple-400">Me</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
        <div className="w-full max-w-md lg:w-1/3">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              className="w-48 h-48 lg:w-150 lg:h-120 rounded-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              src={AboutImg} 
              alt="Profile"
            />
          </div>
        </div>

        <div className="w-full max-w-2xl lg:w-1/2">
          <p className="text-lg text-neutral-300 leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>

      <style>
        {`
          .neon-text {
            text-shadow: 0 0 10px #fff, 0 0 20px #9a4eff, 0 0 30px #9a4eff;
            animation: neon-glow 1.5s infinite alternate;
          }

          @keyframes neon-glow {
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

export default About;
