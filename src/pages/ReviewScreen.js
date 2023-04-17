import React, { useState } from "react";

const ReviewScreen = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle submitting review to server
    console.log(`Submitted review with rating ${rating} and text "${review}"`);
    setReview("");
    setRating(0);
  };

  return (
    <div>
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            <option value="0">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={handleReviewChange}
            placeholder="Write your review here"
          ></textarea>
        </div>
        <button type="submit" disabled={rating === 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewScreen;