import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/shared/components/Navbar";
import MainFooter from "@/shared/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qonsult",
  description: "An IT and software consultancy services company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col justify-between">
          <Navbar />
          {children}
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
