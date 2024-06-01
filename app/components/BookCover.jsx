import React from "react";

function BookCover({ imageUrl, alt }) {
  return (
    <img
      src={imageUrl}
      alt={`Book Cover ${alt}`}
      className="w-full md:w-full max-w-xs md:max-w-none rounded-r-2xl shadow-xl"
    />
  );
}

export default BookCover;
