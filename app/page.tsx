"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Add authentication logic here for login
      // On successful login:
      router.push("/student");
    } else {
      // Add registration logic here
      // Simulate successful registration
      setTimeout(() => {
        // After registration, redirect to login page
        setIsLogin(true);
        alert("Registration successful! Please log in.");
      }, 1000); // Simulate server response time
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-orange-300 to-green-400 flex items-center justify-center">
      <div className="bg-zinc-300 bg-opacity-75 rounded-lg shadow-lg p-8 max-w-xl w-full space-y-8 flex relative">
        <div className="w-full z-10 mr-2">
          <div className="text-center">
            <Image src="/logo.svg" alt="Logo" width={50} height={15} />
            <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
              {isLogin ? "Login to get started!" : "Register to join us!"}
            </h2>
          </div>

          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
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
            {!isLogin && (
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-gray-100"
                />
              </div>
            )}
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
            {isLogin && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-amber-600 hover:text-amber-400"
                >
                  Forgot password?
                </a>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? (
              <>
                Not registered?{" "}
                <a
                  href="#"
                  className="font-semibold text-amber-600 hover:text-amber-500"
                  onClick={toggleFormMode}
                >
                  Register
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-semibold text-amber-600 hover:text-amber-500"
                  onClick={toggleFormMode}
                >
                  Login
                </a>
              </>
            )}
          </p>
        </div>
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
