// app/layout.tsx
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Lazy Appwrite",
  description: "Declarative SDK for Appwrite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="bg-gray-950 text-gray-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
