function spacePlanet(evt, planetName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(planetName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// Header
$(document).ready(function() {

  $(".header__hamburger").on('click', function() {
      $('header').toggleClass('openmenu');
  })
}) 