import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_layout/header";
import { Footer } from "./_layout/footer";
import { Main } from "./_layout/main";

export const metadata: Metadata = {
  title: "cordelia.dev",
  description: "Cordelia's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="mx-auto flex min-h-screen w-full flex-col gap-6 bg-slate-900 p-4 text-sm tracking-wider text-white/[.8] sm:max-w-[732px] sm:text-lg">
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </body>
    </html>
  );
}
