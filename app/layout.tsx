import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-vietnam-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
