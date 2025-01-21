import { useState } from "react";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gray-100 flex items-center justify-center h-full">
        <img
          src={image}
          alt="Decorative chair"
          className="object-contain w-full h-full max-h-screen max-w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center h-full bg-white">
        <div className="w-full max-w-md p-8 shadow-lg rounded">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <p className="mb-6">
            Already have an account yet?{" "}
            <Link to="/" className="text-green-500 hover:underline">
              Sign In
            </Link>
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Email address"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <VisibilityOffOutlined className="text-gray-400" />
                  ) : (
                    <VisibilityOutlined className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4 p-3">
              <p className="text-gray-500">
                <input type="checkbox" /> I agree with{" "}
                <span className="font-bold text-black hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-bold text-black hover:underline">
                  Terms of Use
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
