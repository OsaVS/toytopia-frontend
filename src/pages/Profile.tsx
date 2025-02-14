import React, { useState } from "react";
import ProfileField from "../components/ProfileField";
import Button from "../components/Button";
import ProfileSidebar from "../components/ProfileSideBar";
import MobileProfileMenu from "../components/MobileProfileMenu";
import AccountTable from "../components/AccountTable";
import { Address } from "../components/Address";

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

  const [activeSection, setActiveSection] = useState("Account");

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

  const handleSectionChange = (section: string) => {
    if (section === "LogOut") {
      alert("Logged out successfully!");
    } else {
      setActiveSection(section);
    }
  };

  const userName =
    `${formData.firstName} ${formData.lastName}`.trim() || "Guest";

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-20">
      <div className="w-full flex justify-center items-center py-6">
        <h1 className="text-2xl font-semibold">My Account</h1>
      </div>

      <div className="block md:hidden">
        <MobileProfileMenu
          onChangeSection={handleSectionChange}
          activeSection={activeSection}
          userName={userName}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-3/12 lg:w-2/12 p-4">
          <ProfileSidebar
            onChangeSection={handleSectionChange}
            userName={userName}
          />
        </div>

        <div className="w-full md:w-9/12 lg:w-10/12 ">
          <div className="w-full p-4 md:p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {activeSection} Details
            </h2>

            {activeSection === "Account" && (
              <div className="space-y-5">
                <ProfileField
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />

                <ProfileField
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />

                <ProfileField
                  name="displayName"
                  label="Display Name"
                  value={formData.displayName}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-gray-500">
                  This will be how your name will be displayed in the account
                  section and in reviews.
                </p>

                <ProfileField
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <h2 className="text-xl font-semibold mt-8">Password</h2>

                <ProfileField
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                />

                <ProfileField
                  name="newPassword"
                  label="New Password"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                />

                <ProfileField
                  name="repeatPassword"
                  label="Repeat New Password"
                  type="password"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                />

                <Button
                  type="button"
                  label="Save Changes"
                  onClick={handleSaveChanges}
                  className="bg-black text-white mt-4 w-full "
                />
              </div>
            )}
            {activeSection === "Address" && (
              <div>
                <Address></Address>
              </div>
            )}
            {activeSection === "Orders" && (
              <div>
                <AccountTable></AccountTable>
              </div>
            )}
            {activeSection === "Wishlist" && <div>Wishlist Items</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
