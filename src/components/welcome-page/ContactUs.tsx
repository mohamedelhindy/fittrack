"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form data:", data);
    reset();
  };

  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <h1 className="text-[17px] font-bold pb-2 uppercase">Get in Touch</h1>
          <h2 className="text-4xl uppercase font-bold pb-6">
            Want to work with us?
          </h2>
          <p className="text-[19px] text-gray-300">
            Complete this form and we will get back to you in 24 hours. We're
            here to make your fitness journey just a little easier.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 rounded px-4 py-3 transition"
              placeholder="Your name"
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
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 rounded px-4 py-3 transition"
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
              Message
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full bg-gray-900 text-white placeholder:text-gray-500 border border-gray-700 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 rounded px-4 py-3 transition resize-none"
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
