import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ivan Faerman",
  description: "Personal Website",
};

// If loading a variable font, you don't need to specify the font weight
const geist = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
