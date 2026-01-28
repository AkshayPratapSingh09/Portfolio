import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  metadataBase: new URL("https://akshay09.pages.dev"),
  title: "Akshay Pratap Singh | GenAI & Full Stack Developer",
  description:
    "Portfolio of Akshay Pratap Singh, a GenAI Developer and Full Stack Developer. Specializing in AI Integrated Apps, Web Development, and Next.js.",
  keywords:
    "Akshay Pratap Singh, GenAI Developer, Full Stack Developer, React, Next.js, Portfolio, Web Development, AI Integration",
  authors: [{ name: "Akshay Pratap Singh" }],
  creator: "Akshay Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshay09.pages.dev",
    title: "Akshay Pratap Singh | GenAI & Full Stack Developer",
    description:
      "Explore the portfolio of a GenAI and Full Stack Developer building robust web solutions and AI integrated applications.",
    siteName: "Akshay Pratap Singh Portfolio",
    images: [
      {
        url: "/hero/developer.png",
        width: 1200,
        height: 630,
        alt: "Akshay Pratap Singh - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Pratap Singh | GenAI & Full Stack Developer",
    description:
      "GenAI Developer and Full Stack Developer. Building the future with AI and Web Technologies.",
    images: ["/hero/developer.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className + " " + outfit.variable}>
        <script src="./particles.min.js"></script>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
