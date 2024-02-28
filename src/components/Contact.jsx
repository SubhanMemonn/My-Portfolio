import { useState } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    setEmail("");
    setFullName("");
    setMsg("");

    toast.error("This is a demo");
  };
  return (
    <div className="w-full max-w-3xl flex flex-col gap-8 mx-auto py-8 mt-20 px-3">
      <h1 className=" font-bold text-center text-2xl  ">Contact Me</h1>
      <form onSubmit={submitHandle} className="flex flex-col gap-2">
        <label className=" font-bold">Full Name</label>
        <input
          type="text"
          className="bg-gray-100 h-14 dark:bg-slate-950 rounded-lg px-2 text-black border-gray-800 border dark:text-white"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          className="bg-gray-100 h-14 rounded-lg px-2 text-black border-gray-800 border dark:bg-slate-950 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Leave your message here</label>
        <textarea
          rows="4"
          className="dark:bg-slate-950 bg-gray-100 rounded-lg px-2 text-black border-gray-800 border dark:text-white"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-active btn-neutral">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
