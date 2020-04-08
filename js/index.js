// Your code goes here

//function to query select--------------
const get = selector => document.querySelector(selector)

//Mouseover -----------------------------------------------------------------------
const introImage = get('.intro-img')

const newImage = () => {
  introImage.src = 'img/sunglassess.jpg'
}
introImage.addEventListener('mouseover', newImage)

//mouse out-----------------------------------------------------------------------
const oldImage = () => {
  introImage.src = 'img/fun-bus.jpg'
}
introImage.addEventListener('mouseout', oldImage)

// Keydown-------------------------------------------------------------------------
const dontWant = document.querySelector('.remove-img')

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    dontWant.remove()
  }
})

//Key Up--------------------------------------------------------------------------
const dontWantP = document.querySelector('.remove-p')
document.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    dontWantP.remove()
  }
})

//selected-----------------------------------------------------------------------
function logSelection(event) {
  const log = document.querySelector('.log')
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  )
  log.textContent = `You selected: ${selection}`
}

const input = document.querySelector('input')
input.addEventListener('select', logSelection)

// wheel--------------------------------------------------------------------------
function zoom(event) {
  event.preventDefault()

  scale += event.deltaY * -0.01

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4)

  // Apply scale transform
  el.style.transform = `scale(${scale})`
}

let scale = 1
const el = document.querySelector('.resize')
el.onwheel = zoom

// click------------------------------------------------------------------------
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

// drag/drop----------------------------------------------------------------------
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

// scroll--------------------------------------------------------------------------
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

// click--------------------------------------------------------------------------

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'I have been clicked'
  })
})
