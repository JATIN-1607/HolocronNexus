import type { Metadata } from "next";
import "./globals.css";
import { TamboWrapper } from "./components/TamboWrapper";

export const metadata: Metadata = {
    title: "Holocron Nexus | Sith Terminal Access",
    description: "Secure access terminal for the Sith Holocron knowledge repository",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-jetbrains">
                <TamboWrapper>
                    {children}
                </TamboWrapper>
            </body>
        </html>
    );
}
