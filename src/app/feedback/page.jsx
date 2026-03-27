import FeedbackCard from "@/component/Card/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Feedback | Yantun Khaijan Foods Restaurant",
  description:
    "Explore delicious foods at Yantun Khaijan. Discover a variety of meals, reviews, and order your favorite dishes online.",
};

const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/feedback",{cache:'force-cache', next:{revalidate:60}});
  const data = await res.json();
  return data;
};

const FeedbackPage = async () => {
  const allfeedback = await getdata();

  return (
    <div className=" px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold  border-b-2 border-blue-500 pb-1">
          Total Feedback:
          <span className="text-blue-600 ml-2">{allfeedback.length}</span>
        </h1>

        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          href={"/feedback/addfeedback"}
        >
          + Add Feedback
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allfeedback.map((feedback) => (
          <div
            key={feedback._id}
            className="transform hover:scale-105 transition duration-300"
          >
            <FeedbackCard feedback={feedback} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
