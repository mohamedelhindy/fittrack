import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300">{label}</label>

      <input
        {...props}
        className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
