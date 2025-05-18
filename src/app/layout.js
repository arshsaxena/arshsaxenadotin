import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this is imported
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientBackground } from "react-gradient-animation";
import AnimatedBackground from "@/components/AnimateBackground";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
    icons: {
        icon: '/arsh-favicon.png',
        shortcut: '/arsh-favicon.png',
        apple: '/arsh-square.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* <body className={`${inter.variable} font-sans antialiased`}> */}
            <body className={`font-sans antialiased`}>
                <AnimatedBackground />
                <div className="container max-w-[980px] m-auto">
                    {/* Theme Toggle Component */}
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
