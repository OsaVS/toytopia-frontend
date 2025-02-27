import { useState } from "react";
import ProfileField from "./ProfileField";
import { useAddAddressMutation } from "../features/address/addressApi";
import Loader from "./Loader";
import Button from "./Button";
import { errorView, successMessage } from "../helpers/ToastHelper";

export const Address = () => {
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

  const [addAddress, { isLoading, isSuccess }] = useAddAddressMutation();

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
      await addAddress(formData).unwrap();
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
      isSuccess && successMessage("Address added successfully");
    } catch (error) {
      errorView("Error adding address");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="border-2 border-gray-400 rounded-md p-4">
      <p className="font-medium text-center text-lg mb-5">Add a new Address</p>
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
        <Button type="submit" label="Save Address"></Button>
      </form>
    </div>
  );
};
