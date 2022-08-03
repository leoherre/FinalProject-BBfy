function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("seeMore");
  var btnText = document.getElementById("moreLessbutton");

  if (dots.style.display === "none") {
    dots.style.display = "flex";
    btnText.innerHTML = "Display more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Display less";
    moreText.style.display = "flex";
  }
}

