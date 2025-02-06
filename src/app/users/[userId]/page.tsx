import { BackButtonHeading } from "@src/app/components/BackButtonHeading";
import { UserInterface } from "@src/app/types/UserInterface";

export default async function blogServer({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;
  const response = await fetch(`http://localhost:3000/api/users/${userId}`);
  const user = (await response.json()) as UserInterface;

  return (
    <>
      <BackButtonHeading>
        View user, to check cache revalidation
      </BackButtonHeading>
      <code>{JSON.stringify(user, null, 2)}</code>;
    </>
  );
}
