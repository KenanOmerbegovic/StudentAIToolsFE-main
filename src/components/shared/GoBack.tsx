import Link from "next/link";
import React from "react";

const GoBack = () => {
  return (
    <Link href="/dashboard/notes" className="flex gap-2 items-center mb-4">
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.89062 13.3564L0.890625 7.35645L6.89062 1.35645"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="text-sm text-white">Go Back</span>
    </Link>
  );
};

export default GoBack;
