import { FaStar } from "react-icons/fa";

interface FixStarRatingProps {
  stars: number;
}

const FixStarRating = ({ stars }: FixStarRatingProps) => {
  return (
    <div className="flex justify-start max-w-lg ">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="flex items-center justify-center">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
            />
            <div className="max-w-lg p-0 m-0">
              <FaStar
                size={20}
                color={ratingValue <= stars! ? "#ffc107" : "#e4e5e9"}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default FixStarRating;
