import React from "react";

const AddFeedback = () => {
  return (
    <div className="max-w-md mx-auto mt-5 bg-gray-600  shadow-md p-5 rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Feedback</h2>

      <form className="space-y-4 ">
        {/* Name */}
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2  outline-none focus:ring-5 border-r-8 border-b-8 border-t-8 border-l-8 focus:ring-blue-400 rounded-full font-semibold text-md"
        />

        {/* Message */}
        <textarea
          required
          name="message"
          placeholder="Your Message"
          className="w-full border border-r-8 border-b-8 border-t-8 border-l-8 p-2 rounded-3xl outline-none focus:ring-5  focus:ring-blue-400 font-semibold text-md"
          rows="4"
        ></textarea>

        {/* Submit */}
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
