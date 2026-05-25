"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>();

  const password = watch("password");

  async function onSubmit(data: SignupData) {
    setMessage("");

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    console.log(data);

    setMessage("Account created successfully");
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-gray-400">
          Start your fitness journey today
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <span className="text-sm text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

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
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value === password ||
                "Passwords do not match",
            })}
          />

          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
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
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white"
        >
          {isSubmitting ? "Loading..." : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
