// const controls = document.querySelector(".controls")
const inputs = [...document.querySelectorAll(".controls input")]
// const [spacing, blur, base] = controls.querySelectorAll("input")

// console.log("spacing", spacing)
// console.log("blur", blur)
// console.log("base", base)
// console.log("img", img)
// console.log("root", root)

function handleUpdate() {
  const suffix = this.dataset.sizing || ""
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
  input.addEventListener("change", handleUpdate)
  input.addEventListener("mousemove", handleUpdate)
})
