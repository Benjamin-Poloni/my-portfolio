
import "./globals.css";
import HeaderC from "./ui/header";

export const metadata = {
  title: "Benjamin Poloni | Portfolio",
  description: "Portfolio de Benjamin Poloni, desarrollador web especializado en Next.js, React y TypeScript.",
  openGraph: {
    title: "Benjamin Poloni | Portfolio",
    description: "Portfolio de Benjamin Poloni, desarrollador web.",
    url: "https://my-portfolio-benjamin-poloni.vercel.app",
    siteName: "Benjamin Poloni Portfolio",
    images: [
      {
        url: "https://my-portfolio-benjamin-poloni.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
       
       
      </head>
      <body
        className=" max-w-3xl mx-auto min-h-dvh [background:radial-gradient(110%_125%_at_50%_10%,#000_40%,#63e_100%)] p-3 md:p-1 "
      >
        <HeaderC/>
          
        
        {children}
      </body>
    </html>
  );
}
