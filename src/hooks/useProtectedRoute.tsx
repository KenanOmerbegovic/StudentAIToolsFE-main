import { useRouter } from "next/navigation";
import { useJwt } from "react-jwt";
import { useJwtStore } from "@/stores/useJWTStore";
import { useEffect, useState } from "react";

export const useProtectedRoute = () => {
  const router = useRouter();
  const { jwt } = useJwtStore();
  const token = useJwt(jwt) || null;

  useEffect(() => {
    if (token.decodedToken && !token.isExpired) {
      router.push("/dashboard");
      return;
    } else router.push("/login");
  }, [token.decodedToken]);

  return { token };
};

export default useProtectedRoute;
