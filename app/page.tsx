"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flower, Gift, Heart, Music, PartyPopper, Sparkles } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"

// Importación dinámica para evitar problemas con SSR
const ConfettiComponent = dynamic(() => import("../components/confetti").then((mod) => mod.ConfettiComponent), {
  ssr: false,
})

export default function BirthdayCard() {
  const [activeScene, setActiveScene] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const places = [
    {
      name: "Playa",
      description: "Arena blanca",
      image: "/images/beach.png",
    },
    {
      name: "Volcán",
      description: "Guatemala",
      image: "/images/volcano.png",
    },
    {
      name: "París",
      description: "Ciudad del amor",
      image: "/images/paris.png",
    },
    {
      name: "Prado Florado",
      description: "Jardín",
      image: "/images/garden.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % places.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [places.length])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Escenas de lugares */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={places[activeScene].image || "/placeholder.svg"}
                    alt={places[activeScene].name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  {/* Overlay para mejorar la legibilidad del texto */}
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* Texto descriptivo */}
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-3xl font-bold mb-1">{places[activeScene].name}</h3>
                  <p className="text-xl opacity-90">{places[activeScene].description}</p>
                </div>

                {/* Elementos decorativos según el lugar */}
                {activeScene === 0 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <motion.div
                      className="absolute bottom-4 left-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-yellow-300 opacity-40" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 inset-x-0 h-10 bg-yellow-200 opacity-30"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    />
                  </div>
                )}

                {activeScene === 1 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <motion.div
                      className="absolute top-10 left-1/4 w-10 h-10 rounded-full bg-red-500 opacity-60"
                      animate={{
                        y: [0, -50, -100],
                        opacity: [0.6, 0.4, 0],
                        scale: [1, 1.5, 2],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        repeatDelay: 1,
                      }}
                    />
                    <motion.div
                      className="absolute top-20 right-1/4 w-8 h-8 rounded-full bg-orange-500 opacity-60"
                      animate={{
                        y: [0, -40, -80],
                        opacity: [0.6, 0.4, 0],
                        scale: [1, 1.3, 1.8],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.8,
                        delay: 0.5,
                        repeatDelay: 1.2,
                      }}
                    />
                  </div>
                )}

                {activeScene === 2 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute bottom-10 inset-x-0 flex justify-around">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-yellow-300 rounded-full opacity-80"
                          initial={{
                            y: 0,
                            opacity: 0,
                            left: `${10 + Math.random() * 80}%`,
                            top: `${70 + Math.random() * 20}%`,
                          }}
                          animate={{
                            y: [-20, -40, -60],
                            opacity: [0, 1, 0],
                            scale: [0.8, 1, 0.8],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2 + Math.random() * 3,
                            delay: Math.random() * 2,
                            repeatDelay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {activeScene === 3 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 1,
                        }}
                      >
                        <Flower className="text-white h-6 w-6 drop-shadow-md" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="relative bg-white p-6 sm:p-10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="bg-pink-500 rounded-full p-3 shadow-lg"
              >
                <PartyPopper className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-center mt-4 bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ¡Feliz Cumpleaños!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-2 text-xl sm:text-2xl font-medium text-gray-700"
            >
              Estefanía
            </motion.div>

            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }}>
                  <Sparkles className="h-6 w-6 text-yellow-400 mx-1" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center mt-6 text-lg text-gray-600"
            >
              Celebrando tus maravillosos
              <span className="relative mx-2">
                <span className="relative z-10 font-bold text-pink-600 text-2xl">29</span>
                <motion.div
                  className="absolute -inset-1 bg-pink-100 rounded-full z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
              años
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-center mt-4 text-gray-600"
            >
              Que este nuevo año de vida esté lleno de alegría, amor y momentos inolvidables.
            </motion.p>

            {/* Flores animadas */}
            <div className="mt-8 relative h-16">
              <div className="absolute inset-x-0 flex justify-around">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: [50, 0, 0, 50],
                      opacity: [0, 1, 1, 0],
                      rotate: i % 2 === 0 ? [0, 10, -10, 0] : [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                  >
                    <Flower
                      className={`h-8 w-8 ${
                        ["text-pink-400", "text-purple-400", "text-yellow-400", "text-rose-400"][i % 4]
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfetti(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg flex items-center space-x-2"
              >
                <Gift className="h-5 w-5" />
                <span>¡Celebremos!</span>
              </motion.button>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-6 w-6 text-red-500 fill-current" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
              >
                <Music className="h-6 w-6 text-blue-500" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
              >
                <PartyPopper className="h-6 w-6 text-yellow-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Componente de confeti separado */}
      {showConfetti && <ConfettiComponent onComplete={() => setShowConfetti(false)} />}
    </div>
  )
}
