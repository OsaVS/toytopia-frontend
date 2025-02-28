import React, { useEffect, useState } from "react";
import ProfileField from "../components/ProfileField";
import Button from "../components/Button";
import ProfileSidebar from "../components/ProfileSideBar";
import MobileProfileMenu from "../components/MobileProfileMenu";
import AccountTable from "../components/AccountTable";
import { Address } from "../components/Address";
import { useFetchUserQuery } from "../features/user/userApi";
import Loader from "../components/Loader";

const ProfilePage: React.FC = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
  });

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [activeSection, setActiveSection] = useState("Account");
  const { data: user, isLoading, refetch } = useFetchUserQuery(undefined);

  useEffect(() => {
    if (user) {
      setUserFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.username,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | string,
    name?: string
  ) => {
    if (typeof event === "string" && name) {
      setUserFormData((prev) => ({ ...prev, [name]: event }));
    } else if (typeof event !== "string") {
      setUserFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSaveChanges = () => {
    if (passwordFormData.newPassword !== passwordFormData.repeatPassword) {
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
    `${userFormData.firstName} ${userFormData.lastName}`.trim() || "Guest";

  if (isLoading) {
    return <Loader />;
  }

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
              <>
                <div className="space-y-5">
                  <form action="">
                    <ProfileField
                      name="firstName"
                      label="First Name"
                      value={userFormData.firstName}
                      onChange={handleChange}
                    />
                    <ProfileField
                      name="lastName"
                      label="Last Name"
                      value={userFormData.lastName}
                      onChange={handleChange}
                    />
                    <ProfileField
                      name="displayName"
                      label="Display Name"
                      value={userFormData.displayName}
                      onChange={handleChange}
                    />
                    <p className="text-sm text-gray-500">
                      This will be how your name will be displayed in the
                      account section and in reviews.
                    </p>
                    <ProfileField
                      name="email"
                      label="Email"
                      value={userFormData.email}
                      onChange={handleChange}
                    />
                    <Button
                      type="button"
                      label="Save Changes"
                      onClick={handleSaveChanges}
                      className="bg-black text-white mt-2 w-full "
                    />
                  </form>

                  <form action="">
                    <h2 className="text-xl font-semibold mt-8">Password</h2>
                    <ProfileField
                      name="oldPassword"
                      label="Old Password"
                      type="password"
                      value={passwordFormData.oldPassword}
                      onChange={handleChange}
                    />
                    <ProfileField
                      name="newPassword"
                      label="New Password"
                      type="password"
                      value={passwordFormData.newPassword}
                      onChange={handleChange}
                    />
                    <ProfileField
                      name="repeatPassword"
                      label="Repeat New Password"
                      type="password"
                      value={passwordFormData.repeatPassword}
                      onChange={handleChange}
                    />
                    <Button
                      type="button"
                      label="Change Password"
                      onClick={handleSaveChanges}
                      className="bg-black text-white mt-4 w-full "
                    />
                  </form>
                </div>
              </>
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
