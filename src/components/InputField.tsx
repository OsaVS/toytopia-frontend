import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="w-full p-3 border-b border-gray-300 focus:border-green-500 focus:outline-none transition-colors duration-300"
      />
    </div>
  );
};

export default InputField;
