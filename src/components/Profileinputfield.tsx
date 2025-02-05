import React from "react";
import { TextField } from "@mui/material";

interface ProfileInputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({
  name,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <TextField
        fullWidth
        name={name}
        placeholder={label} // Set the placeholder text here
        variant="outlined"
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: false }} // Prevent the label from moving to the outline
        inputProps={{
          "aria-label": label, // Accessibility improvement
        }}
        className="bg rounded-lg shadow-sm "
      />
    </div>
  );
};

export default ProfileInputField;
