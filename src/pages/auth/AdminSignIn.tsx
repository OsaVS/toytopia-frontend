import { useState } from "react";
import image from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setAdminCredentials } from "../../features/auth/authSlice";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signin, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signin(formData).unwrap();
      if (data.token && data.user && data.user?.usertype === "admin") {
        dispatch(setAdminCredentials(data));
        navigate("/admin/dashboard");
      } else {
        setError("You do not have access to this account.");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="bg-gray-100 flex items-center justify-center h-full">
        <img
          src={image}
          alt="Decorative chair"
          className="object-cover w-full h-full max-h-screen max-w-full"
        />
      </div>
      <div className="flex items-center justify-center h-full bg-[#f1f1f1]">
        <div className="w-full max-w-md p-8 shadow-lg rounded bg-white">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <p className="mb-1">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-grn hover:underline">
              Sign Up
            </Link>
          </p>
          {error ? (
            <div className="flex items-center justify-center p-3 rounded-md">
              <p className="text-sm text-[#990000]">{error}</p>
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="mt-1">
            <InputField
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
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
            <div className="flex items-center justify-between mb-4 pb-2 pt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              label="Sign In"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
