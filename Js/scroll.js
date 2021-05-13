window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.top = "-10%";
  }
}