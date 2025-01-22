import React, { useState } from "react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

interface PasswordFieldProps {
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  value,
  placeholder,
  required,
  onChange,
  error, // Add this
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className={`w-full p-3 border-b ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none transition-colors duration-300`}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-3 flex items-center"
          onClick={togglePassword}
        >
          {showPassword ? (
            <VisibilityOffOutlined className="text-gray-400" />
          ) : (
            <VisibilityOutlined className="text-gray-400" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordField;
