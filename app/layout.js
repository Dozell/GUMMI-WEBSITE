import "./globals.css";

export const metadata = {
  title: "Gummibär ($GUMMI) — The Sweetest Meme Coin on Solana",
  description:
    "A 100% fan-made nostalgia meme coin on Solana, inspired by the iconic Gummibär. Not affiliated with the original brand, creators, or rights holders.",
  keywords: "Gummibär, GUMMI, Solana, meme coin, crypto, pump.fun, nostalgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
