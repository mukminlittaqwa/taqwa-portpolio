import { useEffect } from "react";

const BackgroundAnimation = () => {
  useEffect(() => {
    function createParticle() {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const hue = Math.random() * 360;
      particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

      const duration = Math.random() * 3 + 2;
      particle.style.animation = `float-up ${duration}s linear`;

      document.getElementById("particles").appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }

    function createRocket() {
      const rocket = document.createElement("div");
      rocket.classList.add("rocket");
      rocket.innerHTML = "🚀";

      const size = Math.random() * 30 + 20;
      rocket.style.fontSize = `${size}px`;

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      rocket.style.left = `${x}px`;
      rocket.style.top = `${y}px`;

      const duration = Math.random() * 5 + 3;
      rocket.style.animation = `move-random ${duration}s linear infinite`;

      document.getElementById("particles").appendChild(rocket);

      setTimeout(() => {
        rocket.remove();
      }, duration * 1000);
    }

    const particleInterval = setInterval(createParticle, 50);
    const rocketInterval = setInterval(createRocket, 3000);

    return () => {
      clearInterval(particleInterval);
      clearInterval(rocketInterval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-animated">
      <div id="particles"></div>
      <style>
        {`
          @keyframes float-up {
            to {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes move-random {
            0% { transform: translate(0, 0); }
            25% { transform: translate(50px, -80px) rotate(20deg); }
            50% { transform: translate(-100px, 100px) rotate(-20deg); }
            75% { transform: translate(80px, -50px) rotate(10deg); }
            100% { transform: translate(0, 0); }
          }

          .particle {
            position: absolute;
            border-radius: 50%;
          }

          .rocket {
            position: absolute;
            animation: move-random 5s infinite alternate ease-in-out;
          }

          .bg-animated {
            background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundAnimation;
