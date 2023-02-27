function clickAnchor(){
  $(".-js-contact-trigger").click(function() {
    $('html, body').animate({
      scrollTop: $(".-js-contact").offset().top()
    }, 2000);
  });

  $(".-js-contact-trigger-nav").click(function() {
    $('html, body').animate({
      scrollTop: $(".-js-contact").offset().top()
    }, 2000);
  });

  $(".-js-contact-trigger-yours").click(function() {
    $('html, body').animate({
      scrollTop: $(".-js-contact").offset().top()
    }, 1200);
  });

  $(".-js-about-trigger").click(function() {
    $('html, body').animate({
      scrollTop: $(".-js-about").offset().top()
    }, 1200);
  });
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


// COPY TO CLIPBOARD
// Attempts to use .execCommand('copy') on a created text field
// Falls back to a selectable alert if not supported
// Attempts to display status in Bootstrap tooltip
// ------------------------------------------------------------------------------

/*function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }

  $('.o-footer__copy-email--success').addClass('-is-visible');

  setTimeout(function () {
    $('.o-footer__copy-email--success').removeClass('-is-visible');
  }, 1500);
}*/
