import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`mt-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
