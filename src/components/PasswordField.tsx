import React, { useState } from "react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

interface PasswordFieldProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  value,
  placeholder,
  onChange,
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
          onChange={onChange}
          className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pb-5"
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
    </div>
  );
};

export default PasswordField;
