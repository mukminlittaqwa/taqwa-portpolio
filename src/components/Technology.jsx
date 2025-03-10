import { RiReactjsLine } from "react-icons/ri";
import { 
  SiMongodb, SiNodedotjs, SiGoland, SiRedis, SiGin, SiPhp, SiLaravel, SiCodeigniter, 
  SiSvelte, SiFlutter, SiDart, SiSwift, SiPostgresql, SiMysql, SiInfluxdb, SiMqtt, 
  SiPython, SiFlask, SiTailwindcss, SiBootstrap, SiDocker, SiGooglecloud 
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // Gunakan FaAws sebagai pengganti SiAmazonaws

const technologies = [
  { name: "React", icon: <RiReactjsLine className="text-3xl text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-3xl text-green-400" /> },
  { name: "Golang", icon: <SiGoland className="text-3xl text-blue-400" /> },
  { name: "Redis", icon: <SiRedis className="text-3xl text-red-500" /> },
  { name: "Gin", icon: <SiGin className="text-3xl text-indigo-500" /> },
  { name: "PHP", icon: <SiPhp className="text-3xl text-indigo-700" /> },
  { name: "Laravel", icon: <SiLaravel className="text-3xl text-red-500" /> },
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-3xl text-orange-500" /> },
  { name: "Svelte", icon: <SiSvelte className="text-3xl text-orange-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-3xl text-blue-500" /> },
  { name: "Dart", icon: <SiDart className="text-3xl text-blue-400" /> },
  { name: "Swift", icon: <SiSwift className="text-3xl text-orange-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-3xl text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-3xl text-blue-400" /> },
  { name: "InfluxDB", icon: <SiInfluxdb className="text-3xl text-green-400" /> },
  { name: "MQTT", icon: <SiMqtt className="text-3xl text-purple-500" /> },
  { name: "Python", icon: <SiPython className="text-3xl text-yellow-400" /> },
  { name: "Flask", icon: <SiFlask className="text-3xl text-gray-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-3xl text-cyan-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-3xl text-purple-600" /> },
  { name: "Docker", icon: <SiDocker className="text-3xl text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-3xl text-yellow-500" /> }, // Gunakan FaAws
  { name: "GCP", icon: <SiGooglecloud className="text-3xl text-blue-500" /> },
];

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-12 px-4">
      <h1 className="my-8 text-center text-3xl font-bold text-white neon-text">
        Technologies
      </h1>

      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center px-2 md:px-4">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center space-y-1 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {tech.icon}
            <span className="text-xs font-semibold text-white">{tech.name}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          .neon-text {
            text-shadow: 0 0 8px #fff, 0 0 15px #00ffff, 0 0 20px #00ffff;
            animation: neon-glow 1.5s infinite alternate;
          }

          @keyframes neon-glow {
            0%, 100% {
              text-shadow: 0 0 5px #fff, 0 0 10px #00ffff, 0 0 15px #00ffff;
            }
            50% {
              text-shadow: 0 0 2px #fff, 0 0 5px #00ffff, 0 0 7px #00ffff;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Technology;
