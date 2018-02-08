var titleImage = document.getElementsByClassName("imagenportada")[0];

titleImage.addEventListener("mousemove", function(event) {
  this.style.backgroundPosition =
    event.pageX * -1 / 12 + "px " + event.pageY * -1 / 12 + "px";
});

titleImage.addEventListener("mouseleave", function() {
  this.style.backgroundPosition = "center center";
});
