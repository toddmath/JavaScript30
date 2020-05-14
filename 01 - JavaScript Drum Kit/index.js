const keys = [...document.querySelectorAll(".key")]

function playSound({ keyCode }) {
  const dataKey = `data-key="${keyCode}"`
  const audio = document.querySelector(`audio[${dataKey}]`)
  const key = document.querySelector(`div[${dataKey}]`)
  if (!audio) return

  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
}

function handleTransitionEnd({ propertyName, target }) {
  if (propertyName !== "transform") return
  target.classList.remove("playing")
}

// keys.forEach(key => {
//   key.addEventListener("transitionend", handleTransitionEnd)
// })

for (const key of keys) {
  console.log(`${key}.eventListener('transitionEnd')`)
  key.addEventListener("transitionend", handleTransitionEnd)
}

window.addEventListener("keydown", playSound)
