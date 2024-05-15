"use client";
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-orange-300 to-green-400 flex items-center justify-center">
      <div className="bg-zinc-300 bg-opacity-75 rounded-lg shadow-lg p-8 max-w-xl w-full space-y-8 flex relative">
        {/* Pentagon shape motion */}
        <div className="fixed ml-48 mt-20 flex items-center pointer-events-none z-10">
          <svg
            className="text-orange-300"
            width="350"
            height="380"
            viewBox="0 0 350 380"
            fill="currentColor"
          >
            <polygon points="200 50, 300 140, 280 300, 120 300, 100 140" />
          </svg>
        </div>
        {/* Signup content */}
        <div className="w-fullw-1/2 z-10 mr-2">
          <div className="text-center">
            <div className="text-center"></div>
            <Image src="/logo.svg" alt="Logo" width={50} height={15} />
            <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
              Sign in to get started!
            </h2>
          </div>

          <form className="mt-4 space-y-6" action="#" method="POST">
            <div>
              <input
                id="user"
                name="user"
                type="text"
                placeholder="User Name"
                autoComplete="username"
                required
                className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-gray-100"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-gray-100"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                <Image
                  src="/eye-password-see-view 1.svg"
                  alt="Eye Icon"
                  width={15}
                  height={15}
                />
              </button>
            </div>
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-amber-600 hover:text-amber-400"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>

          <p className="mt-2 text-sm text-gray-600">
            Not signed up?{" "}
            <a
              href="#"
              className="font-semibold text-amber-600 hover:text-amber-500"
            >
              Sign up
            </a>
          </p>
        </div>
        {/* Image */}
        <div className="w-1/2 flex justify-center items-center z-10">
          <img
            src="/Women pic.png"
            alt="Doctor Image"
            className="w-30 h-30 ml-4 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
