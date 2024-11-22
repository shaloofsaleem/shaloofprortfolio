
import next from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
// Components
import Header from "@/components/Header";
import PageTranisition from "@/components/PageTranisition";
import StairTransition from "@/components/StairTransition";


// Apply the JetBrains_Mono font to the body by using a variable
// Import JetBrains Mono
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700','800'],
  variable: '--font-jetbrains-mono', // Add CSS variable
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}> {/* This applies the custom font */}
        <Header />
        <PageTranisition>
          <StairTransition />
          {children}
        </PageTranisition>
      </body>
    </html>
  );
}