import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

type CTAButtonProps = {
  title: string;
  external?: boolean;
  action?: () => void;
};

export const CustomButton = ({ title, external, action }: CTAButtonProps) => {
  return (
    <Link
      href={action ? "#" : "/"}
      onClick={action}
      className="self-center animate-border w-max inline-block mb-4 hover:shadow-xl hover:translate-x-2 rounded-full bg-white bg-gradient-to-r shadow-sm duration-100 from-primary-500 via-secondary-500 to-tertiary-500 bg-[length:400%_400%] p-1"
    >
      <span className="flex items-center justify-center px-4 py-2 text-xl font-medium rounded-full lg:px-6 lg:py-3 md:text-2xl bg-primary-50 text-neutral-900">
        {/* Boost your{" "}
                  <span className="font-bold text-primary-500">product</span>
                  ivity */}
        {title}{" "}
        {external && (
          <ArrowRightIcon className="inline-block w-6 h-6 ml-1 text-neutral-900" />
        )}
      </span>
    </Link>
  );
};
