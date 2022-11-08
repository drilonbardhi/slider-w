let pageNumber = 0

const nextTag = document.querySelector("div img.is-next")
const outputTag = document.querySelector("p")

// added event listener to next tag for output to middle paragraph
nextTag.addEventListener("click", function () {
  pageNumber = pageNumber + 1
  outputTag.innerHTML = `It worked ${pageNumber}`
})