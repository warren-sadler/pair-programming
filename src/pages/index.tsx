import { UserContext } from "@/modules/users/components/UserProvider";
import { useContext } from "react";

export default function IndexPage() {
  const { users } = useContext(UserContext);
  return (
    <main>
      <h2>Hello World</h2>
      <>
        {users.length ? (
          <pre>{JSON.stringify(users)}</pre>
        ) : (
          "Nothing to see here"
        )}
      </>
    </main>
  );
}
