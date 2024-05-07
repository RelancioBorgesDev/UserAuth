import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProviders";
import { getSession } from "@/utils/getUserInfo";
import { GithubDataContextProvider } from "@/contexts/GithubDataContext";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Auth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="pt-br" className={lexend.className}>
      <body className={"bg-zinc-950 h-screen"}>
        <main className="h-screen">
          <NextAuthSessionProvider session={session}>
            <GithubDataContextProvider>{children}</GithubDataContextProvider>
          </NextAuthSessionProvider>
        </main>
      </body>
    </html>
  );
}
