import { useState, useEffect } from "react";
import ProfileField from "./ProfileField";
import Button from "./Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { errorView, successMessage } from "../helpers/ToastHelper";
import { Dialog } from "@mui/material";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  title: string;
  initialData?: any;
  type: "add" | "update";
  buttonLabel: string;
}

const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  initialData,
  type,
  buttonLabel,
}) => {
  const [formData, setFormData] = useState({
    label: "",
    firstName: "",
    lastName: "",
    phone: "",
    streetAddress: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        label: "",
        firstName: "",
        lastName: "",
        phone: "",
        streetAddress: "",
        city: "",
        province: "",
        country: "",
        postalCode: "",
      });
    }
  }, [initialData]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | string,
    name?: string
  ) => {
    if (typeof event === "string" && name) {
      setFormData((prev) => ({ ...prev, [name]: event }));
    } else if (typeof event !== "string") {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await onSubmit(formData);
      if (type === "add") {
        successMessage(`New Address added successfully`);
      } else {
        successMessage(`Address updated successfully`);
      }
      onClose();
    } catch (error) {
      if (type === "add") {
        errorView(`Error adding new address`);
      } else {
        errorView(`Error updating address`);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ p: 2 }}>
      <div className="absolute top-4 right-4">
        <CloseOutlinedIcon
          sx={{
            fontSize: 18,
            color: "#fff",
            ":hover": { cursor: "pointer" },
          }}
          onClick={onClose}
        />
      </div>
      <div className="border-2 bg-white border-gray-400 rounded-md xs:px-4 py-4 md:px-10">
        <p className="font-medium text-center text-lg mb-5">{title}</p>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4">
          <ProfileField
            name="label"
            label="Address Label"
            value={formData.label}
            onChange={handleChange}
            required={true}
          />
          <div className="grid grid-cols-2 gap-2">
            <ProfileField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required={true}
            />
            <ProfileField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required={true}
            />
          </div>
          <ProfileField
            name="phone"
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required={true}
          />
          <ProfileField
            name="streetAddress"
            label="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            required={true}
          />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <ProfileField
              name="city"
              label="Town/City"
              value={formData.city}
              onChange={handleChange}
              required={true}
            />
            <ProfileField
              name="province"
              label="Province"
              value={formData.province}
              onChange={handleChange}
              required={true}
            />
            <ProfileField
              name="country"
              label="Country"
              value={formData.country}
              onChange={handleChange}
              required={true}
            />
            <ProfileField
              name="postalCode"
              label="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required={true}
            />
          </div>
          <Button type="submit" label={buttonLabel}></Button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddressModal;
