import { Header } from "@/components/welcome_page/Header";
import "./globals.css";
import { About } from "@/components/welcome_page/About";
import { Workout } from "@/components/welcome_page/Workout/Workout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>FitTrack</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black overflow-x-hidden">
        <Header />
        <About />
        <Workout />
      </body>
    </html>
  );
}
