import { useState } from "react";
import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/auth/authApi";
import InputField from "../../components/./InputField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import { errorView, successMessage } from "../../helpers/ToastHelper";

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    usertype: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData).unwrap();
      successMessage("Account created successfully");
      navigate('/');
    } catch (err) {
      errorView("Registration failed, please try again");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gray-100 hidden md:flex items-center justify-center h-full  ">
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
            <Link to="/" className="text-grn hover:underline">
              Sign In
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              required={true}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              required={true}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              required={true}
              onChange={handleChange}
            />
            <PasswordField
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              required={true}
              onChange={handleChange}
            />
            <div className="flex items-center justify-between mb-4 p-3">
              <p className="text-gray-500">
                <input type="checkbox" required /> I agree with{" "}
                <span className="font-bold text-black hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-bold text-black hover:underline">
                  Terms of Use
                </span>
              </p>
            </div>
            <Button
              type="submit"
              label="Sign Up"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
