import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Coding Wizards School",
    default: "Coding Wizards School | לימוד תכנות לילדים ונוער",
  },
  description: "לימוד תכנות לילדים ונוער. שיעורים פרטיים וקבוצתיים",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <SpeedInsights />
        <FireFliesBackground />
      </body>
    </html>
  );
}
