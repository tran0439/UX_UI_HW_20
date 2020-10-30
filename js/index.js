$( document ).ready(function() {
    new WOW().init();
  });

  $("#pop").on("click", function(e) {
    e.preventDefault();
    $('#the-modal').modal('toggle');
 });

 // optional
 $('#blogCarousel').carousel({
  interval: 5000
});