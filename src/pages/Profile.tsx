import React, { useState } from "react";
import ProfileInputField from "../components/profileinputfield";
import ProfilePasswordField from "../components/Profilepasswordfield";
import Button from "../components/Button";

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    if (formData.newPassword !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-1/5 bg-gray-100 flex justify-center items-center p-6 pl-12">
        <div className="max-w-xs w-full bg-white p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="text-gray-600">
            This is the profile settings page. Use the form on the right to
            update your details and password.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-4/5 flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>

          <div className="space-y-6">
            {/* Profile Fields */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-2"
              >
                First Name *
              </label>
              <ProfileInputField
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                label="First name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-2"
              >
                Last Name *
              </label>
              <ProfileInputField
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                label="Last name"
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium mb-2"
              >
                Display Name *
              </label>
              <ProfileInputField
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                label="Display name"
              />
              <p className="text-sm text-gray-500 mt-2">
                This will be how your name will be displayed in the account
                section and in reviews.
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <ProfileInputField
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                label="Email"
              />
            </div>

            {/* Password Fields */}
            <h2 className="text-xl font-semibold mt-8">Password</h2>

            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium mb-2"
              >
                Old Password
              </label>
              <ProfilePasswordField
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                label="Old password"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium mb-2"
              >
                New Password
              </label>
              <ProfilePasswordField
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                label="New password"
              />
            </div>

            <div>
              <label
                htmlFor="repeatPassword"
                className="block text-sm font-medium mb-2"
              >
                Repeat New Password
              </label>
              <ProfilePasswordField
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                label="Repeat new password"
              />
            </div>
            <Button
              type="button"
              label="Save Changes"
              onClick={handleSaveChanges}
              className="bg-black text-white mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
