import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

  variable: "--font-poppins", // Optional: Allows you to define a custom CSS variable
});

export const metadata: Metadata = {
  title: "Jonathan Trujillo",
  description: "Jonathan Trujillo's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  antialiased bg-black`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
