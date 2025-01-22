import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  isLoading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 font-bold rounded-lg transition ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-btn text-white hover:bg-gray-800"
      }`}
      disabled={disabled}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
