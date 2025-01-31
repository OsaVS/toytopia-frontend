import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // Optional error message prop
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4" style={{ flex: 1 }}>
      {error && <p className="text-red-500 text-sm mb-1">{error}</p>}{" "}
      {/* Error displayed here */}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className={`w-full p-3 border-b ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none transition-colors duration-300 bg-transparent`}
        style={{
          borderBottom: "1px solid #aaaa", // Thinner black bottom border
          borderRadius: "0", // No border radius
          fontSize: "1rem", // Consistent font size
          color: "#000", // Black text
        }}
      />
    </div>
  );
};

export default InputField;
