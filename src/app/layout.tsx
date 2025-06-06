import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutritionist Site - Your Path to Health",
  description: "Expert nutritionist offering personalized diet plans, wellness coaching, and health advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50 text-slate-800`}> 
        <Navbar />
        <CheckoutForm uiMode="hosted"/>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
