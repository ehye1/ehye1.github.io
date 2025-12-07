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
      <body className="flex flex-col items-center my-10 w-full min-h-screen bg-linear-to-b from-white to-sky ">
        <div className="text-6xl font-sunshiney text-lemon text-stroke">Portfolio</div>
        {children}
      </body>
    </html>
  );
}
