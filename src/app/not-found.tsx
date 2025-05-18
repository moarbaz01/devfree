import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen  dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Page Not Found
      </p>
      <Link
        href="/"
        className="mt-4 bg-primary text-white px-8 rounded-full py-2 hover:bg-primary/80 transition duration-300"
        aria-label="Go Back Home"
      >
        Go Back Home
      </Link>
    </div>
  );
}
