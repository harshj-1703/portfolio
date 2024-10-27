import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Harsh Jolapara",
  authors: [{ name: "Harsh Jolapara" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body>
        <ThemeProvider>
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
