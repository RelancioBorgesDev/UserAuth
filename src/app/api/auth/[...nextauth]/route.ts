import { api } from "@/libs/axios/axios";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import SignUp from "../../../auth/(auth)/sign-up/page";

import { comparePasswords } from "@/utils/bcrypt";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { getUserByEmail } from "@/utils/userValidation";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          const user: RegisterFormData | null = await getUserByEmail(
            credentials?.email
          );
          if (
            user &&
            (await comparePasswords(credentials?.password, user.password))
          ) {
            return user as User;
          } else {
            return null;
          }
        } catch (error) {
          console.log("Authorization error: " + error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
