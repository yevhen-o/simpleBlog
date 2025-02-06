"use client";
import { useRouter } from "next/navigation";

import { getUrl, IDENTIFIERS } from "@src/app/utils";
import { BackButtonHeading } from "@src/app/components/BackButtonHeading";

export default function AddUserClient() {
  const router = useRouter();

  const submitFunction = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        id: "222",
        name: "Joan",
      }),
    });
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
