"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useRegister from "@/hooks/useRegister";
import { useJwtStore } from "@/stores/useJWTStore";
import { useJwt } from "react-jwt";

export default function Register() {
  const router = useRouter();
  
  const { jwt , setJWT } = useJwtStore() as { jwt: string, setJWT: Function };
  const token = useJwt(jwt as string);

  useEffect(() => {
    if (token && !token.isExpired) router.push("/dashboard");
  }, [jwt]);
  const {
    handleInputChange,
    handleRegister,
    registerErrors,
    registerFormData,
    setRegisterErrors,
  } = useRegister();

  return (
    <div>
      <div className="bg-primaryColor p-10 lg:p-16 grid md:grid-cols-2 gap-10 min-h-[100vh] box-border">
        <div className="flex flex-col gap-10 md:gap-20 w-full md:p-5 lg:p-10 box-border md:justify-center order-2 md:order-1">
          <span className="text-white text-4xl font-bold">
            Create an account
          </span>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="repeatPassword">
                  First Name
                </label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={registerFormData.firstName}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Enter your First Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="repeatPassword">
                  Last Name
                </label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={registerFormData.lastName}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Enter your Last Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="repeatPassword">
                  Email
                </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={registerFormData.email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="repeatPassword">
                  Password
                </label>
                <input
                  className="input"
                  name="password"
                  type="password"
                  value={registerFormData.password}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="repeatPassword">
                  Repeat Password
                </label>
                <input
                  className="input"
                  name="repeatPassword"
                  type="password"
                  value={registerFormData.repeatPassword}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Repeat password"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleRegister()}
                className="button primary w-full"
              >
                Register
              </button>
              <span className="text-text">
                Already have an account?{" "}
                <Link className="link" href="/login">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-primaryShade3 flex rounded-3xl bg-cover bg-center bg-[url('/auth/register-bg.png')] order-1 md:order-2 min-h-[250px] h-full md:h-auto"></div>
      </div>
    </div>
  );
}
