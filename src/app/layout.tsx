import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_layout/header";
import { Footer } from "./_layout/footer";
import { Main } from "./_layout/main";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { template: `%s | ${SITE_NAME}`, default: SITE_NAME },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="mx-auto flex min-h-screen w-full flex-col bg-slate-900 p-4 text-sm tracking-wider text-white/[.8] sm:max-w-[732px] sm:text-lg">
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </body>
    </html>
  );
}
