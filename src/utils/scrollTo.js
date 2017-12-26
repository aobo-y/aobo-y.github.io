function scrollTo (name) {
  if (!name) return smoothScroll(0, 0)

  const element = document.getElementById('section-' + name)
  if (!element) return

  const offset = element.offsetTop
  smoothScroll(offset - 50)
}

let appScrollInterval

function smoothScroll (offset) {
  if (appScrollInterval) {
    clearInterval(appScrollInterval)
    appScrollInterval = null
  }

  const currentOffset = window.pageYOffset
  const duration = 350
  const frame = 35
  const step = Math.round((offset - currentOffset) / frame)

  appScrollInterval = setInterval(() => {
    const target = window.pageYOffset + step

    if (
      (target === offset) ||
      (step > 0 && target > offset) ||
      (step < 0 && target < offset)
    ) {
      window.scrollTo(0, offset)
      clearInterval(appScrollInterval)
      appScrollInterval = null
    } else {
      window.scrollTo(0, target)
    }
  }, duration / frame)
}

export default scrollTo
