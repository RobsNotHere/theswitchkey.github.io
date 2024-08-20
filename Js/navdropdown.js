function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  };
  window.onclick = function(event) {
    if (!event.target.matches('.icon-button')) {
      var dropdowns = document.getElementsByClassName("sub-menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }