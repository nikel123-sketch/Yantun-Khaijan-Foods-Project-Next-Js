import React from "react";
import FeedbackDelete from "../Button/FeedbackDelete";

const FeedbackCard = ({ feedback}) => {
  const { _id, name, message, date } = feedback;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition mb-4">
      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

      {/* Message */}
      <p className="text-gray-600 mt-2">{message}</p>

      {/* Date */}
      <p className="text-sm text-gray-400 mt-3">{date}</p>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <FeedbackDelete  feedback={feedback}></FeedbackDelete>
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
