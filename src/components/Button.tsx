import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  isLoading = false,
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 font-bold rounded-lg transition ${
        className || ""
      } ${
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
