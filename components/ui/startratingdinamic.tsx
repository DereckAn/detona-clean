"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";


// & Este componente es para poner la calificacion interactivamente.

const StarRatingDynamic = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex ">
      {[...Array(5)].map((_,i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <FaStar
              size={30}
              color={ratingValue <= (hover || rating )! ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRatingDynamic;
