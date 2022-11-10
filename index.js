let pageNumber = 0

const nextTag = document.querySelector("div img.is-next")
const prevTag = document.querySelector("div img.is-previous")
const outputTag = document.querySelector("p")

const next = function () {
  pageNumber += 1

  if (pageNumber > 4) {
    pageNumber = 1
  }

  updateSection()
}

const previous = function () {
  pageNumber -= 1

  if (pageNumber < 1) {
    pageNumber = 4
  }

  updateSection()
}

const updateSection = function () {
  outputTag.innerHTML = `It worked ${pageNumber}`
}

// event listener for next tag for output to middle paragraph
nextTag.addEventListener("click", function () {
  next()
})

// event listener for previous tag for output to middle paragraph
prevTag.addEventListener("click", function () {
  previous()
})