import * as React from "react";
import type { Metadata } from "next";
import MuiProviders from "./_components/MuiProviders";
import Shell from "./_components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A Next.js app with MUI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProviders>
          <Shell>{children}</Shell>
        </MuiProviders>
      </body>
    </html>
  );
}
