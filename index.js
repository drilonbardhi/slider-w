// data for holding which page we are on
let pageNumber = 0

// content for pages
const pages = [
  'a Londoner',
  'a webflow developer',
  'a JS developer',
  'looking for a job',
  'positive!'
]

const nextTag = document.querySelector("div img.is-next")
const prevTag = document.querySelector("div img.is-previous")
const outputTag = document.querySelector("p")

// function to increase page number
const next = function () {
  pageNumber += 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// function to decrease page number
const previous = function () {
  pageNumber -= 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber]
}

// event listener for next tag for output to middle paragraph
nextTag.addEventListener("click", function () {
  next()
})

// event listener for previous tag for output to middle paragraph
prevTag.addEventListener("click", function () {
  previous()
})