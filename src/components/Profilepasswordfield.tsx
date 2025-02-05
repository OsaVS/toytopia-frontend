import React from "react";
import { TextField } from "@mui/material";

interface ProfilePasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfilePasswordField: React.FC<ProfilePasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <TextField
        fullWidth
        placeholder={label} // Set placeholder instead of a label
        name={name}
        variant="outlined"
        type="password"
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: false }} // Prevent floating label effect
        inputProps={{
          "aria-label": label, // For accessibility
        }}
        className="bg rounded-lg shadow-sm"
      />
    </div>
  );
};

export default ProfilePasswordField;
