"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken") || "some.token";
  const token = jwt === "some.token" ? null : jwtDecode(jwt);
  console.log(token);

  useEffect(() => {
    if (jwt === "some.token" || !token) {
      router.push("/login");
    }
  }, [token?.decodedToken]);

  return <h1 className="text-white">Ado je baba</h1>;
}
