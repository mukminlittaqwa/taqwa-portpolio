import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mePhoto.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-8">
      {/* Left Content */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl lg:text-7xl font-bold text-neutral-100">
          Mukmin Littaqwa
        </h1>
        <p className="mt-4 text-xl font-medium text-cyan-400">
          Software Engineer
        </p>
        <p className="mt-6 max-w-xl text-neutral-400">{HERO_CONTENT}</p>
        
        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-cyan-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-cyan-600 transition">
            View My Work
          </button>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
        <img
          src={profilePic}
          alt="Kevin Rush"
          className="w-48 h-48 lg:w-150 lg:h-150 object-cover rounded-full border-4 border-neutral-800 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
