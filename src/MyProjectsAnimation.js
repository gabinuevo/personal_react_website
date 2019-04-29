// For more check out zachsaucier.com
var si = document.querySelectorAll(".one"),
  to = document.querySelectorAll(".two"),
  te = document.querySelectorAll(".text");

for (var i = 0, j = si.length; i < j; i++) {
  applyEverything(si[i], to[i], te[i]);
}

function applyEverything(sides, topbottom, text) {
  var gparent = sides.parentNode.parentNode;

  gparent.onmouseenter = function () {
    sides.style.fill = "rgb(20,20,20)";
    text.style.color = "white";
    console.log("over");

    // Originally these made sense... Then reality happened
    TweenLite.to(topbottom, .8, { strokeDasharray: "-130 900 -130 900", strokeDashoffset: 20, ease: Power2.linear });
    TweenLite.to(topbottom, .6, { strokeDasharray: "470 300 470 300", strokeDashoffset: 470, delay: .3, ease: Power2.linear });

    TweenLite.to(sides, .8, { strokeDasharray: "-200 1070 -200 1000", strokeDashoffset: 640, ease: Power2.linear });
    TweenLite.to(sides, .6, { strokeDasharray: "300 470 300 470", strokeDashoffset: 770, delay: .3, ease: Power2.linear });

    setTimeout(function () { // Delay fade when leaving hover
      sides.style.transition = "fill .6s .6s";
      text.style.transition = "color .6s .6s";
    }, 10);
  }

  gparent.onmouseleave = function () {
    sides.style.fill = "transparent";
    text.style.color = "rgb(20,20,20)";
    console.log("out");
    setTimeout(function () {
      sides.style.transition = "fill .6s"; // Reset fade for next hover
      text.style.transition = "color .6s";
    }, 10);

    // Originally these made sense... Then reality happened
    TweenLite.to(topbottom, .8, { strokeDasharray: "-130 1050 -130 900", strokeDashoffset: 20, ease: Power2.linear });
    TweenLite.to(topbottom, .6, { strokeDasharray: "300 470 300 470", strokeDashoffset: 0, delay: .4, ease: Power2.linear });

    TweenLite.to(sides, .8, { strokeDasharray: "-200 1335 -200 1000", strokeDashoffset: 640, ease: Power2.linear });
    TweenLite.to(sides, .6, { strokeDasharray: "470 300 470 300", strokeDashoffset: 470, delay: .4, ease: Power2.linear });
  }
}