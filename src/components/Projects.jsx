import Mern from "./Mern";
import Backend from "./Backend";
import { mern, backend } from "../assets/projects";
const Projects = () => {
  return (
    <div className="w-full max-w-5xl min-h-screen mx-auto mt-10">
      <span className="text-blue-500 font-bold my-11 text-xl">PORJECTS</span>
      <h1 className="font-semibold text-4xl mt-8">MERN Stack Projects</h1>
      {mern.map((i, n) => (
        <Mern key={n} details={i} />
      ))}
      <h1 className="font-semibold text-4xl my-8">Backend Projects</h1>
      {backend.map((i, n) => (
        <Backend key={n} details={i} />
      ))}
    </div>
  );
};

export default Projects;
