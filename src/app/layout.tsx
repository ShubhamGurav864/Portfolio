import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Gurav | Flutter Developer Portfolio",
  description: "Portfolio of Shubham Gurav, a specialized Flutter Developer with expertise in Riverpod, GetX, Firebase, and Unity AR.",
  keywords: ["Flutter Developer", "Mobile App Developer", "Dart", "Firebase", "Shubham Gurav", "React Native", "iOS", "Android"],
  authors: [{ name: "Shubham Gurav" }],
  openGraph: {
    title: "Shubham Gurav | Premium Flutter Developer",
    description: "Discover the professional portfolio of Shubham Gurav, showcasing scalable cross-platform mobile apps.",
    url: "https://shubhamgurav.dev",
    siteName: "Shubham Gurav Portfolio",
    images: [
      {
        url: "https://shubhamgurav.dev/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
