window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    
    document.getElementById("header").style.height = "5vh";
    document.querySelector(".logo").style.fontSize = "1.5rem";
    document.querySelector(".navigation").style.fontSize = "smaller";
  } else {
    document.getElementById("header").style.height = "7vh";
    document.querySelector(".logo").style.fontSize = "1.9rem";
    document.querySelector(".navigation").style.fontSize = "larger";
  }
}