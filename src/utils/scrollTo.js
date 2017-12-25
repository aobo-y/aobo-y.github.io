function scrollTo (name) {
  if (!name) return window.scrollTo(0, 0)

  const element = document.getElementById('section-' + name)
  if (!element) return

  const offset = element.offsetTop
  window.scrollTo(0, offset - 50)
}

export default scrollTo
