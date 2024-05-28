import "../../styles/star.scss";
import starsvg from "../../assets/star.svg";

export default function Star({ rating }) {
  return (
    <div className="Star">
      {[...Array(5)].map((star, index) => (
        <label key={index}>
          <svg
            className="star"
            style={{ color: index + 1 <= rating ? "#FF6060" : "#E3E3E3" }}
          >
            <use
              href={`${starsvg}#star-${
                index + 1 <= rating ? "filled" : "empty"
              }`}
            ></use>
          </svg>
        </label>
      ))}
    </div>
  );
}
