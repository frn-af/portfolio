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
      <body
        className={cn(
          myFont.className,
          "bg-[#EEEEEE] overflow-hidden relative"
        )}
      >
        {children}
      </body>
    </html>
  );
}
