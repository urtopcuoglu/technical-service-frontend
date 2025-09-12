'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app_components/navbar";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
    title: "Teknik Servis Yönetimi",
    description: "Bilgisayar teknik servisi için web tabanlı bir uygulama",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const showNavbar = pathname !== '/' && pathname !== '/register';

    return (
        <html lang="tr">
        <body className={inter.className}>
        <div className="flex">
            {showNavbar && <Navbar />}
            <main className="flex-1 flex flex-col">{children}</main>
        </div>
        </body>
        </html>
    );
}
