"use client";

import type { Metadata } from "next";
import Sidebar from "./(components)/Sidebar";
import Topbar from "./(components)/Topbar";
import "@/styles/globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

  const pathname = usePathname();

  const pathArray = pathname.split("/").filter((item) => item !== "");

  return (
    <html lang="en">
      <body className="bg-primaryTint1 w-full h-full flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col w-full lg:w-[calc(100%-350px)] lg:ml-[350px]">
          <Topbar routeItems={pathArray} toggleSidebar={toggleSidebar} />
          <div className="p-7">{children}</div>
        </div>
      </body>
    </html>
  );
}
