import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function AuthStatus() {
  const session = await getServerSession();

  if (session) {
    return (
      <div>
        <h1>Auth Status</h1>
        <h2>Signed in as: {session.user?.name}</h2>
      </div>
    );
  }
}
