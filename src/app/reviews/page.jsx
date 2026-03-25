
import ReviewsCard from "@/component/Card/ReviewsCard";
import { Anek_Bangla } from "next/font/google";
import React from "react";

const getreviews = async () => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`);
  const data = await res.json();
  return data.reviews;
};


export const metadata = {
  title: "Reviews | Best Foods Restaurant",
  description:
    "Explore delicious foods at Yantun Khaijan. Discover a variety of meals, reviews, and order your favorite dishes online.",
};


const anekfont=Anek_Bangla({
  weight:'400'
})
const ReviewsPage = async () => {
  const reviews = await getreviews();

  return (
    <div className={`${anekfont.className}`}>
      <div className="">
        <h1 className=" underline font-bold text-center text-2xl">
          Totails Reviews{reviews.length}
        </h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {reviews.map((review) => (
          <ReviewsCard key={review.id} coustomerreview={review}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
