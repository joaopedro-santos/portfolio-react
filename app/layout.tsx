import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Pedro — Front-end Engineer",
  description: "Portfolio de João Pedro, engenheiro de frontend focado em produtos digitais de alto padrão.",
  metadataBase: new URL("https://your-portfolio.vercel.app"),
  openGraph: {
    title: "João Pedro — Front-end Engineer",
    description: "Portfolio de João Pedro, engenheiro de frontend focado em produtos digitais de alto padrão.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        />
      </head>
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
