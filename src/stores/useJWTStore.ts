import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useJwtStore = create(
  persist(
    (set, get) => ({
      jwt: "noToken",
      setJWT: (jwt: string) => set({ jwt }),
    }),
    {
      name: "jwtStore",
      onRehydrateStorage: (state) => {},
    }
  )
);