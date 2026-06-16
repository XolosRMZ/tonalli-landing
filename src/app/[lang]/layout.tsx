import "../globals.css";
import { Inter, Cinzel } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Tonalli Wallet",
  description: "Self-custody for eCash. DEX + on-chain messages.",
  openGraph: {
    title: "Tonalli Wallet",
    description: "Autocustodia real para eCash. DEX + mensajes on-chain.",
    url: "https://app.tonalli.cash",
    siteName: "Tonalli Wallet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tonalli Wallet Cover",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonalli Wallet",
    description: "Self-custody for eCash. DEX + on-chain messages.",
    images: ["/og-image.png"],
  },
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
