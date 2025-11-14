
import "./globals.css";
import HeaderC from "./ui/header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
       
        <title>Benjamin-Poloni-Portfolio</title>
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
