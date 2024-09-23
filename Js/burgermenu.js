function myburgerLink() {
  var x = document.getElementById("hamburger-page-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    document.getElementById("logo-icon")
    x.style.display = "block";
  } 
}
