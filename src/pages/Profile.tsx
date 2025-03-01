import React, { useEffect, useState } from "react";
import ProfileField from "../components/ProfileField";
import Button from "../components/Button";
import ProfileSidebar from "../components/ProfileSideBar";
import MobileProfileMenu from "../components/MobileProfileMenu";
import AccountTable from "../components/AccountTable";
import { Address } from "../components/Address";
import {
  useChangePasswordMutation,
  useFetchUserQuery,
  useUpdateUserMutation,
} from "../features/user/userApi";
import Loader from "../components/Loader";
import { errorView, successMessage } from "../helpers/ToastHelper";

const ProfilePage: React.FC = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [activeSection, setActiveSection] = useState("Account");
  const { data: user, isLoading, refetch } = useFetchUserQuery(undefined);
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  const [changePassword, { isLoading: passwordLoading }] =
    useChangePasswordMutation();

  useEffect(() => {
    if (user) {
      setUserFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
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

  const handlePasswordFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | string,
    name?: string
  ) => {
    if (typeof event === "string" && name) {
      setPasswordFormData((prev) => ({ ...prev, [name]: event }));
    } else if (typeof event !== "string") {
      setPasswordFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSectionChange = (section: string) => {
    if (section === "LogOut") {
      alert("Logged out successfully!");
    } else {
      setActiveSection(section);
    }
  };

  const handleUpdateUser = async () => {
    try {
      await updateUser(userFormData).unwrap();
      successMessage("Profile updated successfully!");
      refetch();
    } catch (error) {
      errorView("Error updating profile");
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const { oldPassword, newPassword, repeatPassword } = passwordFormData;

    if (!oldPassword || !newPassword || !repeatPassword) {
      errorView("All fields are required.");
      return;
    }

    if (newPassword !== repeatPassword) {
      errorView("New passwords do not match.");
      return;
    }

    try {
      const response = await changePassword({
        oldPassword,
        newPassword,
      }).unwrap();
      successMessage(response.message || "Password updated successfully!");
      setPasswordFormData({
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      });
    } catch (error: any) {
      errorView(error?.data?.message || "Error updating password.");
    }
  };

  const profileName =
    `${userFormData.firstName} ${userFormData.lastName}`.trim() || "Guest";

  if (isLoading || updateLoading || passwordLoading) {
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
          userName={profileName}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-3/12 lg:w-2/12 p-4">
          <ProfileSidebar
            onChangeSection={handleSectionChange}
            userName={profileName}
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
                  <form onSubmit={handleUpdateUser}>
                    <ProfileField
                      name="firstName"
                      label="First Name"
                      value={userFormData.firstName}
                      onChange={handleChange}
                      required={true}
                    />
                    <ProfileField
                      name="lastName"
                      label="Last Name"
                      value={userFormData.lastName}
                      onChange={handleChange}
                      required={true}
                    />
                    <ProfileField
                      name="username"
                      label="Username"
                      value={userFormData.username}
                      onChange={handleChange}
                      required={true}
                    />
                    <ProfileField
                      name="email"
                      label="Email"
                      value={userFormData.email}
                      onChange={handleChange}
                      required={true}
                    />
                    <Button type="submit" label="Update Profile"></Button>
                  </form>

                  <form onSubmit={handlePasswordChange}>
                    <h2 className="text-xl font-semibold mt-8">Password</h2>
                    <ProfileField
                      name="oldPassword"
                      label="Old Password"
                      type="password"
                      value={passwordFormData.oldPassword}
                      onChange={handlePasswordFormChange}
                      required={true}
                    />
                    <ProfileField
                      name="newPassword"
                      label="New Password"
                      type="password"
                      value={passwordFormData.newPassword}
                      onChange={handlePasswordFormChange}
                      required={true}
                    />
                    <ProfileField
                      name="repeatPassword"
                      label="Repeat New Password"
                      type="password"
                      value={passwordFormData.repeatPassword}
                      onChange={handlePasswordFormChange}
                      required={true}
                    />
                    <Button type="submit" label="Change Password"></Button>
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
