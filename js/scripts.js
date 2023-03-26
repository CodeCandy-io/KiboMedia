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

const blogPost = (author, title, content, link) => {
  return `
  <div class="o-layout">
    <div class="o-layout__row">
      <div class="o-layout__cell">
        <p class="-small -pearl -uppercase">${author}</p>
        <p class="a-title a-title--m"><span class="-highlight-dark -bold">${title}</span></p>
        ${content}
        <a class="a-link a-link--primary" href="${link}">Ver el post</a>
      </div>
      <div class="o-layout__cell"></div>
    </div>
  </div>
  `
}

const fetchPosts = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };

  const postSection = document.getElementById("mediumBlog")

  await fetch("https://v1.nocodeapi.com/codecandy/medium/ToEBpQrucCyOBdGm", requestOptions)
      .then(response => response.json())
      .then(result => {
        result.forEach(post => {
          postSection.insertAdjacentHTML('beforeend', blogPost(post.author, post.title, post.content, post.link))
        })
      })
      .catch(error => console.log('error', error));
}

document.addEventListener('DOMContentLoaded',() => {
  fetchPosts()
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
