import React from "react";
import ProfileField from "./ProfileField";

export const Address = () => {
  return (
    <div className="border-2 border-gray-400 rounded-md p-4">
      <span>Shipping Address</span>
      <div className="flex flex-col mt-4">
        <div className="grid grid-cols-2 gap-2">
          <ProfileField
            name="firstname"
            label="First Name"
            value=""
            onChange={() => {}}
          />
          <ProfileField
            name="lastname"
            label="Last Name"
            value=""
            onChange={() => {}}
          />
        </div>

        <ProfileField name="phone" label="Phone" value="" onChange={() => {}} />
        <ProfileField
          name="streetaddress"
          label="Street Address"
          value=""
          onChange={() => {}}
        />

        <ProfileField
          name="city"
          label="Town/City"
          value=""
          onChange={() => {}}
        />

        <div className="grid grid-cols-2 gap-2">
          <ProfileField
            name="province"
            label="Province"
            value=""
            onChange={() => {}}
          />
          <ProfileField
            name="country"
            label="Country"
            value=""
            onChange={() => {}}
          />
          <ProfileField
            name="postalCode"
            label="Postal Code"
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
