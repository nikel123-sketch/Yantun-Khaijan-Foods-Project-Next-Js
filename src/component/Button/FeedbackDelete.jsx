
"use client"
import React from 'react';

const FeedbackDelete = ({feedback}) => {
    const {_id}=feedback;
    const hendledelete=async(_id)=>{
        console.log(_id)
        const res =await fetch(`http://localhost:3000/api/feedback/${_id}`,{
            method:'delete',
            
        });
        const data=await res.json();
        if (data.deletedCount) {
          alert("Feedback deleted successfully");
        }

    }


    return (
      <button
      onClick={()=>hendledelete(_id)}
      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition">
        Delete
      </button>
    );
};

export default FeedbackDelete;