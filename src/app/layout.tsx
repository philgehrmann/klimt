import type { Metadata } from "next";
import { Roboto, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const dmserif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Werbetechnik Klimt - Fachbetrieb für Werbetechnik",
  description:
    "Wir bieten Ihnen eine professionelle Beratung, die Erstellung von Entwürfen, die Herstellung, sowie Montage.  Zu unseren Leistungen zählen die Außenwerbung, Flyer, Visitenkarten, Digitaldrucke, Banner, Schaufensterbeschriftungen, Fahrzeugbeschriftung, Promotionaktionen und Webseiten.Ein besonderer Service besteht in den flexiblen Geschäfts- und Produktionszeiten, sowie im Express- Service. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
