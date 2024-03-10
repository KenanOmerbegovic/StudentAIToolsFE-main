"use client";

import { getAllUsers } from "@/apiHandlers/user";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import { useJwtStore } from "@/stores/useJWTStore";
import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500"></main>
  );
}
