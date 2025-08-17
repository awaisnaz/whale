import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Whale - Crypto Trading Platform",
  description: "Trade anything anywhere with Whale.io",
};

export default function RootLayout({ children }) {
return (
    <html lang="en">
      <body
        className="antialiased bg-[#0f1419] text-white min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
