window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("link").style.color = "black";
    document.getElementById("link1").style.color = "black";
    document.getElementById("link2").style.color = "black";
    document.getElementById("link3").style.color = "black";
    document.getElementById("link4").style.color = "black";
    document.getElementById("link5").style.color = "black";
    document.getElementById("link6").style.color = "black";
    document.getElementById("link7").style.color = "black";
    document.getElementById("link8").style.color = "black";
    document.getElementById("link9").style.color = "black";
    document.getElementById("link10").style.color = "black";
    document.getElementById("navbar").style.paddingInline = "199px";
    document.getElementById("navbar").style.paddingBlock = "20px";
    document.getElementById("navbar").style.marginInline = "-175px";
    document.getElementById("navbar").style.marginBlock = "-31px";
    document.getElementById("navbar").style.transition = "0.4s";
    document.getElementById("navbar").style.opacity = "0.9";

  } else {
    document.getElementById("link").style.color = "";
    document.getElementById("link1").style.color = "";
    document.getElementById("link2").style.color = "";
    document.getElementById("link3").style.color = "";
    document.getElementById("link4").style.color = "";
    document.getElementById("link5").style.color = "";
    document.getElementById("link6").style.color = "";
    document.getElementById("link7").style.color = "";
    document.getElementById("link8").style.color = "";
    document.getElementById("link9").style.color = "";
    document.getElementById("link10").style.color = "";
    document.getElementById("navbar").style.background = "";
    document.getElementById("navbar").style.paddingInline = "0";
    document.getElementById("navbar").style.paddingBlock = "0";
    document.getElementById("navbar").style.marginInline = "0";
    document.getElementById("navbar").style.marginBlock = "0";
    
  }
}
