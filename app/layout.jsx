import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  metadataBase: new URL("https://akshay09.pages.dev"),
  title: {
    default: "Akshay Pratap Singh | GenAI & Full Stack Developer",
    template: "%s | Akshay Pratap Singh",
  },
  description:
    "Portfolio of Akshay Pratap Singh — GenAI & Full Stack Developer. Crafting intelligent AI-integrated applications and high-performance web systems with Next.js, React, and Python.",
  keywords: [
    "Akshay Pratap Singh",
    "GenAI Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "AI Integrated Apps",
    "Web Development",
    "FastAPI",
    "Python",
    "Software Engineer",
    "Wipro",
    "NCR India",
  ],
  authors: [{ name: "Akshay Pratap Singh", url: "https://akshay09.pages.dev" }],
  creator: "Akshay Pratap Singh",
  publisher: "Akshay Pratap Singh",
  alternates: {
    canonical: "https://akshay09.pages.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshay09.pages.dev",
    siteName: "Akshay Pratap Singh Portfolio",
    title: "Akshay Pratap Singh | GenAI & Full Stack Developer",
    description:
      "Explore the portfolio of Akshay Pratap Singh — GenAI & Full Stack Developer building robust web systems and AI-integrated applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshay Pratap Singh — GenAI & Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Pratap Singh | GenAI & Full Stack Developer",
    description:
      "GenAI Developer and Full Stack Developer building modern web solutions and AI-integrated applications.",
    site: "@AkshayPSingh09",
    creator: "@AkshayPSingh09",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshay Pratap Singh — GenAI & Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://akshay09.pages.dev/#person",
      name: "Akshay Pratap Singh",
      url: "https://akshay09.pages.dev",
      image: "https://akshay09.pages.dev/og-image.png",
      jobTitle: "GenAI & Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Wipro",
      },
      sameAs: [
        "https://github.com/AkshayPratapSingh09",
        "https://twitter.com/AkshayPSingh09",
        "https://www.linkedin.com/in/akshaypratap09",
        "https://www.instagram.com/ap_singh09",
      ],
      knowsAbout: [
        "GenAI",
        "Full Stack Development",
        "Next.js",
        "React",
        "Python",
        "TypeScript",
        "Artificial Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://akshay09.pages.dev/#website",
      url: "https://akshay09.pages.dev",
      name: "Akshay Pratap Singh Portfolio",
      description:
        "Portfolio of Akshay Pratap Singh — GenAI & Full Stack Developer.",
      publisher: {
        "@id": "https://akshay09.pages.dev/#person",
      },
    },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className + " " + outfit.variable}>
        <script src="./particles.min.js"></script>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Preloader />
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
