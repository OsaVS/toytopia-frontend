import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfileSidebar: React.FC<{
  onChangeSection: (section: string) => void;
  userName: string; // Add userName prop
}> = ({ onChangeSection, userName }) => {
  // Destructure userName
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-xs bg-gray-100 w-full p-6 rounded-lg h-96">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {userName || "Guest"} {/* Dynamic name */}
      </h2>
      <div className="flex flex-col items-center mb-4">
        <div className="relative mb-2">
          <Avatar
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            sx={{ width: 96, height: 96 }}
          />
          <label htmlFor="upload-photo">
            <IconButton
              component="span"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                bgcolor: "white",
                boxShadow: 3,
              }}
            >
              <CameraAltIcon />
            </IconButton>
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          {["Account", "Address", "Orders", "Wishlist", "LogOut"].map(
            (section) => (
              <li key={section}>
                <a
                  href="#"
                  onClick={() => onChangeSection(section)}
                  className="text-gray-700 hover:text-black"
                >
                  {section === "LogOut" ? "Log Out" : section}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
