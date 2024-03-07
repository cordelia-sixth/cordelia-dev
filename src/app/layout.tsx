import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_layout/header";
import { Footer } from "./_layout/footer";
import { Container } from "./_layout/Container";

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
      <body className="mx-auto grid grid-cols-1 gap-2 bg-slate-900 p-6 tracking-wider text-white/[.9] max-sm:w-full max-sm:text-sm sm:max-w-2xl sm:text-base">
        <Header></Header>
        <Container>{children}</Container>
        <Footer></Footer>
      </body>
    </html>
  );
}
