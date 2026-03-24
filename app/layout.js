import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../components/context/LangContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CMC Habitat",
  description: "CMC Habitat – Votre partenaire en aménagement intérieur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
