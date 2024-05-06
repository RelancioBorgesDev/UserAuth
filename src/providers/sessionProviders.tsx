"use client";
import { AnyNsRecord } from "dns";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionProviderProps {
  children: ReactNode;
  session: any;
}

export default function NextAuthSessionProvider({
  children,
  session,
}: NextAuthSessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
