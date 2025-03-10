"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/ui/SplashScreen";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 5000); // Adjust timing
  }, []);

  return (
    <html lang="en">
      <body>
        {showSplash ? <SplashScreen onComplete={() => setShowSplash(false)} /> : children}
      </body>
    </html>
  );
}
