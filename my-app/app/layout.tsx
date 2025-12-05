import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyewon Portfolio",
  description: "Portfolio website of Hyewon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex justify-center my-10"> {children}</body>
    </html>
  );
}
