// @ts-nocheck
import { signIn, signOut, useSession } from "next-auth/client";

const FordLoginNextAuth = () => {
  const [session, loading] = useSession();
  return (
    <>
      {loading && "Loading"}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export { FordLoginNextAuth };
