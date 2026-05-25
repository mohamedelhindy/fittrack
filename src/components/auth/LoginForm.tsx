"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
}

const mockUsers = [
  {
    email: "demo@fittrack.com",
    password: "123456",
  },
];

export default function LoginForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();

  async function onSubmit(data: LoginData) {
    setMessage("");

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const found = mockUsers.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (!found) {
      setMessage("Invalid email or password");
      return;
    }

    setMessage("Login successful");
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-400">
          Continue your fitness journey
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {message && (
          <p className="text-center text-sm text-green-500">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white"
        >
          {isSubmitting ? "Loading..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-400"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
