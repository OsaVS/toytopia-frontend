import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pb-5"
      />
    </div>
  );
};

export default InputField;
