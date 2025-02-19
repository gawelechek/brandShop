import type { Metadata } from "next";
import "./globals.css";
// import { Satoshi, IntegralCF } from "./fonts";

export const metadata: Metadata = {
  title: "Brand Shop",
  description: "Created by Sexy developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
