import { ListWrapper } from "@src/components/ListWrapper";
import { UserInterface } from "@src/types/UserInterface";
import { getUrl, IDENTIFIERS, Link } from "../../utils";
import { getUsers } from "@src/services/httpClient";

export default async function blogListServer() {
  const users = await getUsers();

  return (
    <>
      <h1>List of users</h1>
      <Link href={getUrl(IDENTIFIERS.USER_ADD)}>Add new user</Link>
      <br />
      <br />
      <ListWrapper>
        {users.map((user: UserInterface) => (
          <Link
            href={getUrl(IDENTIFIERS.USER_VIEW, { userId: user.id })}
            key={user.id}
          >
            {JSON.stringify(user)}
          </Link>
        ))}
      </ListWrapper>
    </>
  );
}
