import FeedbackCard from '@/component/Card/FeedbackCard';
import FoodCard from '@/component/Card/FoodCard';
import React from 'react';

export const metadata = {
  title: "Feedback | Yantun Khaijan Foods Restaurant",
  description:
    "Explore delicious foods at Yantun Khaijan. Discover a variety of meals, reviews, and order your favorite dishes online.",
};



const getdata=async()=>{
    const res = await fetch("http://localhost:3000/api/feedback");
    const data=await res.json();
    return data;
}
const FeedbackPage =async () => {
    const allfeedback=await getdata()
    return (
        <div>
            <h1 className='font-bold text-2xl text-center underline'>Totall feedback :{ allfeedback.length}</h1>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    allfeedback.map(feedback=><FeedbackCard key={feedback._id}    feedback={feedback}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default FeedbackPage;