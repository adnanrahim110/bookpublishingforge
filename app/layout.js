import { Appshell } from "@/components/layout";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";


const qurova = localFont({
  src: [
    {
      path: "../public/fonts/qurova-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/qurova-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/qurova-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/qurova-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/qurova-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-qurova",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Book Publishing Forge - Your Partner in Publishing Success",
  description:
    "Comprehensive book publishing services including ghostwriting, editing, design, marketing, and distribution. Let us help you bring your book to life and reach your audience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${qurova.variable} antialiased`}>
        <Appshell>
          {children}
        </Appshell>
      </body>
    </html>
  );
}
