"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Sign up data:", data);
    // TODO: Integrate with backend
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Join FitTrack</h1>
          <p className="text-gray-400">Start your fitness journey today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600 rounded px-4 py-3 transition"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600 rounded px-4 py-3 transition"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600 rounded px-4 py-3 transition"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600 rounded px-4 py-3 transition"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded transition duration-300"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-yellow-600 hover:text-yellow-400"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
