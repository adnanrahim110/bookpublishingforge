import { Appshell } from "@/components/layout";
import { Lato } from "next/font/google";
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

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Book Publishing Forge - Your Partner in Publishing Success",
  description:
    "Comprehensive book publishing services including ghostwriting, editing, design, marketing, and distribution. Let us help you bring your book to life and reach your audience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${qurova.variable} antialiased`}>
        <Appshell>
          {children}
        </Appshell>
      </body>
    </html>
  );
}
