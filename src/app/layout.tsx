import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const myFont = localFont({
  src: "../assets/fonts/RinjaniBold.ttf",
});

export const metadata: Metadata = {
  title: "Farhan Alfathra",
  description: "Farhan Alfathra personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#424242" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          myFont.className,
          "bg-[#EEEEEE] overflow-hidden relative h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
