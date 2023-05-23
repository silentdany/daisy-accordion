import Image from "next/image";
import Link from "next/link";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 pb-7 sm:px-4 px-2 gap-2">
      <Link href="/dream" className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
          />
        </svg>

        <h1 className="sm:text-3xl text-xl ml-2 tracking-tight">
          de<span className="text-primary-500 font-bold">pikt</span>
        </h1>
      </Link>
      {email ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-primary-400 transition"
          >
            <div>Dashboard</div>
          </Link>
          <Link
            href="/buy-credits"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-primary-400 transition"
          >
            <div>Buy Credits</div>
            <div className="text-primary-500 bg-primary-200 rounded-full px-2 text-xs flex justify-center items-center font-bold">
              New
            </div>
          </Link>
          {photo ? (
            <Image
              alt="Profile picture"
              src={photo}
              className="w-10 rounded-full"
              width={32}
              height={28}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white" />
          )}
        </div>
      ) : (
        <Link
          className="flex max-w-fit items-center justify-center space-x-2 rounded-xl border border-primary-600 text-white px-5 py-2 text-sm shadow-md hover:bg-primary-400 bg-primary-600 font-medium transition"
          href="/dream"
        >
          <p>Sign Up </p>
        </Link>
      )}
    </header>
  );
}
