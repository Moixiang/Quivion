window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector(".header").style.backgroundColor = "rgba(0, 0, 0, 0.9)"
  } else {
    document.querySelector(".header").style.backgroundColor = "rgba(0, 0, 0, 0)"
  }
}