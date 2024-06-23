import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Theme } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

import { Sidebar } from "@/components/ui/navigation/sidebar"
import { siteConfig } from "./siteConfig"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: siteConfig.name,
  keywords: [],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Tremor OSS Dashboard",
    creator: "@tremorlabs",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
    <head>
      <script src="http://localhost:8097" defer={true}></script>
      <title>Dashboard</title>
    </head>
    <body
      className={`${inter.className} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700`}
      // className={`${inter.className} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
      // suppressHydrationWarning
    >
    <div className="mx-auto max-w-screen-2xl">
      <ThemeProvider enableSystem={false} >
        <Sidebar />
        <Theme accentColor="iris" radius="large">
          <main className="m-8 lg:pl-72">{children}</main>
        </Theme>
      </ThemeProvider>
    </div>
    </body>
    </html>
  )
}
