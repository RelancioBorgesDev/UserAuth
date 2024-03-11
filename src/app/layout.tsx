import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OAuth Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={lexend.className}>
      <body className={"bg-gradient-to-b from-zinc-950 to-white h-screen"}>
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
}
