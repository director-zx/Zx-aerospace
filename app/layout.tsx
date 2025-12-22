import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/app/layouts/LenisProvider";
import { Toaster } from "react-hot-toast";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZX AeroSpace | Indigenous Carbon Fibre Drone Propulsion Systems",
  description:
    "ZX AeroSpace designs and manufactures indigenous carbon fibre reinforced drone propulsion systems for agricultural and industrial UAVs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Toaster position="top-center" />
        <LenisProvider>
          <div className={dmSans.className}>{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
