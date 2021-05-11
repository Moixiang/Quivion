window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
    document.querySelector(".astronaut").style.opacity = "1";
    document.querySelector(".astronaut").style.top = "90%";
  } else {
    document.querySelector(".astronaut").style.opacity = "0";
    document.querySelector(".astronaut").style.top = "120%";
  }
}


// var text = ['“What did the 5 fingers say to the face. S L A P!”', '“Hey hey hey, smoke weed everyday”'];

// textSequence(0);
// function textSequence(i) {

//     if (text.length > i) {
//         setTimeout(function() {
//             document.getElementById("sequence").innerHTML = text[i];
//             textSequence(++i);
//         }, 2500);

//     } else if (text.length == i) {
//         textSequence(0);
//     }
// }