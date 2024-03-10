"use client";

import { useEffect, useState } from "react";
import "@/styles/globals.css";
import FileUpload from "@/components/shared/FileUpload";
import { uploadUserImage } from "@/apiHandlers/image";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const [userImage, setUserImage] = useState({});
  const [uploadErrors, setUploadErrors] = useState();
  const jwt = localStorage.getItem("jwtToken");
  const token = jwtDecode(jwt as string);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500">
      <FileUpload setUserImage={setUserImage} />
      <button
        onClick={() => {
          uploadUserImage(token, userImage, setUploadErrors);
        }}
      >
        Upload File
      </button>
    </main>
  );
}
