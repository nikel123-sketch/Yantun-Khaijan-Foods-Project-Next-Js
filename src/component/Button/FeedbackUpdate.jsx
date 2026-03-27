"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const FeedbackUpdate = ({ feedback }) => {
  const { _id} = feedback;
  

  const handleUpdate = async (_id) => {
    
    const name = prompt("নতুন name লিখুন");
    const message = prompt("নতুন message লিখুন:");

    if (!name || !message) return;

    const updateData = { name, message };

    
    
      const res = await fetch(`http://localhost:3000/api/feedback/${_id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();

      if (data.modifiedCount) {
        Swal.fire({
          title: "Update successfully!",
          icon: "success",
          draggable: true,
        });
        
      } else {
        alert("Update failed");
      }
    
    
  };


  return (
    <button
      onClick={() => handleUpdate(_id)}
      
      className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
    >
      Update
    </button>
  );
};

export default FeedbackUpdate;
