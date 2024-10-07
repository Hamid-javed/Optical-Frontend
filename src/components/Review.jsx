import React from "react";

const Review = ({ reviews }) => {
  return (
    <div className="w-full mx-auto p-6 border border-gray-200 rounded-lg  bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Customer Reviews
      </h2>
      {reviews.map((review) => (
        <div
          className="border border-gray-300 rounded-md shadow-lg p-4 mb-4 bg-gray-50 "
          key={review._id}
        >
          <div className="flex justify-between mb-2">
            <span className="font-bold">{review.name}</span>
            <span className="text-gray-500 text-sm">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-yellow-500">
              {"⭐".repeat(review.rating)}
            </span>
          </div>
          <p className="italic mb-2">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;

Review.jsx
