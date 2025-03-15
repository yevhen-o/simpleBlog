"use client";

import { Button } from "@src/components/Button";
import { DropDown } from "@src/components/DropDown";
import { useAuth } from "@src/hooks/useAuth";
import { logout } from "@src/services/firebase/auth";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

export const UserMenu = () => {
  const [hasAuthModalShown, setHasAuthModalShown] = useState(false);
  const { user } = useAuth();
  const options = [
    {
      label: "Log out",
      value: "logout",
      onClick: logout,
    },
  ];
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
