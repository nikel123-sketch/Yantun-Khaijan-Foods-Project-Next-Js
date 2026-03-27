"use client";
import React from "react";

const AddFeedback = () => {
  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;

    const feedback = { name, message };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      const data = await res.json();
      console.log(data);
      

      alert("Feedback added successfully ✅");

      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 bg-slate-800 shadow-md p-5 rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Add Feedback
      </h2>

      <form onSubmit={handleForm} className="space-y-4">
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 outline-none border-4 focus:ring-2 focus:ring-blue-400 rounded-full font-semibold text-md"
        />

        <textarea
          required
          name="message"
          placeholder="Your Message"
          className="w-full border border-4 p-2 rounded-3xl outline-none focus:ring-2 focus:ring-blue-400 font-semibold text-md"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFeedback;
