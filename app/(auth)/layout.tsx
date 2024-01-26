"use client"

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import "../../styles/globals.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const metadata: Metadata = {
    title: "Badumts",
    description: "Vamos fazer barulho"
  }

  return (
    <ClerkProvider>
      <html lang='pt-br'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}