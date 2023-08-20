import { Profile } from "@/models/profile";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  profile: Profile;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: Profile) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
      },
      isAuth: false,
      setToken: (token: string) =>
        set((_) => ({
          token,
          isAuth: true,
        })),
      setProfile: (profile: any) =>
        set((_) => ({
          profile,
        })),
      logout: () =>
        // set((state))
        set((_) => ({
          token: "",
          isAuth: false,
          profile: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
          },
        })),
    }),
    { name: "auth" }
  )
);
