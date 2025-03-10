"use client"

import { useState, useEffect } from "react"

const images = [
 
  "/MacBook Air - 20.png",
  "/MacBook Air - 21.png",
  "/MacBook Air - 22.png",
  "/MacBook Air - 23.png",
  "/MacBook Air - 24.png",
  "/MacBook Air - 25.png",
  "/MacBook Air - 26.png",
  "/MacBook Air - 27.png",
  "/MacBook Air - 28.png",
  "/MacBook Air - 29.png",
  "/MacBook Air - 30.png",
  "/MacBook Air - 31.png",
  "/MacBook Air - 32.png",
  "/MacBook Air - 33.png",
] // Replace with your actual image paths

function SplashScreen({ onComplete }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < images.length - 1) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1)
      }, 300) // Change every 300ms

      return () => clearInterval(interval)
    } else {
      setTimeout(() => {
        onComplete() // Hide splash after last image
      }, 3000)
    }
  }, [index])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src={images[index]}
        alt="Splash Screen"
        className="w-full h-full object-cover transition-opacity duration-300"
      />
    </div>
  )
}

export default SplashScreen
