// data for holding which page we are on
let pageNumber = 0

// content for pages
const pages = [
  { copy: "a Londoner"},
  { copy: "a foodie"},
  { copy: "a JS developer"},
  { copy: "looking for a job"},
  { copy: "positive!"}
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
  outputTag.innerHTML = pages[pageNumber].copy
}

// event listener for next tag for output to middle paragraph
nextTag.addEventListener("click", function () {
  next()
})

// event listener for previous tag for output to middle paragraph
prevTag.addEventListener("click", function () {
  previous()
})