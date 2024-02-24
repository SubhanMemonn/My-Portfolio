import { BsGithub } from "react-icons/bs";

const Mern = ({ details }) => {
  return (
    <div className="sm:w-[60%] mx-auto flex flex-col items-center p-3 sm:p-2 gap-8 mt-20 justify-center w-full">
      <div className="flex-1 text-center">
        <h1 className=" font-bold text-4xl mb-4">{details.title}</h1>
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
