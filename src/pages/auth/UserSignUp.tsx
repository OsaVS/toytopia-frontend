import { useState } from "react";
import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/auth/authApi";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import { errorView, successMessage } from "../../helpers/ToastHelper";
import { UserType } from "../../types/user";
import Loader from "../../components/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
    usertype: string;
  }

  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    username?: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    usertype: UserType.USER,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          newErrors.firstName = "Name is required";
        } else if (value.length < 2 || value.length > 50) {
          newErrors.firstName = "Name must be between 2 and 50 characters";
        } else {
          delete newErrors.firstName;
        }
        break;
      case "lastName":
        if (!value.trim()) {
          newErrors.lastName = "Name is required";
        } else if (value.length < 2 || value.length > 50) {
          newErrors.lastName = "Name must be between 2 and 50 characters";
        } else {
          delete newErrors.lastName;
        }
        break;
      case "username":
        if (!value.trim()) {
          newErrors.username = "Username is required";
        } else if (!/^[a-zA-Z0-9._]+$/.test(value)) {
          newErrors.username =
            "Username can only contain letters, numbers, dots, and underscores";
        } else if (value.length < 3 || value.length > 15) {
          newErrors.username = "Username must be between 3 and 15 characters";
        } else {
          delete newErrors.username;
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (!value.trim()) {
          newErrors.password = "Password is required";
        } else if (
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
            value
          )
        ) {
          newErrors.password =
            "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) =>
      validateField(key, (formData as any)[key])
    );
    if (Object.keys(errors).length > 0) return;

    try {
      await signup(formData).unwrap();
      successMessage("Account created successfully");
      navigate("/");
    } catch (err: any) {
      if (err?.data?.message) {
        errorView(err.data.message);
      } else {
        errorView(
          "Registration failed. Please check your details and try again."
        );
      }
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gray-100 hidden md:flex items-center justify-center h-full">
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
              name="firstName"
              value={formData.firstName}
              placeholder="Your First Name"
              required={true}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Your Last name"
              required={true}
              onChange={handleChange}
              error={errors.lastName}
            />
            <InputField
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              required={true}
              onChange={handleChange}
              error={errors.username}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              required={true}
              onChange={handleChange}
              error={errors.email}
            />
            <PasswordField
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              required={true}
              onChange={handleChange}
              error={errors.password}
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
