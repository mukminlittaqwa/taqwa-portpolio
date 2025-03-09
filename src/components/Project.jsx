import {PROJECTS} from "../constants"
const Project = () => {
  return (
    <section>
      <h1 className="my-20 text-center text-4xl">Projects & Profesional Works</h1>
      {PROJECTS.map((projects, index) => (
         <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img 
            src={projects.image}
            width={150}
            height={150}
            className="mb-6 rounded-2xl" 
            alt={projects.title} />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{projects.title}</h6>
            <p className="mb-4 text-neutral-400">{projects.description}</p>
            {projects.technologies.map((tech, index)=> (
               <span key={index} className="mr-2 rounded bg-neutral-900
               px-2 py-1 text-sm font-medium text-purple-400">{tech}</span>
            ))}
            </div>
         </div>
      ))}
    </section>
  )
}

export default Project