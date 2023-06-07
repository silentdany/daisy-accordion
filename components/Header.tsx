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
    <>
      <header className="sticky flex flex-col items-center justify-between w-full h-10 gap-2 px-2 mt-3 xs:flex-row sm:px-4">
        {/* <Link href="/app" className="flex items-start space-x-2"> */}
        <div className="flex items-start space-x-2">
          <Image
            alt="Depikt logo"
            src="/logo_black.png"
            className="w-8 md:w-10"
            width={40}
            height={40}
          />
          <span className="text-2xl md:text-3xl mx-2">|</span>
          <h2 className="ml-2 text-2xl tracking-tight md:text-3xl">
            de<span className="font-bold text-primary-500">pikt</span>
          </h2>
        </div>
        {/* {email ? (
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="flex pr-4 space-x-2 transition border-r border-gray-300 hover:text-primary-400"
            >
              <div>Dashboard</div>
            </Link>
            <Link
              href="/buy-credits"
              className="flex pr-4 space-x-2 transition border-r border-gray-300 hover:text-primary-400"
            >
              <div>Buy Credits</div>
              <div className="flex items-center justify-center px-2 text-xs font-bold rounded-full text-primary-500 bg-primary-200">
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
              <div className="w-10 h-10 bg-white rounded-full" />
            )}
          </div>
        ) : (
          <Link
            className="flex items-center justify-center px-5 py-2 space-x-2 text-sm font-medium text-white transition border shadow-md max-w-fit rounded-xl border-primary-500 hover:bg-primary-400 bg-primary-500"
            href="/app"
          >
            <p>Sign Up </p>
          </Link>
        )} */}
      </header>
      <div className="flex w-full mt-5">
        <span className="w-1/3 h-1 shadow-lg bg-primary-500"></span>
        <span className="w-1/3 h-1 shadow-lg bg-tertiary-500"></span>
        <span className="w-1/3 h-1 shadow-lg bg-secondary-500"></span>
      </div>
    </>
  );
}
