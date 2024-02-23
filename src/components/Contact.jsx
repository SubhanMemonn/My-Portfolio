import React from "react";

const Contact = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col gap-8 mx-auto py-8 mt-20 px-3">
      <h1 className=" font-bold text-center text-2xl  ">Contact Me</h1>
      <form className="flex flex-col gap-2">
        <label className=" font-bold">Full Name</label>
        <input
          type="text"
          className="bg-gray-100 h-14 dark:bg-slate-950 rounded-lg px-2 text-black border-gray-800 border dark:text-white"
          required
        />
        <label>Email</label>
        <input
          type="email"
          className="bg-gray-100 h-14 rounded-lg px-2 text-black border-gray-800 border dark:bg-slate-950 dark:text-white"
          required
        />
        <label>Leave your message here</label>
        <textarea
          rows="4"
          className="dark:bg-slate-950 bg-gray-100 rounded-lg px-2 text-black border-gray-800 border dark:text-white"
          required
        />
        <button className="btn btn-active btn-neutral">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
