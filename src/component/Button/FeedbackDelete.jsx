"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const FeedbackDelete = ({ feedback }) => {
  const route=useRouter()
  const { _id } = feedback;

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // ✅ শুধু confirm হলে delete হবে
    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/feedback/${_id}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Feedback deleted successfully",
            icon: "success",
          });
          route.refresh()
        } else {
          Swal.fire("Failed!", "Delete failed", "error");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Something went wrong", "error");
      }
    }
  };

  return (
    <button
      onClick={() => handleDelete(_id)}
      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
    >
      Delete
    </button>
  );
};

export default FeedbackDelete;
