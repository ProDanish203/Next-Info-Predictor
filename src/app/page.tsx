"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [name, setName] = useState("")
  const {push} = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name) return toast.error("Name is required");
    push(`/prediction/${name}`);
    setName("");
  }

  return (
    <main>
      <ToastContainer/>
      <div className="flex items-center justify-center min-h-[100vh] max-w-[1000px] w-full mx-auto">
        <form
        onSubmit={handleSubmit}
        className="bg-white px-4 py-5 rounded-md shadow-md max-w-[400px] w-full ">
          <p className="text-md text-gray-400 font-semibold">Enter Your Name: </p>
          <input type="text" placeholder="Enter Name" 
          className="border-2 border-gray-300 outline-none w-full mt-2 rounded-sm bg-gray-200 px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

          <button 
          type="submit"
          className="bg-gray-900 py-2.5 block w-full rounded-md text-white my-2 mt-4">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}
