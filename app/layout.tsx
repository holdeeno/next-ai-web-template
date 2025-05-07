/**
 * @file layout.tsx
 * @description This is the root layout component for the Next.js application.
 * It defines the main HTML structure, including the <html> and <body> tags.
 * It also incorporates global styles and metadata.
 *
 * AI Agent Instructions:
 * - This file is critical for the overall page structure.
 * - When adding global providers (like ThemeProvider, AuthProvider), wrap the `children` with them here.
 * - Metadata defined here can be overridden by child pages/layouts.
 * - Ensure any changes to global fonts or essential head elements are made here.
 * - Consult `PROJECT_ARCHITECTURE.md` for more details on how layouts work in Next.js App Router.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// AI Agent Instructions: The Inter font is initialized here. If you need to change the primary font,
// you would typically modify it here and ensure it's correctly loaded.
const inter = Inter({ subsets: ["latin"] });

// AI Agent Instructions: This is the global metadata for the application.
// It's a good practice to define sensible defaults here.
// Specific pages can override these values.
export const metadata: Metadata = {
  title: "Marketing Website Template",
  description: "A flexible template for creating marketing landing pages, built with Next.js and Tailwind CSS, designed for AI collaboration.",
};

/**
 * RootLayout component.
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be rendered within this layout.
 * @returns {JSX.Element} The rendered root layout.
 *
 * AI Agent Instructions:
 * - The `children` prop represents the content of the current page or nested layout.
 * - Do not remove the `<html>` or `<body>` tags.
 * - The `inter.className` applies the Inter font to the entire body.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* AI Agent Instructions: The <body> tag is where all visible page content will be rendered. */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}

