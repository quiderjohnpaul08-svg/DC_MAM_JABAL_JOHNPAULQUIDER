
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Paul Quider | Personal Site",
  description: "A personal portfolio website built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-950/90">
            <nav
              aria-label="Main navigation"
              className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8"
            >
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-blue-400"
              >
                JPQ<span className="text-blue-400">.</span>
              </Link>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300 sm:gap-6">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  Projects
                </Link>
              </div>
            </nav>
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
