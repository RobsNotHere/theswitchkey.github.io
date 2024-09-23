function myburgerLink() {
  var x = document.getElementById("hamburger-page-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  } 
  var y = document.getElementById("logo-icon");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
