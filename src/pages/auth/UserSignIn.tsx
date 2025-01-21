import image from "../../assets/image.png";
import { Link } from "react-router-dom";

const SignIn = () => {
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
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Your username or email address
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <span className="material-icons">👁️</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
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
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
