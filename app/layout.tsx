import "./globals.css";
import { Public_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Elliot's Chatbot Experiments</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Talk to a Chatbot all about Elliot Winard.  Ooooh!"
        />
        <meta property="og:title" content="Elliot's Chatbot Experiments" />
        <meta
          property="og:description"
          content="Talk to a Chatbot all about Elliot Winard.  Ooooh!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elliot's Chatbot Experiments" />
        <meta
          name="twitter:description"
          content="Chat about Elliot Winard!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
