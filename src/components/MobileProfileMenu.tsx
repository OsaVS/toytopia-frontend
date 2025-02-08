import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MobileProfileMenu: React.FC<{
  onChangeSection: (section: string) => void;
  activeSection: string;
  userName: string; 
}> = ({ onChangeSection, activeSection, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleSectionChange = (section: string) => {
    onChangeSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Profile Section */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Avatar
              src={profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
              sx={{ width: 48, height: 48 }}
            />
            <label htmlFor="mobile-upload-photo">
              <IconButton
                component="span"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  bgcolor: "white",
                  boxShadow: 3,
                  transform: "translate(25%, 25%)",
                  padding: 0.5,
                }}
              >
                <CameraAltIcon fontSize="small" />
              </IconButton>
            </label>
            <input
              type="file"
              id="mobile-upload-photo"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <div>
            <h3 className="font-semibold">{userName}</h3>
            <p className="text-sm text-gray-500">Account</p>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Section */}
      <div>
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="font-medium">
            {activeSection === "LogOut" ? "Menu" : activeSection}
          </span>
          <IconButton>
            {isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
        </div>

        {isMenuOpen && (
          <div className="bg-white">
            <ul className="py-2">
              {["Account", "Address", "Orders", "Wishlist", "LogOut"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleSectionChange(section)}
                      className={`w-full px-6 py-3 text-left ${
                        activeSection === section
                          ? "bg-gray-100 font-medium"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {section === "LogOut" ? "Log Out" : section}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileProfileMenu;
