import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Cheval.BTL — Agencia y Productora Integral",
  description:
    "Creamos y ejecutamos experiencias de alto impacto. Eventos, activaciones y promociones. Desarrollamos historias que dejan marca.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      
      <meta name="apple-mobile-web-app-title" content="ChevalBTL" />
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
