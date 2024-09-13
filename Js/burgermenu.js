function myburgerLink() {
  var x = document.getElementById("hamburger-page-nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
