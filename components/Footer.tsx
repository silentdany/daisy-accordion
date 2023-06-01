import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex w-full mt-5">
        <span className="w-1/3 h-1 shadow-lg bg-primary-500"></span>
        <span className="w-1/3 h-1 shadow-lg bg-tertiary-500"></span>
        <span className="w-1/3 h-1 shadow-lg bg-secondary-500"></span>
      </div>
      <footer className="footer px-10 py-4">
        <div className="items-center grid-flow-col">
          <Image
            src="/logo_black.png"
            alt="depikt logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p>depikt &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://twitter.com/majorbaguette"
              target="_blank"
              className="group"
              aria-label="@MajorBaguette on Twitter"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 duration-100 ease-in fill-gray-500 group-hover:fill-primary-500"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
