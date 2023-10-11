const [red, green, blue] = [251, 250, 248]
const section = document.querySelector('#background')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [6*red/y, 8*green/y, 5*blue/y].map(Math.round)
  section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})