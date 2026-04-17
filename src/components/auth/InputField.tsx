import { SubmitHandler, useForm, Resolver } from "react-hook-form";
import { minLength, z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const InputField = () => {
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-white text-sm font-medium mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="you@example.com"
      />
    </div>
  );
};
