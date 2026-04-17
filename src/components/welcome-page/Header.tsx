import Link from "next/link";

export const Header = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-7 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-3xl">
          Fit Track
        </Link>

        <div className="flex gap-8">
          <Link
            href="/signup"
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};
