import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment",
  description: "Assignment",
};

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <title>Assignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="__next">{children}</body>
    </html>
  );
}
