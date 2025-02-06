"use client";
import { useRouter } from "next/navigation";

import { getUrl, IDENTIFIERS } from "@src/app/utils";
import { BackButtonHeading } from "@src/app/components/BackButtonHeading";
import { postNewUser } from "@src/app/services/httpClient";

export default function AddUserClient() {
  const router = useRouter();

  const submitFunction = async () => {
    await postNewUser({ name: "Joan", email: "joan@joan.com" });
    router.push(getUrl(IDENTIFIERS.USERS));
  };

  return (
    <div>
      <BackButtonHeading>
        Simulate add new user, to check cache revalidation
      </BackButtonHeading>

      <button onClick={submitFunction} type="submit">
        {"Submit"}
      </button>
    </div>
  );
}
