import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-center p-3 sm:p-2 sm:gap-8 gap-4 mt-20 justify-center h-screen">
      <div className=" overflow-hidden rounded-lg flex-1">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Laptop"
          className=""
        />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <span className="text-xl text-blue-500 font-bold whitespace-nowrap">
          About Me
        </span>
        <h1 className="text-4xl font-bold">A dedicated MERN Stack Developer</h1>
        <p className="text-xs">
          I am a MERN stack developer with a good foundation in Node.js.
          Proficient in building full-stack applications, I specialize in
          utilizing the power of MongoDB, Express.js, React.js, and Node.js to
          create dynamic and responsive web applications. My skill set extends
          to frontend development using technologies like Tailwind CSS, ensuring
          modern and visually appealing user interfaces. Additionally, I have
          hands-on experience with real-time communication through Socket.io.
          Currently pursuing ACCP (Aptech Certificate in Computer Professional)
          at Aptech, I am dedicated to continually enhancing my skills and
          staying updated with the latest trends in web development. I have one
          year of experience as a Node.js Developer at Progatix.
        </p>
      </div>
    </div>
  );
};

export default About;
