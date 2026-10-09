import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ChemPractical — KV Class 12 Chemistry Practical Record",
    template: "%s · ChemPractical",
  },
  description:
    "A polished digital chemistry practical record covering volumetric analysis, functional group detection, and inorganic salt analysis — based on the Kendriya Vidyalaya Class 12 CBSE syllabus.",
  keywords: [
    "Chemistry Practical",
    "Class 12 Chemistry",
    "KV Practical",
    "CBSE Chemistry",
    "Titration",
    "Salt Analysis",
    "Functional Group",
    "KMnO4",
    "Mohr Salt",
  ],
  authors: [{ name: "ChemPractical" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ChemPractical — KV Class 12 Chemistry Practical Record",
    description:
      "A polished, multi-page digital chemistry practical record with volumetric analysis, functional group detection, and salt analysis.",
    siteName: "ChemPractical",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
