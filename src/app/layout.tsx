import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_layout/header";
import { Footer } from "./_layout/footer";
import { Main } from "./_layout/main";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import { Container } from "./_layout/Container";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: { template: `%s | ${SITE_NAME}`, default: SITE_NAME },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og.png",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-slate-900">
        <Container>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
