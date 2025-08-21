import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "TODO App",
    description: "Created by Hanna S.",
};

type PropType = { children: React.ReactNode };
export default function RootLayout({children}: Readonly<PropType>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-background text-foreground antialiased h-full w-full" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <Header />
            <div className="flex justify-between min-h-[85vh]">
                <nav className="border-4 border-amber-950 w-[15vw]"></nav>
                <main className="border-4 border-amber-400 w-[80vw]">{children}</main>
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
