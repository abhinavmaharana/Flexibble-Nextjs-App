import Navbar from "@/components/shared/Header/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
    title: "Flexibble",
    description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
  