const scrollToSection = navButtonId => {
  const sections = {
    "mainNavComm": ".-js-contact",
    "mainNavServices": ".-js-services",
    "mainNavValues": ".-js-values"
  }
  const navBar = document.getElementsByTagName('Header')[0]
  const targetSection = document.querySelector(sections[navButtonId])

  const navBarHeight = navBar.offsetHeight
  const sectionPosition = targetSection.getBoundingClientRect().top
  const offsetPosition = sectionPosition + window.scrollY - navBarHeight

  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
  })
}

const clickAnchor = () => {
  const commLink = document.getElementById('mainNavComm')
  const serviceLink = document.getElementById('mainNavServices')
  const valueLink = document.getElementById('mainNavValues')

  const menuLinks = [commLink, serviceLink, valueLink]

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      scrollToSection(event.target.id)
    })
  })
}

const openMenuMobile = () => {
  const menuButton = document.getElementById("menuButtonMobile")
  const menu = document.getElementById("menu")

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menu.classList.add("o-menu--is-displayed")

      const closeButton = document.getElementById("menuClose")
      closeButton.addEventListener('click', () => menu.classList.remove("o-menu--is-displayed"))
    })
  }
}

const openMenu = () => {
  const menuButton = document.getElementById("menuButton")
  const menu = document.getElementById("menu")

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menu.classList.add("o-menu--is-displayed")

      const closeButton = document.getElementById("menuClose")
      closeButton.addEventListener('click', () => menu.classList.remove("o-menu--is-displayed"))
    })
  }
}

document.addEventListener('DOMContentLoaded',() => {
  clickAnchor();
  openMenu();
  openMenuMobile();

  let options = {
    strings: ["marca", "producto", "evento"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  }

  const movingText = new Typed("#roulette", options)
})
