import { Poppins, Orbitron } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

export const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Clash = localFont({
  src: "../public/font/ClashDisplayR.woff2",
  variable: "--clash-display-semibold",
});

// export const metadata = {
//   title: 'Saloon Sync',
//   description: 'A Nexteons ERP for saloons',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}  style={{
          backgroundImage: 'url("/back.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
        }}>
    
        {children}</body>
    </html>
  )
}
