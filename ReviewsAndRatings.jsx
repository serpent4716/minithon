import React from "react";

function ReviewsAndRatings() {
  const reviews = [
    {
      id: 1,
      client: "Jane Doe",
      rating: 5,
      comment: "Excellent service!",
      date: "2023-05-15",
    },
    {
      id: 2,
      client: "Bob Smith",
      rating: 4,
      comment: "Very professional.",
      date: "2023-05-10",
    },
  ];

  return (
    <div className="reviews-and-ratings">
      <h3>Client Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.client}</strong> - Rating: {review.rating}/5
            <p>{review.comment}</p>
            <small>Date: {review.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewsAndRatings;
