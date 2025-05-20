"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"

interface ConfettiComponentProps {
  onComplete: () => void
}

export function ConfettiComponent({ onComplete }: ConfettiComponentProps) {
  useEffect(() => {
    const end = Date.now() + 3000

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
      })

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      } else {
        onComplete()
      }
    }

    frame()

    return () => {
      // Cleanup if needed
    }
  }, [onComplete])

  return null
}
