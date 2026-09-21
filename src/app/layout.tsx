import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ivica Stojanoski — Senior Android Engineer",
    template: "%s · Ivica Stojanoski",
  },
  description:
    "Senior Android engineer specializing in Kotlin and Jetpack Compose. Featured work: Widex companion apps, Premier League, and MovieApp.",
  openGraph: {
    title: "Ivica Stojanoski — Senior Android Engineer",
    description:
      "Kotlin · Jetpack Compose · Play Store products including Widex companions and Premier League.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
