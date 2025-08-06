import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import OverHeader from "@/components/over-header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deber Ventilation - Professionelle ventilationsløsninger siden 1976",
  description: "Deber Ventilation leverer innovative ventilationsløsninger til både bolig og industri. Med over 45 års erfaring sikrer vi optimalt indeklima og energieffektivitet.",
  keywords: ["ventilation", "boligventilation", "industriventilation", "energioptimering", "ventilationsanlæg", "affugtning", "befugtning", "Fredericia"],
  authors: [{ name: "Deber Ventilation ApS" }],
  openGraph: {
    title: "Deber Ventilation - Professionelle ventilationsløsninger",
    description: "Innovative ventilationsløsninger til både bolig og industri siden 1976",
    url: "https://www.deberventilation.dk",
    siteName: "Deber Ventilation",
    type: "website",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deber Ventilation - Professionelle ventilationsløsninger",
    description: "Innovative ventilationsløsninger til både bolig og industri siden 1976",
  },
  other: {
    "dc.creator": "Deber Ventilation ApS",
    "dc.subject": "Ventilation, HVAC, Indoor Climate, Energy Optimization",
    "dc.language": "da",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <OverHeader />
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ErrorBoundary>
        <Toaster />
      </body>
    </html>
  );
}
