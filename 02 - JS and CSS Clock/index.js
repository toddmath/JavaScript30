const clockFace = document.querySelector(".clock-face")
const [hourHand, minuteHand, secondHand] = clockFace.children

const handleHours = () => new Date().getHours()
const handleMinutes = () => new Date().getMinutes()
const handleSeconds = () => new Date().getSeconds()

const handleTime = () => {
  const now = new Date()
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  }
}

const getDegrees = type => {
  const { hours, minutes, seconds } = handleTime()
  const degrees = {
    seconds: (seconds / 60) * 360 + 90,
    minutes: (minutes / 60) * 360 + (seconds / 60) * 6 + 90,
    hours: (hours / 12) * 360 + (minutes / 60) * 30 + 90,
  }
  return degrees[type]
}

secondHand.style.transform = `rotate(${getDegrees("seconds")}deg)`
minuteHand.style.transform = `rotate(${getDegrees("minutes")}deg) scaleX(0.9)`
hourHand.style.transform = `rotate(${getDegrees("hours")}deg) scaleX(0.8)`

setInterval(() => {
  secondHand.style.transform = `rotate(${getDegrees("seconds")}deg)`
}, 1000)

setInterval(() => {
  minuteHand.style.transform = `rotate(${getDegrees("minutes")}deg) scaleX(0.9)`
}, 60000)

setInterval(() => {
  hourHand.style.transform = `rotate(${getDegrees("hours")}deg) scaleX(0.8)`
}, 86400000)
