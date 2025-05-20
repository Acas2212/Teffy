document.addEventListener("DOMContentLoaded", () => {
  // Cambio de escenas
  const scenes = document.querySelectorAll(".scene")
  let currentScene = 0

  // Activar la primera escena
  scenes[currentScene].classList.add("active")

  // Cambiar escenas cada 3 segundos
  setInterval(() => {
    scenes[currentScene].classList.remove("active")
    currentScene = (currentScene + 1) % scenes.length
    scenes[currentScene].classList.add("active")
  }, 3000)

  // Confeti
  const canvas = document.getElementById("confetti-canvas")
  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // Ajustar tamaño del canvas cuando cambia el tamaño de la ventana
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  // Clase para partículas de confeti
  class Confetti {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height - canvas.height
      this.size = Math.random() * 10 + 5
      this.speed = Math.random() * 3 + 2
      this.angle = Math.random() * 360
      this.spin = Math.random() * 10 - 5
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
    }

    update() {
      this.y += this.speed
      this.angle += this.spin

      if (this.y > canvas.height) {
        this.y = -this.size
        this.x = Math.random() * canvas.width
      }
    }

    draw() {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate((this.angle * Math.PI) / 180)
      ctx.fillStyle = this.color
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
      ctx.restore()
    }
  }

  let confettiParticles = []
  let isConfettiActive = false

  function createConfetti() {
    confettiParticles = []
    for (let i = 0; i < 150; i++) {
      confettiParticles.push(new Confetti())
    }
  }

  function animateConfetti() {
    if (!isConfettiActive) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    confettiParticles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    requestAnimationFrame(animateConfetti)
  }

  // Botón para activar el confeti
  const celebrateBtn = document.getElementById("celebrate-btn")
  celebrateBtn.addEventListener("click", () => {
    isConfettiActive = true
    createConfetti()
    animateConfetti()

    // Detener el confeti después de 3 segundos
    setTimeout(() => {
      isConfettiActive = false
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }, 3000)
  })

  // Precargar imágenes
  function preloadImages() {
    const imageUrls = ["beach.jpg", "volcano.jpg", "paris.jpg", "garden.jpg"]
    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }

  preloadImages()
})
