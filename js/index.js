// Your code goes here

//function to query select--------------
const get = selector => document.querySelector(selector)

//Mouseover and mouse out--------------------
const introImage = get('.intro-img')

const newImage = () => {
  introImage.src = 'img/sunglassess.jpg'
}
introImage.addEventListener('mouseover', newImage)

const oldImage = () => {
  introImage.src = 'img/fun-bus.jpg'
}
introImage.addEventListener('mouseout', oldImage)

// Keydown--------------------------------------
const dontWant = document.querySelector('.remove-img')

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    dontWant.remove()
  }
})

// wheel--------------------------------------

// dbclick--------------------------------------
const getRandomColor = () => {
  const chars = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)]
  }
  return color
}

let pTags = document.querySelectorAll('p')
pTags.forEach(pTag => {
  pTag.addEventListener('click', e => {
    e.preventDefault()
    pTag.style.color = getRandomColor()
  })
})

// drag/drop--------------------------------------
let dragged

pTags.forEach(pTag => {
  pTag.draggable = true
  pTag.ondragstart = "event.dataTransfer.setData('text/plain',null)"
  pTag.classList.add('dropzone')
})

/* events fired on the draggable target */
document.addEventListener('drag', function (event) {}, false)

document.addEventListener(
  'dragstart',
  function (event) {
    // store a ref. on the dragged elem
    dragged = event.target
    // make it half transparent
    event.target.style.opacity = 0.5
  },
  false
)

document.addEventListener(
  'dragend',
  function (event) {
    // reset the transparency
    event.target.style.opacity = ''
  },
  false
)

/* events fired on the drop targets */
document.addEventListener(
  'dragover',
  function (event) {
    // prevent default to allow drop
    event.preventDefault()
  },
  false
)

document.addEventListener(
  'dragenter',
  function (event) {
    // highlight potential drop target when the draggable element enters it
    console.log(event.target)
    if (event.target.className == 'dropzone') {
      event.target.style.background = 'yellow'
    }
  },
  false
)

document.addEventListener(
  'dragleave',
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == 'dropzone') {
      event.target.style.background = ''
    }
  },
  false
)

document.addEventListener(
  'drop',
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault()
    // move dragged elem to the selected drop target
    if (event.target.className == 'dropzone') {
      event.target.style.background = ''
      dragged.parentNode.removeChild(dragged)
      event.target.appendChild(dragged)
    }
  },
  false
)

// load--------------------------------------

// focus--------------------------------------

// resize--------------------------------------

// scroll--------------------------------------
const picture = document.querySelectorAll('img')
let blur = 0
let lastKnownPosition = 0

window.addEventListener('scroll', e => {
  if (lastKnownPosition < window.scrollY) {
    blur += 1
  } else {
    blur -= 1
  }
  lastKnownPosition = window.scrollY

  picture.forEach(pic => (pic.style.filter = `blur(${blur}px)`))
})

// select--------------------------------------
