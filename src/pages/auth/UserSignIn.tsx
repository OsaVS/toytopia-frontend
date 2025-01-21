import { useState } from "react";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { useLoginMutation } from "../../features/auth/authApi";

const SignIn = () => {
  const [signin, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const result = await signin(formData).unwrap();
      console.log("User signed in:", result);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
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
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <p className="mb-6">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500  pb-5"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pb-5"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center "
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
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between mb-4  pb-2  pt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
