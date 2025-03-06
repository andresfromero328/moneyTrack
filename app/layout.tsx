import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnel = Funnel_Sans({
  variable: "--font-funnel_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moneytrack",
  description:
    "Transactional data app that helps you keep up with your spending, budgets, and subscriptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${funnel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
