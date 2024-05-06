import NextAuth from "next-auth";

declare module "next-auth" {
  export interface Session {
    accessToken: string;
    provider: string;
    user: {
      id: string;
      email: string;
      name: string;
      userName: string;
      image: string;
    };
  }
}
