"use client";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";

export default function Login() {
  const router = useRouter();
  const jwt = localStorage.getItem("jwtToken");
  const token = useJwt(jwt as string);
  console.log(token);

  useEffect(() => {
    if (token?.decodedToken && !token?.isExpired) {
      router.push("/dashboard");
    }
  }, [token?.decodedToken, router]);

  const {
    handleInputChange,
    handleLogin,
    loginErrors,
    loginFormData,
    setLoginErrors,
  } = useLogin();

  return (
    <div className="bg-primaryColor p-10 lg:p-16 grid md:grid-cols-2 gap-10 min-h-[100vh] box-border">
      <div className="flex flex-col gap-10 md:gap-20 w-full md:p-5 lg:p-10 box-border md:justify-center order-2 md:order-1">
        <span className="text-white text-4xl font-bold">Welcome Back</span>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                name="email"
                type="text"
                value={loginFormData.email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                name="password"
                type="password"
                value={loginFormData.password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleLogin(router)}
              className="button primary w-full"
            >
              Log In
            </button>
            <span className="text-text">
              Don't have an account?{" "}
              <Link className="link" href="/register">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primaryShade3 flex rounded-3xl bg-cover bg-center bg-[url('/auth/login-bg.png')] order-1 md:order-2 min-h-[250px] h-full md:h-auto"></div>
    </div>
  );
}
