"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import { AddFile } from "@/apiHandlers/pdf";

export default function Home() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken") || "some.token";
  const token = jwt === "some.token" ? null : jwtDecode(jwt);
  const [pdf, setPdf] = useState("");
  const handleImageChange = (e) => {
    setPdf(e.target.files[0]);
  };

  useEffect(() => {
    if (jwt === "some.token" || !token) {
      router.push("/login");
    }
  }, [token?.decodedToken]);

  return (
    <div className="w-full">
      <h1 className="text-white sm:text-center md:text-left font-bold mb-4 text-3xl">
        Ready to supercharge your PDF's?
      </h1>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF Only</p>
          </div>
          <input
            className="h-full w-full"
            id="dropzone-file"
            type="file"
            onChange={(e) => setPdf(e)}
            className="hidden"
          />
        </label>
      </div>
      <button
        onClick={() => AddFile(pdf)}
        className="block border-2 cursor-pointer bg-white text-black border-white outline-none border-transparent w-1/3 px-2 py-4  mt-8 mx-auto transition-all duration-200 hover:bg-gray-300 rounded-lg text-xl font-bold uppercase"
      >
        Upload the PDF
      </button>
    </div>
  );
}
