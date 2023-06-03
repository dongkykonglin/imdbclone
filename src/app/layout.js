import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description: "Movie Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header */}
          <Header />
          {}
          {}
          {children}
        </Providers>
      </body>
    </html>
  );
}
