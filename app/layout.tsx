import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Workshop 2024 - Build Your First AI App in 2 Days",
  description: "Master modern AI development with hands-on coding. Build, deploy, and launch your AI MVP using React, Next.js, and AI APIs. HRDF claimable workshop.",
  keywords: "AI workshop, React, Next.js, AI development, HRDF claimable, AI training, programming workshop",
  authors: [{ name: "Vibe Coding" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
