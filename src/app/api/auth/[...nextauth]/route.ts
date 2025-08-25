import { getUniqueUser } from "@/db/actions/users";
import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        const user = await getUniqueUser(credentials.email);
        if (!user) {
          console.log(user);
          throw new Error("Wrong credentials");
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user[0].password
        );
        if (!passwordMatch) {
          throw new Error("Wrong credentials");
        }
        return {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
