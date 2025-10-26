import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/theme.css";
import "../app/globals.css";
import "./layout.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Portfolio",
  description: "A portfolio created by Hamza Alaoui Mhamdi, built with Next.js and inspired by Arch Linux and Catppuccin style. Showcases projects, skills, and contact info in a modern, terminal-themed interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased main-layout`}>
        <Navbar />
        <div className="main-container">
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
