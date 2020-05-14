const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

const searchBox = document.querySelector(".search")

// const fetchData = () => {
//   const data = fetch(endpoint)
//     .then(d => d.json())
//     .then(j => console.log(j))
//   return data
// }

const fetchData = () => {
  if (window && window.fetch) {
    const data = fetch(endpoint).then(d => d.json())
    return data
  }
  return null
}

const cities = []
fetch(endpoint)
  .then(data => data.json())
  .then(j => {
    cities.push(...j)
    console.table(cities)
  })

function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, "gi")
  // here we need to figure out if the city or state matches what was searched
  return cities.filter(({ city, state }) => city.match(regex) || state.match(regex))
}

const numberWithCommas = x => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray
    .map(({ city, state, population }) => {
      const regex = new RegExp(this.value, "gi")
      const cityName = city.replace(regex, `<span class="hl">${this.value}</span>`)
      const stateName = state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(population)}</span>
      </li>
    `
    })
    .join("")
  suggestions.innerHTML = html
}

const searchInput = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)
