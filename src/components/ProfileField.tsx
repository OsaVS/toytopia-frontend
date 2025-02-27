import React from "react";
import { TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ProfileFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string, name?: string) => void;
  required?: boolean;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-1"
        style={{ color: "#6C7275" }}
      >
        {label} *
      </label>

      {type === "tel" ? (
        <PhoneInput
          country={"lk"}
          value={value}
          onChange={(phone) => onChange(phone, name)}
          inputStyle={{
            width: "100%",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #CBCBCB",
            paddingLeft: "50px",
          }}
        />
      ) : (
        <TextField
          fullWidth
          id={name}
          name={name}
          placeholder={label}
          variant="outlined"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value, name)}
          required={required}
          InputLabelProps={{
            shrink: false,
          }}
          inputProps={{
            "aria-label": label,
            style: { color: "#6C7275" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "2px",
              borderRadius: "6px",
              fontSize: "14px",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A5A5A5",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
                borderWidth: "1px",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBCBCB",
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px 10px",
              color: "#6C7275",
            },
          }}
        />
      )}
    </div>
  );
};

export default ProfileField;
