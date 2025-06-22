import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/theme.css";
import "../app/globals.css";
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
  description: "Portfolio created with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: '100vh',
          background: 'var(--color-terminal-bg) url(/forest-bg.jpg) center center/cover no-repeat fixed',
          color: 'var(--color-terminal-text)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <div style={{ flex: 1, width: '100%' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
