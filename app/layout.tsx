import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Vijay Bansal",
  description: "Portfolio of Vijay Bansal",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-950`}
      >
        <div className="relative mx-auto h-full min-h-screen w-full max-w-4xl bg-white px-4 pt-20 md:px-8 md:pt-20 md:pb-0 dark:bg-neutral-900">
          <div className="absolute top-0 left-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed md:w-8 dark:border-x-(--pattern-fg-dark) dark:bg-[repeating-linear-gradient(315deg,var(--pattern-fg-dark)_0,var(--pattern-fg-dark)_1px,transparent_0,transparent_50%)]"></div>
          <NavigationBar />
          {children}
          <Footer />
          <div className="absolute top-0 right-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed md:w-8 dark:border-x-(--pattern-fg-dark) dark:bg-[repeating-linear-gradient(315deg,var(--pattern-fg-dark)_0,var(--pattern-fg-dark)_1px,transparent_0,transparent_50%)]"></div>
        </div>
      </body>
    </html>
  );
}
