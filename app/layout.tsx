import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '500'
})

export const metadata: Metadata = {
  title: "Marica Nicholas Counseling",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}   m-8 bg-slate-900 flex flex-col`}
      >
        <Header/>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
