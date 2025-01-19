import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Coding Wizards School",
    default: "Coding Wizards School",
  },
  description:
    "Coding Wizards School – Learn to Code, Cast Your Spells in Tech!",
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
      </body>
    </html>
  );
}
