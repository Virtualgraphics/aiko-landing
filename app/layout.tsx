import type { Metadata } from "next";
import { Quantico, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const quantico = Quantico({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico'
});

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "[AI-KO Companion]",
  description: "Your AI Companion with Heart and Soul - More than a chat, an autonomous companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={`${quantico.variable} ${roboto.variable} font-sans`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="aiko-theme">
        {children}</ThemeProvider>
      </body>
    </html>
  );
}
