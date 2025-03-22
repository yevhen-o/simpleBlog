"use client";

import { Button } from "@src/components/Button";
import { DropDown } from "@src/components/DropDown";
import { useEffect, useState } from "react";
import { AuthModal } from "./AuthModal";
import { useAuthStore } from "@src/store/authStore";

export const UserMenu = () => {
  const [hasAuthModalShown, setHasAuthModalShown] = useState(false);
  const user = useAuthStore((store) => store.user);
  const logOut = useAuthStore((store) => store.logOut);
  const options = [
    {
      label: "Log out",
      value: "logout",
      onClick: logOut,
    },
  ];
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => unsubscribe();
  }, [initAuth]);
  return (
    <div style={{ marginLeft: "auto", alignSelf: "center" }}>
      {user ? (
        <DropDown options={options} className="user-menu">
          {user.email}
        </DropDown>
      ) : (
        <div>
          <Button onClick={() => setHasAuthModalShown(true)}>Login</Button>
        </div>
      )}
      {hasAuthModalShown && (
        <AuthModal onClose={() => setHasAuthModalShown(false)} />
      )}
    </div>
  );
};
