import { BsGithub } from "react-icons/bs";
const Mern = ({ details }) => {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row md:items-center p-3 sm:p-2 gap-8 mt-20 justify-center">
      <div className=" overflow-hidden flex-1">
        <video
          autoPlay
          loop
          muted
          src={details.video}
          alt="Chat-app"
          className=" w-full h-full rounded-xl"
        />
      </div>
      <div className="flex-1 text-center">
        <h1 className=" font-bold text-2xl mb-4">{details.title}</h1>
        <p>{details.description}</p>
        <div className="flex flex-row flex-nowrap gap-4 w-fit mx-auto mt-4 font-bold text-lg">
          <a
            className=" flex items-center gap-2"
            href={details.gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            code
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mern;
