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
      <body className="flex flex-col items-center w-full min-h-screen bg-gradient-sky">
        <div className="text-[52px] font-sunshiney text-lemon text-stroke pt-7">Portfolio</div>
        {children}
      </body>
    </html>
  );
}
