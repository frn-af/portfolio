import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themes-provider";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const ttnorm = localFont({
  src: "../assets/fonts/TT-Norms-Regular.woff2",
  variable: "--font-body",
});

const rinjani = localFont({
  src: "../assets/fonts/RinjaniBold.ttf",
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#424242" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          inter.className,
          ttnorm.variable,
          rinjani.variable,
          "min-h-screen font-sans antialiased bg-background"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
