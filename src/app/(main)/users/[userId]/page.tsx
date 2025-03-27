import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { getUserById } from "@src/services/httpClient";

export default async function blogServer({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await getUserById(+userId);

  return (
    <>
      <BackButtonHeading>
        View user, to check cache revalidation
      </BackButtonHeading>
      <code>{JSON.stringify(user, null, 2)}</code>;
    </>
  );
}
